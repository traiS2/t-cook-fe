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
    title: string;
    image: string;
}

interface DetailBlog {
    id: number;
    title: string;
    link: string;
    image: string;
    createAt: any;
    category: Category[];
    introduction: Introduction[];
    levelOfDifficult: number;
    cookingTime: number;
    servingSize: number;
    ingredient: Ingredient[];
    recipe: Recipe[];
    // tag: Tag[];
    user: User;
}


interface Category {
    id: number;
    name: string;
}


interface BlogSummary {
    id: number;
    title: string;
    link: string;
    image: string;
    createAt: Date;
    introduction: Introduction[];
    tag: Tag[];
    user: User;
}

interface User {
    name: string;
}
