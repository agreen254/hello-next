import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(10).includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ", {
      message: "Password must include an uppercase number.",
    }),
    confirmPassword: z.string().min(10).includes("ABCDEFGHIJKLMNOPQRSTUVWXYZ", {
      message: "Password must include an uppercase number.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json(
      { error: "User already exists." },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email });
}
