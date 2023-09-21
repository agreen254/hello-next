import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch data from db
  // return 404 if not found
  // else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({
    id: 1,
    name: "Aaron",
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate the request body
  // if invalid, return err 400
  // else, fetch the user with the given id
  // if that user id doesn't exist, return err 404
  // else, update the user in the db
  // return the updated user
  const body = await request.json();
  const validation = schema.safeParse(body);

  //   if (!body.name)
  //     return NextResponse.json({ error: "Name is requred." }, { status: 400 });
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  if (params.id > 10)
    // user doesn't exist
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch the user from db
  // if user is not found, return 404
  // else, delete user from db
  // return 200
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({});
}
