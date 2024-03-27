"use client";
import { useState } from "react";
import { LeverOfDiffcult, CookingTime, Ingredient } from "@/app/ui";
import { useCreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";
import { Dash, Plus } from "react-bootstrap-icons";
import cryptoRandomString from "crypto-random-string";

import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from "firebase/storage";
import { storage } from "@/app/config/firebase-config";
import Image from "next/image";

export default function FirstStep() {
  const { blog, setBlog } = useCreateBlogContext();
  const [image, setImage] = useState<File | null>(null);
  const storageRef = ref(
    storage,
    "images/" + cryptoRandomString({ length: 12 })
  );

  const handleClickedLevelOfDifficult = (id: number) => {
    const newLeverOfDifficult = id;
    setBlog({ ...blog, levelOfDifficulty: newLeverOfDifficult });
  };

  const handleChangeImage = (e: any) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    console.log(image);
    if (!image) return;
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot: UploadTaskSnapshot) => {
        console.log(snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setBlog({ ...blog, image: downloadURL });
        });
      }
    );
  };

  const handleClickedHour = (type: string, hour: number) => {
    if (hour === 0 && type === "-") return;
    if (type === "+") {
      setBlog({ ...blog, cookingTime: blog.cookingTime + 60 });
    } else if (type === "-") {
      setBlog({ ...blog, cookingTime: blog.cookingTime - 60 });
    }
  };

  const handleClickedMinute = (type: string, minute: number) => {
    switch (type) {
      case "+":
        if (blog.cookingTime + 5 > 60) return;
        setBlog({ ...blog, cookingTime: blog.cookingTime + 5 });
        break;
      case "+ +":
        setBlog({ ...blog, cookingTime: blog.cookingTime + 15 });
        break;
      case "-":
        if (blog.cookingTime - 5 < 0) return;
        setBlog({ ...blog, cookingTime: blog.cookingTime - 5 });
        break;
      case "- -":
        if (blog.cookingTime - 15 < 0) return;
        setBlog({ ...blog, cookingTime: blog.cookingTime - 15 });
        break;
      default:
        break;
    }
  };
  const handleClickedAddIngredient = (newIngredient: string) => {
    const newIngredients = [...blog.ingredients];
    newIngredients.push(newIngredient);
    setBlog({ ...blog, ingredients: newIngredients });
  };
  const handleOnClickDeleteIngredient = (index: number) => {
    const userChoice = confirm("Bạn có chắc muốn xoá không?");
    if (!userChoice) return;
    const newIngredients = [...blog.ingredients];
    newIngredients.splice(index, 1);
    setBlog({ ...blog, ingredients: newIngredients });
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, title: e.target.value });
  };

  const handleClickAddIntroduction = (index: number) => {
    const newIntroduction = [...blog.introduction];
    newIntroduction.splice(index + 1, 0, "");
    setBlog({ ...blog, introduction: newIntroduction });
  };

  const handleChangeIntroduction = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newIntroduction = [...blog.introduction];
    newIntroduction[index] = e.target.value;
    setBlog({ ...blog, introduction: newIntroduction });
  };

  const handleClickMunisIntroduction = (index: number) => {
    if (blog.introduction.length === 1) return;
    const userChoice = confirm("Bạn có chắc muốn xoá không?");
    if (!userChoice) return;
    const newIntroduction = [...blog.introduction];
    newIntroduction.splice(index, 1);
    setBlog({ ...blog, introduction: newIntroduction });
  };

  const handleOnChangeServingSize = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newServingSize = e.target.value;
    setBlog({ ...blog, servingSize: newServingSize });
  };

  return (
    <div className="w-full flex flex-col gap-4 h-auto">
      <div>
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full text-fourth-color h-full bg-transparent !bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-1 border-t-transparent focus:border-t-transparent text-base px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-second-color"
            placeholder=" "
            onChange={(e) => handleOnChangeTitle(e)}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-medium  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-1 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-1 after:border-r peer-focus:after:border-r-1 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-second-color after:border-blue-gray-200 peer-focus:after:!border-second-color">
            Tên
          </label>
        </div>
      </div>
      <div className="flex w-full items-center space-x-4">
        <div className="shrink-0">
          <Image
            id="preview_img"
            className="h-10 w-16 object-contain rounded-sm"
            src={blog.image}
            alt="Current profile photo"
            width={500}
            height={500}
          />
        </div>
        <label className="block">
          <input
            type="file"
            onChange={(e) => handleChangeImage(e)}
            className="block w-full text-sm file:font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm  file:bg-white file:text-fourth-color hover:file:bg-blue-200 "
          />
        </label>
        <button
          onClick={handleUploadImage}
          className="flex items-center justify-center h-4 p-4 font-medium text-white bg-second-color rounded-md"
        >
          Tải lên
        </button>
      </div>
      <div>
        <div className="relative w-full  ">
          {blog.introduction.map((paragraph: string, index: number) => (
            <div className="flex relative mt-2" key={index}>
              <textarea
                placeholder="Giới thiệu"
                minLength={0}
                className="w-full  h-auto outline-none pl-2 rounded-md "
                contentEditable={true}
                value={paragraph}
                onChange={(e) => handleChangeIntroduction(e, index)}
              />
              <div className="flex absolute right-0 top-[-5px] gap-2 flex-row items-center justify-between ml-0.5">
                <button
                  className="h-auto too"
                  onClick={() => handleClickMunisIntroduction(index)}
                >
                  <Dash className="h-3 w-3  bg-red-500 rounded-full" />
                </button>
                <button className="h-auto">
                  <Plus
                    className="h-3 w-3 bg-blue-500 rounded-full"
                    onClick={() => handleClickAddIntroduction(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LeverOfDiffcult
        leverOfDifficult={blog.levelOfDifficulty}
        handleClickedLevelOfDifficult={handleClickedLevelOfDifficult}
      />
      <CookingTime
        time={{
          hour: Math.floor(blog.cookingTime / 60),
          minute: blog.cookingTime % 60,
        }}
        handleClickedHour={handleClickedHour}
        handleClickedMinute={handleClickedMinute}
      />
      <div>
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-transparent !bg-white text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-1 border-t-transparent focus:border-t-transparent text-base px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-second-color"
            placeholder=" "
            onChange={(e) => handleOnChangeServingSize(e)}
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-medium  !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-1 before:border-l peer-focus:before:border-l-1 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-1 after:border-r peer-focus:after:border-r-1 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-second-color after:border-blue-gray-200 peer-focus:after:!border-second-color">
            Khẩu phần
          </label>
        </div>
      </div>
      <Ingredient
        ingredients={blog.ingredients}
        handleClickAddIngredient={handleClickedAddIngredient}
        handleClickDeleteIngredient={handleOnClickDeleteIngredient}
      />
    </div>
  );
}
