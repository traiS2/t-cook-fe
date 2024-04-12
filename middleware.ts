import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("t-cook");

  // if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard", request.url));
  // } else {
  //   return NextResponse.rewrite(new URL("/auth/login", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
