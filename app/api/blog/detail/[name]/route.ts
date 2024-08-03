import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(request: NextRequest) {
    const prisma = new PrismaClient();
    try {
        const path = request.nextUrl.pathname.split("/");
        const title = path[path.length - 1];

        const blog = await prisma.blog.findUnique({
            where: {
                link: title,
            },
            select: {
                link: true,
                title: true,
                image: true,
                levelOfDifficult: true,
                cookingTime: true,
                servingSize: true,
                createAt: true,
                category: {
                    select: {
                        category: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
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
                ingredient: {
                    select: {
                        id: true,
                        name: true,
                    },
                    orderBy: {
                        id: "asc",
                    },
                },
                recipe: {
                    select: {
                        id: true,
                        title: true,
                        detailRecipe: {
                            select: {
                                id: true,
                                content: true,
                            },
                            orderBy: {
                                id: "asc",
                            },
                        },
                        imageRecipe: {
                            select: {
                                id: true,
                                url: true,
                            },
                        },
                    },
                    orderBy: {
                        id: "asc",
                    },
                },
            },
        });
        const newBlog = {
            ...blog,
            category: blog?.category.map((category) => ({
                id: category.category.id,
                name: category.category.name,
            })),
        };
        if (blog) {
            return Response.json(newBlog, { status: 200 });
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
