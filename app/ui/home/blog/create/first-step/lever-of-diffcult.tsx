import clsx from "clsx";
import { MouseEventHandler } from "react";

export default function LeverOfDiffcult({
    leverOfDifficult,
    handleClickedLevelOfDifficult,
}: {
    leverOfDifficult: number;
    handleClickedLevelOfDifficult: (id: number) => void;
}) {
    const levelOfDifficult = [
        {
            id: 1,
            name: "Dễ",
        },
        {
            id: 2,
            name: "Trung bình",
        },
        {
            id: 3,
            name: "Khó",
        },
        {
            id: 4,
            name: "Rất khó",
        },
        {
            id: 5,
            name: "Siêu khó",
        },
    ];

    return (
        <div className="flex w-full h-auto">
            <p className="mr-4 text-sm font-medium">Độ khó: </p>
            <div className="flex flex-wrap gap-4">
                {levelOfDifficult.map((item) => (
                    <button
                        key={item.id}
                        className={clsx(
                            " flex text-sm text-fourth-color items-center justify-center w-auto h-auto px-2 rounded-md border border-second-color hover:bg-second-color hover:text-sixth-color",
                            {
                                "!bg-second-color !text-sixth-color":
                                    item.id === leverOfDifficult,
                            }
                        )}
                        onClick={() => handleClickedLevelOfDifficult(item.id)}
                    >
                        <p >{item.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
