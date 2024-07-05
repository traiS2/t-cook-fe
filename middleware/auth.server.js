import { NextResponse } from "next/server";

export async function authServerMiddleware(req) {
    try {
        const protectAPI = /^(\/api)/;
        const { auth } = req;

        if (protectAPI.test(req.nextUrl.pathname)) {
            if (auth?.user?.role !== "admin") {
                return NextResponse.json(
                    { error: "Forbidden" },
                    { status: 403 }
                );
            }
        }
    } catch (e) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
