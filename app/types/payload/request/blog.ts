interface BlogCreationRequest {
    title: string;
    category: number[];
    image: string;
    introduction: IntroductionBlogCreationRequest[];
    levelOfDifficulty: number;
    cookingTime: number;
    servingSize: number;
    ingredient: IngredientBlogCreationRequest[];
    recipe: RecipeBlogCreationRequest[];
    tag: TagBlogCreationRequest[];
    userId: number;
}
