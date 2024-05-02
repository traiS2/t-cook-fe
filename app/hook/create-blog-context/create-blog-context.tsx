import { createContext, useContext } from "react";

interface CreateBlogContextState {
    blog: BlogCreationState;
    setBlog: (blog: any) => void;
}

export const CreateBlogContext = createContext<CreateBlogContextState>({
    blog: {
        title: "",
        category: [],
        image: {
            image: "",
            url: "",
            file: "",
        },
        introduction: [],
        levelOfDifficulty: 0,
        cookingTime: 0,
        servingSize: 0,
        ingredient: [],
        recipe: [],
        tag: [],
    },
    setBlog: () => {},
});

export function useCreateBlogContext() {
    return useContext(CreateBlogContext);
}
