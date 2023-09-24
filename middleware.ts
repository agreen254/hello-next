import { NextRequest, NextResponse } from "next/server";
// syntax means that you export the default object from the specified module
export { default } from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
  // *: zero or more parameters
  // +: one or more parameters
  // ?: zero or one parameter(s)
  // matcher: ["/users/:id*", "/dashboard/:path*"],
  matcher: [],
};
