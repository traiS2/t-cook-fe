import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req: NextRequest) {
    
    const prisma = new PrismaClient();

    const limit = 3;

    try {
        const quatityBlog = await prisma.blog.count({
            where: {
                status: "active",
            },
        });

        const summaryBlog = await prisma.blog.findMany({
            take: 3,
            skip: 0,
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