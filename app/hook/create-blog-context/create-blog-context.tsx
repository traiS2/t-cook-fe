import { createContext, useContext } from "react";

interface Recipe {
  id: number;
  name: string;
  detailsRecipe: string[];
  url: string;
  image: any;
  file: any;
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
  file: any;
}

interface CreateBlogContextState {
  blog: BlogCreationState;
  setBlog: (blog: any) => void;
}

export const CreateBlogContext = createContext<CreateBlogContextState>({
  blog: {
    title: "",
    categories: [],
    image: {
      image: "",
      url: "",
      file: "",
    },
    introduction: [],
    levelOfDifficulty: 0,
    cookingTime: 0,
    servingSize: 0,
    ingredients: [""],
    recipes: [],
    tags: [],
  },
  setBlog: () => {},
});

export function useCreateBlogContext() {
  return useContext(CreateBlogContext);
}
