interface BlogPost {}

interface BlogCreationState {
  title: string;
  categories: CategoryCreationState[];
  image: ImageCreationState;
  introduction: string[];
  levelOfDifficulty: number;
  cookingTime: number;
  servingSize: number;
  ingredients: string[];
  recipes: RecipeCreationState[];
  tags: TagCreationState[];
}
