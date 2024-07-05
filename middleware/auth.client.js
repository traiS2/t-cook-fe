import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function authClientMiddleware(req) {
    const secret = process.env.AUTH_SECRET;
    const protectPathRegex = /^(\/dashboard|\/admin|)/;
    const token = await getToken({ req, secret });
    const userRole = token?.role;
    if (!req.auth && protectPathRegex.test(req.nextUrl.pathname)) {
        const newUrl = new URL("/auth/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    if (protectPathRegex.test(req.nextUrl.pathname) && userRole !== "admin") {
        return NextResponse.redirect(
            new URL("/not-authorized", req.nextUrl.origin)
        );
    }
}
