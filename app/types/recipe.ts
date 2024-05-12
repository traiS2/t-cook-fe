interface RecipeBlogCreationState {
    name: string;
    detailRecipe: string[];
    image: ImageBlogCreationState;
}

interface Recipe {
    id: number;
    name: string;
    detailRecipe: DetailRecipe[];
    image: string;
}
