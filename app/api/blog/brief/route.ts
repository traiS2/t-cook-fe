import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET() {
    const prisma = new PrismaClient();
    try {
        const briefBlog = await prisma.blog.findMany({
            take: 3,
            orderBy: {
                createAt: "desc",
            },
            select: {
                id: true,
                title: true,
                link: true,
                image: true,
            },
            where: {
                status: "active",
            },
        });
        if (briefBlog) {
            return NextResponse.json(briefBlog, { status: 200 });
        } else {
            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            );
        }
    } catch (error: any) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        prisma.$disconnect();
    }
}
