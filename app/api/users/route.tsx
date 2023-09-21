// we can either have a page file or a route file
// if you want to return markup or html content use a page file
// if you want to handle http requests then add a route file

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  // even if we don't use request, we must include it in the fxn params
  // to prevent caching of the fetched data.

  return NextResponse.json([
    { id: 1, name: "Aaron" },
    { id: 2, name: "Patrick" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate data
  // if invalid, return err 400
  // else, return created data
  //   if (!body.name)
  //     return NextResponse.json({ error: "Name is required." }, { status: 400 });
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
