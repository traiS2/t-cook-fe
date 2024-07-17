import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: NextRequest) {
    const prisma = new PrismaClient();

    const { searchParams } = new URL(req.url);

    try {
        const position = parseInt(searchParams.get("position") || "1", 10);
        const NUMBER_OF_BLOG_ON_A_PAGE = 3; // số blog hiển thị trên mỗi trang

        const skipBlogs = (position - 1) * NUMBER_OF_BLOG_ON_A_PAGE;

        const quatityBlog = await prisma.blog.count({
            where: {
                status: "active",
            },
        });

        const totalPage = Math.ceil(quatityBlog / NUMBER_OF_BLOG_ON_A_PAGE);

        const takePage = Math.min(NUMBER_OF_BLOG_ON_A_PAGE, quatityBlog - skipBlogs);

        const summaryBlog = await prisma.blog.findMany({
            take: takePage,
            skip: skipBlogs,
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
    } catch (error: any) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
