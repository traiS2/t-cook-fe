import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET() {
    const prisma = new PrismaClient();
    try {
        const summaryBlog = await prisma.blog.findMany({
            take: 5,
            orderBy: {
                createAt: "desc",
            },
            where: {
                status: "active",
            },
            select: {
                id: true,
                link: true,
                title: true,
                image: true,
                createAt: true,
                user: {
                    select: {
                        name: true,
                    },
                },
                introduction: {
                    select: {
                        id: true,
                        content: true,
                    },
                    orderBy: {
                        id: "asc",
                    },
                },
                tag: {
                    select: {
                        tag: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });

        const flattendSummaryBlog = summaryBlog.map((blog) => ({
            ...blog,
            tag: blog.tag.map((tagRelation) => ({
                id: tagRelation.tag.id,
                name: tagRelation.tag.name,
            })),
        }));

        if (flattendSummaryBlog) {
            return NextResponse.json(flattendSummaryBlog, {
                status: 200,
            });
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
