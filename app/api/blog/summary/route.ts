import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();

    const { searchParams } = new URL(req.url);

    try {
        const position = parseInt(searchParams.get("position") || "1", 10);
        const NUMBER_OF_BLOG_ON_A_PAGE = 2; // number of blogs displayed on a page

        var takePage = NUMBER_OF_BLOG_ON_A_PAGE;

        const quatityBlog = await prisma.blog.count({
            where: {
                status: "active",
            },
        });

        const totalPage = Math.ceil(quatityBlog / NUMBER_OF_BLOG_ON_A_PAGE);

        if (
            position === totalPage &&
            quatityBlog % NUMBER_OF_BLOG_ON_A_PAGE !== 0
        ) {
            takePage = quatityBlog % NUMBER_OF_BLOG_ON_A_PAGE;
        }

        const summaryBlog = await prisma.blog.findMany({
            take: takePage,
            skip: position - 1,
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
            return NextResponse.json(
                {
                    blog: flattendSummaryBlog,
                    totalPage: totalPage,
                    position: position,
                },
                {
                    status: 200,
                }
            );
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
