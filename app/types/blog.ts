interface BlogPost {}

interface BlogCreationState {
    title: string;
    category: number[];
    image: ImageBlogCreationState;
    introduction: string[];
    levelOfDifficulty: number;
    cookingTime: number;
    servingSize: number;
    ingredient: string[];
    recipe: RecipeBlogCreationState[];
    tag: TagBlogCreationState[];
}

interface BlogBrief {
    id: number;
    link: string;
    name: string;
    image: string;
}

interface BlogSummary {
    id: number;
    name: string;
    link: string;
    image: string;
    createAt: Date;
    introduction: string[];
    tags: string[];
    user: string;
}
