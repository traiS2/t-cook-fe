import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";
import { authClientMiddleware } from "./middleware/auth.client";
import { authServerMiddleware } from "./middleware/auth.server";

export default auth(async (req) => {
    const middlewares = [authServerMiddleware, authClientMiddleware];
    for (const mw of middlewares) {
        const res = await mw(req);
        if (res) {
            return res;
        }
    }
    return NextResponse.next();
});

export const config = {
    matcher: ["/dashboard/:path*", "/dashboard/blog/create"],
};
