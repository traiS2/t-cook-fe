"use client";
import Image from "next/image";
import {
  Alarm,
  Dash,
  Pencil,
  Person,
  Plus,
  StarFill,
} from "react-bootstrap-icons";
import { useParams } from "next/navigation";
import { useState } from "react";
export default function BlogCustom({ blog }: any) {
  const params = useParams<{ content: string }>();

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

  return (
    <div className="min-h-[100vh] px-2">
      <div className="flex flex-col w-full h-auto items-center justify-start border-b border-second-color pb-4    ">
        <Image
          src={blog?.image?.url === "" ? blog?.image.image : blog.image?.url}
          className="w-full pt-8"
          alt={blog.title}
          width={610}
          height={300}
        />
        <h1 className="flex w-full h-auto items-center justify-start pt-4 text-2xl font-semibold uppercase text-fifth-color ">
          {blog.title}
        </h1>
        <p className="w-full h-auto items-center justify-start text-xs font-bold pt-1 text-second-color">
          Đăng vào{" "}
          <span className="font-medium text-fifth-color">{blog.date}</span> |
          trong{" "}
          <span className="font-medium text-fifth-color">{blog.category}</span>{" "}
          bởi <span className="font-medium text-fifth-color">{blog.user}</span>
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
              {blog.cookingTime} phút
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
              {blog.servingSize}
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
                    i <= blog.levelOfDifficulty
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
        {blog?.introduction?.map((paragraph: any, index: any) => (
          <p
            key={index}
            className={`w-full h-auto text-fourth-color text-justify py-2 indent-8  ${textSize[textSizeIndex]}`}
          >
            {paragraph}
          </p>
        ))}
        <h1
          className={`flex w-full h-auto items-center justify-start pt-4 ${
            textSize[textSizeIndex + 2 > 5 ? 5 : textSizeIndex + 2]
          } font-normal uppercase text-fifth-color`}
        >
          {blog.title}
        </h1>
        <h3
          className={`font-semibold text-fourth-color pt-2 ${textSize[textSizeIndex]}`}
        >
          Nguyên liệu
        </h3>
        <ul className="list-disc list-inside pt-2">
          {blog.ingredients?.map((ingredient: any) => (
            <li
              key={ingredient.id}
              className={`text-fourth-color pt-1 italic indent-8 ${textSize[textSizeIndex]}`}
            >
              {ingredient}
            </li>
          ))}
        </ul>
        {blog.note?.map((note: any) => (
          <p
            key={note.id}
            className={`text-fourth-color pt-4 italic ${textSize[textSizeIndex]}`}
          >
            <span>**</span> {note.content}
          </p>
        ))}
        <h3
          className={`font-semibold text-fourth-color pt-2 ${textSize[textSizeIndex]}`}
        >
          Cách làm
        </h3>
        {blog.recipes?.map((recipe: any, index: number) => (
          <div className="py-1" key={index}>
            <p
              className={`w-full font-medium h-auto text-fourth-color text-justify py-2 ${textSize[textSizeIndex]}`}
            >
              <span className="mr-2">{index + 1}.</span>
              {recipe.name}
            </p>
            {recipe.detailsRecipe &&
              recipe.detailsRecipe?.map((details: any, index: number) => (
                <p
                  key={index}
                  className={`text-fourth-color text-justify py-0.5 indent-4 font-normal ${textSize[textSizeIndex]}`}
                >
                  <span className="mr-2">-</span>
                  {details}
                </p>
              ))}
            {recipe.image && (
              <Image
                src={recipe.image.image}
                className="w-full pt-1 pb-2"
                alt={blog.title}
                width={600}
                height={300}
                objectFit="cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
