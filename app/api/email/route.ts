import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "llppi <llppi@llppi.com>",
    to: "aarongreen1997@gmail.com",
    subject: "Using Resend Test message",
    react: WelcomeTemplate({ name: "Aaron" }),
  });

  return NextResponse.json({});
}
