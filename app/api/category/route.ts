import { Category, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const category: Category[] = await prisma.category.findMany();

        if (category.length === 0) {
            return NextResponse.json(
                { message: "No category found" },
                { status: 404 }
            );
        }

        return NextResponse.json(category, { status: 200 });
    } catch (e) {
        return NextResponse.json(
            { message: "Internal Server Error at Category" },
            { status: 500 }
        );
    } finally {
        prisma.$disconnect();
    }
}

// import { cookies } from "next/headers";
// interface category {
//     id: number;
//     name: string;
// }
// // Handles GET requests to /api

// export async function GET() {
//     try {
//         const cookieStore = cookies();
//         const jwtCookie = cookieStore.get("t-cook");
//         console.log(jwtCookie);
//         const res = await fetch(
//             process.env.DATA_API_KEY_BE + "server/api/category",
//             {
//                 cache: "no-store",
//                 headers: {
//                     Cookie: `t-cook=${jwtCookie?.value}`,
//                 },
//             }
//         );
//         if (res.ok) {
//             const categories: category[] = await res.json();
//             return Response.json(jwtCookie);
//         } else {
//             return Response.json(
//                 `Failed to fetch data: ${res.status} - ${res.statusText}`
//             );
//         }
//     } catch (error: any) {
//         return Response.json(
//             { message: "Internal Server Error" },
//             { status: 500 }
//         );
//     }
// }
