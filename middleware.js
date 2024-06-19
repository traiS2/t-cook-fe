// import { NextRequest, NextResponse } from "next/server";
// import { signIn, useSession } from "next-auth/react";

// export function middleware(request: NextRequest) {
//     const { data: session } = useSession();
//     const currentUser = request.cookies.get("t-cook");

//     if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
//         return NextResponse.rewrite(new URL("/dashboard", request.url));
//     } else {
//         return NextResponse.rewrite(new URL("/auth/login", request.url));
//     }
// }

// export const config = {
//     matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };

import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";
import { getToken } from "next-auth/jwt";

export default auth(async (req) => {
    const secret = process.env.AUTH_SECRET;

    const protectPathRegex = /^(\/dashboard|\/admin)/;
    if (!req.auth && protectPathRegex.test(req.nextUrl.pathname)) {
        const newUrl = new URL("/auth/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    const token = await getToken({ req, secret });
    const userRole = token?.role;
    if (
        req.nextUrl.pathname.startsWith("/dashboard/admin") &&
        userRole !== "admin"
    ) {
        return NextResponse.redirect(
            new URL("/not-authorized", req.nextUrl.origin)
        );
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
