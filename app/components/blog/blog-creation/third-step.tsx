"use client";
import Select from "react-select";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import ReactSelectCreatable from "react-select/creatable";
import { useCreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/app/config/firebase-config";
import cryptoRandomString from "crypto-random-string";

interface Category {
    id: number;
    name: string;
}

interface SelectCategory {
    value: number;
    label: string;
}

interface Tag {
    id: number;
    name: string;
    isNew?: boolean;
}

interface SelectTag {
    value: number;
    label: string;
    __isNew__?: boolean;
}

export default function ThirdStep() {
    const { blog, setBlog } = useCreateBlogContext();

    const [selectCategories, setSelectCategories] = useState<SelectCategory[]>(
        []
    );

    const [selectTags, setSelectTags] = useState<SelectTag[]>([]);

    const handleOnChangeCategory = (e: any) => {
        // const newCategory: Category[] = e.map((value: any) => {
        //     return {
        //         id: value.value,
        //         name: value.label,
        //     };
        // });
        const newCategory: number[] = e.map((value: any) => {
            return value.value;
        });
        const newBlog = { ...blog, category: newCategory };
        setBlog(newBlog);
    };

    const handleOnChangeTag = (e: any) => {
        const newTags: Tag[] = e.map((value: any) => {
            return {
                id: value.value,
                name: value.label,
                isNew: value.__isNew__ ? true : false,
            };
        });
        const newBlog = { ...blog, tag: newTags };
        setBlog(newBlog);
    };

    const uploadFileImage = async (image: any) => {
        const promises = [];
        try {
            const imageRef = ref(
                storage,
                `images/${cryptoRandomString({ length: 12 })}`
            );
            const snapshot = await uploadBytes(imageRef, image);
            const url = await getDownloadURL(snapshot.ref);
            const updatedBlog = { ...blog };
            updatedBlog.image.url = url;
            promises.push(setBlog(updatedBlog));
            await Promise.all(promises);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const handleOnClickCreateBlog = async () => {
        const promises = [];
        promises.push(uploadAllFiles());
        promises.push(uploadFileImage(blog.image.file));

        await Promise.all(promises);

        const introductionRequest: IntroductionBlogCreationRequest[] =
            blog.introduction.map((introduction, index) => {
                return {
                    id: index,
                    content: introduction,
                };
            });

        const ingredientRequest: IngredientBlogCreationRequest[] =
            blog.ingredient.map((ingredient, index) => {
                return {
                    id: index,
                    name: ingredient,
                };
            });

        const recipeRequest: RecipeBlogCreationRequest[] = blog.recipe.map(
            (recipe, index) => {
                return {
                    id: index,
                    name: recipe.name,
                    detailRecipe: recipe.detailRecipe.map(
                        (detailRecipe, index) => {
                            return {
                                id: index,
                                content: detailRecipe,
                            };
                        }
                    ),
                    image: recipe.image.url,
                };
            }
        );

        const tagRequest: TagBlogCreationRequest[] = blog.tag.map((tag) => {
            return {
                id: typeof tag.id === "number" ? tag.id : 0,
                name: tag.name,
                new: typeof tag.id === "number" ? false : true,
            };
        });

        const dataRequest: BlogCreationRequest = {
            title: blog.title,
            category: blog.category,
            image: blog.image.url,
            introduction: introductionRequest,
            levelOfDifficulty: blog.levelOfDifficulty,
            cookingTime: blog.cookingTime,
            servingSize: blog.servingSize,
            ingredient: ingredientRequest,
            recipe: recipeRequest,
            tag: tagRequest,
            userId: 1,
        };

        try {
            const response = await fetch(
                process.env.DATA_API_KEY_FE + "/api/blog",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataRequest),
                }
            );

            if (response.status === 201) {
                alert("Tạo blog thành công");
                setBlog({
                    title: "",
                    category: [],
                    image: {
                        image: "/t-cook-logo-d.png",
                        url: "",
                        file: "",
                    },
                    introduction: [""],
                    levelOfDifficulty: 1,
                    cookingTime: 90,
                    servingSize: 0,
                    ingredient: [],
                    recipe: [
                        {
                            name: "",
                            detailRecipe: [
                                {
                                    id: 0,
                                    content: "",
                                },
                            ],
                            image: {
                                image: "",
                                url: "",
                                file: "",
                            },
                        },
                    ],
                    tag: [],
                });
            } else {
                alert(response.text);
            }
        } catch (error: any) {
            return NextResponse.json({ message: error.text }, { status: 500 });
        }
    };

    const uploadAllFiles = async () => {
        const promises = [];

        const uploadFile = async (imageRef: any, file: any, pos: any) => {
            const snapshot = await uploadBytes(imageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            const updatedBlog = { ...blog };
            updatedBlog.recipe[pos].image.url = url;
            setBlog(updatedBlog);
        };

        for (let i = 0; i < blog.recipe.length; i++) {
            if (blog.recipe[i].image.file !== "") {
                const imageRef = ref(
                    storage,
                    `images/${cryptoRandomString({ length: 12 })}`
                );

                promises.push(
                    uploadFile(imageRef, blog.recipe[i].image.file, i)
                );
            }
        }

        await Promise.all(promises);
    };

    async function getCategories() {
        try {
            const categoriesJson = await fetch(
                process.env.DATA_API_KEY_FE + "/api/category"
            );
            const categoriesData: Category[] = await categoriesJson.json();
            const newCategoriesData: SelectCategory[] = categoriesData.map(
                (category) => ({
                    value: category.id,
                    label: category.name,
                })
            );
            setSelectCategories(newCategoriesData);
        } catch (error) {
            return NextResponse.json(
                { message: "Internal NextJS Error" },
                { status: 500 }
            );
        }
    }

    async function getTags() {
        try {
            const tagsJson = await fetch(
                process.env.DATA_API_KEY_FE + "/api/tag"
            );
            const tagsData: Tag[] = await tagsJson.json();
            const newTagsData: SelectTag[] = tagsData.map((tag) => ({
                value: tag.id,
                label: tag.name,
            }));
            setSelectTags(newTagsData);
        } catch (error) {
            return NextResponse.json(
                { message: "Internal NextJS Error" },
                { status: 500 }
            );
        }
    }

    useEffect(() => {
        getCategories();
        getTags();
    }, []);

    return (
        <div>
            <fieldset className="border h-auto border-solvalue rounded-md border-gray-300 p-3 mx-1">
                <legend className="text-sm">Danh mục</legend>
                <Select
                    className="w-full h-auto !text-sm"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                            ...theme.colors,
                            primary: "gray",
                        },
                    })}
                    isMulti
                    options={selectCategories}
                    onChange={(e) => handleOnChangeCategory(e)}
                />
            </fieldset>
            <fieldset className="border h-auto border-solvalue rounded-md border-gray-300 p-3 mx-1">
                <legend className="text-sm">Tag</legend>
                <ReactSelectCreatable
                    className="w-full h-auto !text-sm"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 8,
                        colors: {
                            ...theme.colors,
                            primary: "gray",
                        },
                    })}
                    isMulti
                    options={selectTags}
                    onChange={(e) => handleOnChangeTag(e)}
                />
            </fieldset>
            <div className="flex justify-center items-center">
                <button
                    className="flex pointer items-center justify-center mt-4 mx-1 py-1 px-10 text-sm font-bold text-center text-fourth-color bg-blue-200 rounded-lg bg-primary-700 hover:bg-blue-300 hover:text-white sm:w-auto"
                    id="createProductButton"
                    onClick={handleOnClickCreateBlog}
                >
                    Tạo
                </button>
            </div>
        </div>
    );
}
