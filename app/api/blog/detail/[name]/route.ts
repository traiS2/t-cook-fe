import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const path = request.nextUrl.pathname.split("/");
        const name = path[path.length - 1];
        const response = await fetch(
            process.env.DATA_API_KEY_BE + "/api/blog/get-detail-blog/" + name,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        if (response.ok) {
            const blog = await response.json();
            return Response.json(blog);
        } else {
            return Response.json(
                `Failed to fetch data: ${response.status} - ${response.statusText}`
            );
        }
    } catch (error: any) {
        return Response.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
