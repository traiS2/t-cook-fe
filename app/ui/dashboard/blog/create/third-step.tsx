import Select from "react-select";
import { useEffect, useState } from "react";
import { NextResponse } from "next/server";
import ReactSelectCreatable from "react-select/creatable";
import { useCreateBlogContext } from "@/app/hook/create-blog-context/create-blog-context";

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
    const newCategory: Category[] = e.map((value: any) => {
      return {
        id: value.value,
        name: value.label,
      };
    });
    const newBlog = { ...blog, categories: newCategory };
    setBlog(newBlog);
  };

  const handleOnChangeTag = (e: any) => {
    console.log(e);

    const newTags: Tag[] = e.map((value: any) => {
      return {
        id: value.value,
        name: value.label,
        isNew: value.__isNew__,
      };
    });
    const newBlog = { ...blog, tags: newTags };
    setBlog(newBlog);
  };

  async function getCategories() {
    try {
      const categoriesJson = await fetch(
        process.env.DATA_API_KEY_FE + "/category"
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
      const tagsJson = await fetch(process.env.DATA_API_KEY_FE + "/tag");
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
  console.log(blog);

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
    </div>
  );
}
