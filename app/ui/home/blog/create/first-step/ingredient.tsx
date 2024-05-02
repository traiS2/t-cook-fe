"use client";
import { useState } from "react";
import { ArrowLeft, Dash } from "react-bootstrap-icons";

export default function Ingredient({
    ingredients,
    handleClickAddIngredient,
    handleClickDeleteIngredient,
}: {
    ingredients: string[];
    handleClickAddIngredient: (newIngredient: string) => void;
    handleClickDeleteIngredient: (index: number) => void;
}) {
    const [ingredientNew, setIngredientNew] = useState("");

    const handleClickAddIngredientNew = (newIngredient: string) => {
        if (newIngredient.trim() === "") return;
        handleClickAddIngredient(newIngredient);
        setIngredientNew("");
    };

    const handleKeyEnter = (e: any) => {
        if (e.key === "Enter") {
            handleClickAddIngredientNew(ingredientNew);
        }
    };

    return (
        <div className="w-full h-auto ">
            <p className="mr-4 text-sm font-medium">Nguyên liệu: </p>
            <div className="flex flex-col gap-2 my-1 rounded-md px-4 py-2">
                {ingredients.map((ingredient: string, index: number) => (
                    <p
                        key={index}
                        className="relative text-fourth-color bg-sixth-color w-max px-2 rounded-lg"
                    >
                        {ingredient}
                        <button
                            className="absolute right-[-4px] top-[-4px]"
                            onClick={() => handleClickDeleteIngredient(index)}
                        >
                            <Dash className="h-2.5 w-2.5 bg-red-500 rounded-full" />
                        </button>
                    </p>
                ))}
            </div>
            <div className="flex bg-white rounded-lg">
                <input
                    type="text"
                    className="flex text-fourth-color px-2 rounded-lg w-full h-auto outline-none"
                    onChange={(e) => setIngredientNew(e.target.value)}
                    value={ingredientNew}
                    onKeyDown={(e) => handleKeyEnter(e)}
                />
                <button
                    onClick={() => handleClickAddIngredientNew(ingredientNew)}
                >
                    <ArrowLeft
                        size={24}
                        className="text-second-color mx-1 hover:rounded-xl hover:bg-second-color hover:text-white"
                    />
                </button>
            </div>
        </div>
    );
}
