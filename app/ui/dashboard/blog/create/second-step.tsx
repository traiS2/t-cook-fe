"use client";
import { useCreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";
import { useState } from "react";
import { Plus, Dash } from "react-bootstrap-icons";
import { Image as ImageIcon } from "react-bootstrap-icons";
import Image from "next/image";

interface Recipe {
  name: string;
  detailsRecipe: string[];
  image?: string;
}

interface Image {
  id: number;
  image: any;
}

export default function SecondStep() {
  const { blog, setBlog } = useCreateBlogContext();

  const recipes: Recipe[] = [
    {
      name: "",
      detailsRecipe: [""],
    },
  ];

  const [recipe, setRecipes] = useState<Recipe[]>(recipes);

  const handleClickAddRecipe = (recipePostion: number) => {
    const newRecipes = [...blog.recipes];
    newRecipes.splice(recipePostion + 1, 0, {
      id: recipePostion + 1,
      name: "",
      detailsRecipe: [""],
      url: "",
      image: "",
    });
    setBlog({ ...blog, recipes: newRecipes });
  };

  const handleClickMunisRecipe = (recipePostion: number) => {
    if (blog.recipes.length === 1) return;
    const userChoice = confirm("Bạn có chắc muốn xoá không?");
    if (!userChoice) return;
    const newRecipes = [...blog.recipes];
    newRecipes.splice(recipePostion, 1);
    setBlog({ ...blog, recipes: newRecipes });
  };

  const handleClickAddDetailsRecipe = (
    recipePostion: number,
    detailsRecipePotion: number
  ) => {
    const newRecipes = [...blog.recipes];
    newRecipes[recipePostion].detailsRecipe.splice(
      detailsRecipePotion + 1,
      0,
      ""
    );
    setBlog({ ...blog, recipe: newRecipes });
  };

  const handleClickMunisDetailsRecipe = (
    recipePostion: number,
    detailsRecipePotion: number
  ) => {
    if (recipe[recipePostion].detailsRecipe.length === 1) return;
    const userChoice = confirm("Bạn có chắc muốn xoá không?");
    if (!userChoice) return;
    const newRecipes = [...recipe];
    newRecipes[recipePostion].detailsRecipe.splice(detailsRecipePotion, 1);
    setRecipes(newRecipes);
  };

  const handleOnChangeNameRecipe = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newNameRecipe = blog.recipes;
    newNameRecipe[index].name = e.target.value;
    setBlog({ ...blog, recipes: newNameRecipe });
  };

  const handleOnChangeDetailsRecipe = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    indexNameRecipe: number,
    indexDetailsRecipe: number
  ) => {
    const newDetailsRecipe = [...blog.recipes];
    newDetailsRecipe[indexNameRecipe].detailsRecipe[indexDetailsRecipe] =
      e.target.value;
    setBlog({ ...blog, recipes: newDetailsRecipe });
  };

  const handleOnChangeImageRecipe = (e: any, index: number) => {
    console.log(e);
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const newRicepe = blog.recipes;
    newRicepe[index].image = url;
    setBlog({ ...blog, recipes: newRicepe });
  };

  return (
    <div className="flex flex-col w-full h-auto">
      <div className="flex w-ful flex-col h-auto">
        {blog.recipes?.map((recipe: any, indexR: number) => (
          <div
            className=" relative  w-full  border border-spacing-2 border-second-color rounded-md my-1 p-1"
            key={indexR}
          >
            <div className="flex w-full" key={indexR}>
              <p>{indexR + 1}. </p>
              <input
                type="text"
                placeholder="Tên bước"
                value={recipe.name}
                className="ml-2 outline-none pl-2 rounded-md "
                onChange={(e) => handleOnChangeNameRecipe(e, indexR)}
              />
            </div>
            <div className="mt-1">
              {recipe.detailsRecipe?.map(
                (detailRecipe: string, indexD: number) => (
                  <div className="flex relative mt-2" key={indexD}>
                    <textarea
                      placeholder="Chi tiết"
                      minLength={0}
                      className="w-full  h-auto outline-none pl-2 rounded-md "
                      contentEditable={true}
                      value={detailRecipe}
                      onChange={(e) =>
                        handleOnChangeDetailsRecipe(e, indexR, indexD)
                      }
                    />
                    <div className="flex  absolute right-0 top-[-5px] gap-2 flex-row items-center justify-between ml-0.5">
                      <button
                        className="h-auto too"
                        onClick={() =>
                          handleClickMunisDetailsRecipe(indexR, indexD)
                        }
                      >
                        <Dash className="h-3 w-3  bg-red-500 rounded-full" />
                      </button>
                      <button className="h-auto">
                        <Plus
                          className="h-3 w-3 bg-blue-500 rounded-full"
                          onClick={() =>
                            handleClickAddDetailsRecipe(indexR, indexD)
                          }
                        />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex w-full mt-1.5 mb-0.5 items-center space-x-4">
              <div className="shrink-0 ">
                {blog.recipes[indexR].image === "" ? (
                  <ImageIcon
                    className="h-5 w-10 object-contain rounded-sm"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image
                    id="preview_img"
                    className="h-10 3 w-16 object-contain rounded-sm"
                    src={blog.recipes[indexR].image}
                    alt="Current profile photo"
                    width={50}
                    height={50}
                  />
                )}
              </div>
              <label className="block">
                <input
                  type="file"
                  onChange={(e) => handleOnChangeImageRecipe(e, indexR)}
                  className="block w-full text-sm file:font-medium file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm  file:bg-white file:text-fourth-color hover:file:bg-blue-200 "
                />
              </label>
            </div>
            <div className="absolute gap-2 right-0 top-[-6px] flex flex-row items-center justify-between ml-0.5">
              <button className="h-auto too" onClick={() => {}}>
                <ImageIcon
                  className="h-3 w-3 bg-white rounded-full"
                  width={50}
                  height={50}
                />
              </button>
              <button
                className="h-auto"
                onClick={() => handleClickMunisRecipe(indexR)}
              >
                <Dash className="h-3 w-3 bg-red-500 rounded-full" />
              </button>
              <button
                className="h-auto"
                onClick={() => handleClickAddRecipe(indexR)}
              >
                <Plus className="h-3 w-3 bg-blue-500 rounded-full" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
