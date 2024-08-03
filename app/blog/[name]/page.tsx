"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Alarm,
    Person,
    Pencil,
    Plus,
    Dash,
    StarFill,
} from "react-bootstrap-icons";
import { format, parseISO } from "date-fns";
import { vi } from "date-fns/locale";
import Loading from "./loading";

export default function Page({ params }: { params: { name: string } }) {
    // const params = useParams<{ content: string }>();

    const [detailBlog, setDetailBlog] = useState<DetailBlog>({} as DetailBlog);
    const [isLoading, setIsLoading] = useState(true);

    const getDetailBlog = async () => {
        try {
            const response = await fetch(
                `${process.env.DATA_API_KEY_FE}/api/blog/detail/${params.name}`,
                {
                    cache: "force-cache",
                    next: {
                        revalidate: 8640,
                    },
                }
            );
            if (response.ok) {
                const blog = await response.json();
                const formattedDate = format(parseISO(blog.createAt), "PP", {
                    locale: vi,
                });
                blog.createAt = formattedDate;
                setDetailBlog(blog);
            }
        } catch (error: any) {
            alert(
                "Failed to error fetch data at blog detail: " + error.message
            );
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getDetailBlog();
    }, [params.name]);

    type TextSizeType = {
        [key: number]: string;
    };

    const textSize: TextSizeType = {
        0: "text-xs",
        1: "text-sm",
        2: "text-base",
        3: "text-lg",
        4: "text-xl",
        5: "text-2xl",
    };

    const [textSizeIndex, setTextSizeIndex] = useState<number>(2);

    const handleAddTextSize = () => {
        const newTextPosition = textSizeIndex + 1;
        if (newTextPosition <= 5) {
            setTextSizeIndex(newTextPosition);
        }
    };

    const handleMinusTextSize = () => {
        const newTextPosition = textSizeIndex - 1;
        if (newTextPosition >= 0) {
            setTextSizeIndex(newTextPosition);
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="marker:min-h-[100vh]">
            <div className="hidden w-full py-4 border-b border-second-color sm:flex">
                <h1 className="w-full flex gap-2 italic text-base text-fifth-color font-normal">
                    Trang chủ <span className="text-sm">{` >> `}</span> Blog{" "}
                    <span className="text-sm">{` >> `}</span> {detailBlog.title}
                </h1>
            </div>
            <div className="flex flex-col w-full h-auto items-center justify-start border-b border-second-color pb-4    ">
                <Image
                    src={detailBlog.image}
                    className="w-full pt-4"
                    alt={detailBlog.title}
                    width={610}
                    height={300}
                />
                <h1 className="flex w-full h-auto items-center justify-start pt-4 text-2xl font-semibold uppercase text-fifth-color ">
                    {detailBlog.title}
                </h1>
                <p className="w-full h-auto items-center justify-start text-xs font-bold pt-1 text-second-color">
                    Đăng vào{" "}
                    <span className="font-medium text-fifth-color">
                        {detailBlog.createAt}
                    </span>{" "}
                    | trong{" "}
                    <span className="font-medium text-fifth-color">
                        <span>
                            {detailBlog?.category
                                .map((cat) => cat.name)
                                .join(", ")}
                        </span>
                    </span>{" "}
                    bởi{" "}
                    <span className="font-medium text-fifth-color">
                        {detailBlog?.user?.name}
                    </span>
                </p>
            </div>
            <div className="flex w-full items-center justify-between py-4 border-b border-second-color">
                <div className="flex w-full items-center justify-center gap-1">
                    <Alarm className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Thời gian nấu
                        </p>
                        <p className="text-sm font-semibold text-second-color">
                            {detailBlog.cookingTime} phút
                        </p>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center gap-1">
                    <Person className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Khẩu phần ăn
                        </p>
                        <p className="text-sm font-semibold text-second-color">
                            {detailBlog.servingSize}
                        </p>
                    </div>
                </div>
                <div className="flex h-auto w-full items-center justify-center gap-1">
                    <Pencil className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Độ khó
                        </p>
                        <div className="flex flex-wrap gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <StarFill
                                    key={i}
                                    className={`w-4 h-4 ${
                                        i <= detailBlog.levelOfDifficult
                                            ? "text-yellow-500"
                                            : "text-second-color"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-b  border-second-color w-full h-auto pt-4">
                <div className="w-full">
                    <h3 className="inline-block w-auto text-base font-medium text-fifth-color h-auto px-2 py-2 border-x border-t border-second-color">
                        CÔNG THỨC
                    </h3>
                </div>
                <div className="w-full h-10 gap-1 flex items-end justify-end">
                    <div className="flex w-full h-auto justify-end items-center gap-2">
                        <p className="text-sm">Cỡ chữ</p>
                        <div className="flex items-center justify-center gap-1">
                            <button onClick={handleAddTextSize}>
                                <Plus className="w-4 h-4 text-white bg-fifth-color rounded-full" />
                            </button>
                            <button onClick={handleMinusTextSize}>
                                <Dash className="w-4 h-4 text-white bg-fifth-color rounded-full" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-auto pt-2">
                {detailBlog.introduction
                    ?.sort((a, b) => a.id - b.id)
                    .map((introduction) => (
                        <p
                            key={introduction.id}
                            className={`w-full h-auto text-fourth-color text-justify py-2 indent-8  ${textSize[textSizeIndex]}`}
                        >
                            {introduction.content}
                        </p>
                    ))}
                <h1
                    className={`flex w-full h-auto items-center justify-start pt-4 ${
                        textSize[textSizeIndex + 2 > 5 ? 5 : textSizeIndex + 2]
                    } font-normal uppercase text-fifth-color`}
                >
                    {detailBlog.title}
                </h1>
                <h3
                    className={`font-semibold text-fourth-color pt-2 ${textSize[textSizeIndex]}`}
                >
                    Nguyên liệu
                </h3>
                <ul className="list-disc list-inside pt-2">
                    {detailBlog.ingredient
                        ?.sort((a, b) => a.id - b.id)
                        .map((ingredient) => (
                            <li
                                key={ingredient.id}
                                className={`text-fourth-color pt-1 italic indent-8 ${textSize[textSizeIndex]}`}
                            >
                                {ingredient.name}
                            </li>
                        ))}
                </ul>
                {/* {blog.note.map((note) => (
                    <p
                        key={note.id}
                        className={`text-fourth-color pt-4 italic ${textSize[textSizeIndex]}`}
                    >
                        <span>**</span> {note.content}
                    </p>
                ))} */}
                <h3
                    className={`font-semibold text-fourth-color pt-2 ${textSize[textSizeIndex]}`}
                >
                    Cách làm
                </h3>
                {detailBlog.recipe
                    ?.sort((a, b) => a.id - b.id)
                    .map((recipe) => (
                        <div className="py-1" key={recipe.id}>
                            <p
                                className={`w-full font-medium h-auto text-fourth-color text-justify py-2 ${textSize[textSizeIndex]}`}
                            >
                                <span className="mr-2">{recipe.id + 1}.</span>
                                {recipe.title}
                            </p>
                            {recipe.detailRecipe &&
                                recipe.detailRecipe
                                    ?.sort((a, b) => a.id - b.id)
                                    .map((detail) => (
                                        <p
                                            key={detail.id}
                                            className={`text-fourth-color text-justify py-0.5 indent-4 font-normal ${textSize[textSizeIndex]}`}
                                        >
                                            <span className="mr-2">-</span>
                                            {detail.content}
                                        </p>
                                    ))}
                            {recipe.imageRecipe && (
                                <Image
                                    src={recipe.imageRecipe.url}
                                    className="w-full pt-1 pb-2"
                                    alt={detailBlog.title + recipe}
                                    width={600}
                                    height={300}
                                />
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}

interface DetailBlog {
    id: number;
    title: string;
    link: string;
    image: string;
    createAt: any;
    category: Category[];
    introduction: Introduction[];
    levelOfDifficult: number;
    cookingTime: number;
    servingSize: number;
    ingredient: Ingredient[];
    recipe: Recipe[];
    // tag: Tag[];
    user: User;
}

interface Category {
    id: number;
    name: string;
}
