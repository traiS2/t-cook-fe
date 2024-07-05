interface RecipeBlogCreationState {
    name: string;
    detailRecipe: string[];
    image: ImageBlogCreationState;
}

interface Recipe {
    id: number;
    title: string;
    detailRecipe: DetailRecipe[];
    imageRecipe: ImageRecipe;
}

interface ImageRecipe {
    id: string;
    url: string;
}
