import { Blog, Tag, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request) {
    function convertTitleToSlug(title: string): string {
        // Chuyển đổi tất cả các ký tự sang chữ thường
        const normalizedStr = title
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        // Convert to lowercase and replace spaces with hyphens
        const slugifiedStr = normalizedStr.toLowerCase().replace(/\s+/g, "-");

        return slugifiedStr;
    }

    try {
        const data = await req.json();
        console.log(data);
        const tagRequest: TagRequest[] = data.tag;

        if (
            !data ||
            !data.ingredient ||
            !data.introduction ||
            !data.recipe ||
            !data.category ||
            !data.tag
        ) {
            return NextResponse.json(
                { message: "Bad Request: Missing required data" },
                { status: 400 }
            );
        }

        const tagIDListd: Tag[] = await Promise.all(
            tagRequest.map(async (tag) => {
                const tagExist = await prisma.tag.findUnique({
                    where: { id: tag.id },
                });
                if (tagExist) {
                    return tagExist;
                } else {
                    const tagCreate = await prisma.tag.create({
                        data: {
                            name: tag.name,
                        },
                    });
                    return tagCreate;
                }
            })
        );

        const tagIDList = async (tag: TagRequest) => {
            const tagPromis = tagRequest.map(async (tag) => {
                const tagExist = await prisma.tag.findUnique({
                    where: { id: tag.id },
                });
                if (tagExist) {
                    return tagExist;
                } else {
                    const tagCreate = await prisma.tag.create({
                        data: {
                            name: tag.name,
                        },
                    });
                    return tagCreate;
                }
            });
            return Promise.all(tagPromis);
        };

        const tagRecords = await tagIDList(data.tag);

        const link = convertTitleToSlug(data.title);

        const newBlog = await prisma.blog.create({
            data: {
                link: link,
                title: data.title,
                image: data.image,
                levelOfDifficult: data.levelOfDifficulty,
                cookingTime: data.cookingTime,
                servingSize: data.servingSize,
                ingredient: {
                    create: data.ingredient.map((ingredient: Ingredient) => ({
                        id: ingredient.id,
                        name: ingredient.name,
                    })),
                },
                createAt: new Date(),
                user: {
                    connect: {
                        id: "cly16s05s00005exvfptgd9z4",
                    },
                },
                status: "pending",
                introduction: {
                    create: data.introduction?.map((intro: Introduction) => ({
                        id: intro.id,
                        content: intro.content,
                    })),
                },
                recipe: {
                    create: data.recipe?.map((recipe: Recipe) => ({
                        id: recipe.id,
                        title: recipe.name,
                        detailRecipe: {
                            create: recipe.detailRecipe?.map(
                                (detailRecipe: DetailRecipe) => ({
                                    id: detailRecipe.id,
                                    content: detailRecipe.content,
                                })
                            ),
                        },
                        ...(recipe.image && {
                            imageRecipe: {
                                create: {
                                    url: recipe.image,
                                },
                            },
                        }),
                    })),
                },

                category: {
                    create: data.category?.map((categoryId: number) => ({
                        category: {
                            connect: {
                                id: categoryId,
                            },
                        },
                    })),
                },

                tag: {
                    create: tagRecords?.map((tag: Tag) => ({
                        tag: {
                            connect: {
                                id: tag.id,
                            },
                        },
                    })),
                },
            },
        });
        console.log(newBlog);
        if (newBlog) {
            return NextResponse.json(newBlog, { status: 201 });
        } else {
            return NextResponse.json({ status: 400 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        prisma.$disconnect();
    }
}

type TagRequest = {
    id: number;
    name: string;
    new: boolean;
};

type Introduction = {
    id: number;
    content: string;
};

type Ingredient = {
    id: number;
    name: string;
};

type Recipe = {
    id: number;
    name: string;
    detailRecipe: DetailRecipe[];
    image: ImageRecipe;
};

type DetailRecipe = {
    id: number;
    content: string;
};

type ImageRecipe = {
    id: number;
    url: string;
};

// import { cookies } from "next/headers";
// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     const cookieStore = cookies();
//     const jwtCookie = cookieStore.get("t-cook");
//     const response = await fetch(
//       process.env.DATA_API_KEY_BE + "/api/blog/create-blog",
//       {
//         cache: "no-store",
//         method: "POST",
//         headers: {
//           Cookie: `t-cook=${jwtCookie?.value}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     if (response.ok) {
//       return new Response(data, {
//         status: 201,
//       });
//     } else {
//       return Response.json(
//         `Failed to fetch data: ${response.status} - ${response.statusText}`
//       );
//     }
//   } catch (error: any) {
//     return Response.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// }
