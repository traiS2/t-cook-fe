import { createContext, useContext } from "react";

interface Recipe {
  id: number;
  name: string;
  detailsRecipe: string[];
  url: string;
  image: any;
}

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
  isNew?: boolean;
}

interface Image {
  image: any;
  url: string;
}

interface CreateBlogContextState {
  blog: {
    id: number;
    link: string;
    title: string;
    categories: Category[];
    image: Image;
    introduction: string[];
    levelOfDifficulty: number;
    cookingTime: number;
    servingSize: number;
    ingredients: string[];
    recipes: Recipe[];
    date: string;
    tags: Tag[];
    user: string;
  };
  setBlog: (blog: any) => void;
}

export const CreateBlogContext = createContext<CreateBlogContextState>({
  blog: {
    id: 0,
    link: "",
    title: "",
    categories: [],
    image: {
      image: "",
      url: "",
    },
    introduction: [],
    levelOfDifficulty: 0,
    cookingTime: 0,
    servingSize: 0,
    ingredients: [""],
    recipes: [],
    date: "",
    tags: [],
    user: "",
  },
  setBlog: () => {},
});

export function useCreateBlogContext() {
  return useContext(CreateBlogContext);
}
