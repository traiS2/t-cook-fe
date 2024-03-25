import { createContext, useContext } from "react";

interface Recipe {
  id: number;
  name: string;
  detailsRecipe: string[];
}

interface CreateBlogContextState {
  blog: {
    id: number;
    link: string;
    title: string;
    category: string;
    image: string;
    introduction: string[];
    levelOfDifficulty: number;
    cookingTime: number;
    servingSize: number;
    ingredients: string[];
    recipes: Recipe[];
    date: string;
    tags: string[];
    user: string;
  };
  setBlog: (blog: any) => void;
}

export const CreateBlogContext = createContext<CreateBlogContextState>({
  blog: {
    id: 0,
    link: "",
    title: "",
    category: "",
    image: "",
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
