interface RecipeBlogCreationRequest {
    id: number;
    name: string;
    detailRecipe: DetailRecipeBlogCreationRequest[];
    image: string;
}

interface DetailRecipeBlogCreationRequest {
    id: number;
    content: string;
}
