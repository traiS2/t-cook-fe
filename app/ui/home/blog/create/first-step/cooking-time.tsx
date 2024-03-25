export default function CookingTime({
    time,
    handleClickedHour,
    handleClickedMinute,
}: {
    time: { hour: number; minute: number };
    handleClickedHour: (type: string, hour: number) => void;
    handleClickedMinute: (type: string, minute: number) => void;
}) {
    return (
        <div className="flex items-center justify-start w-auto h-auto gap-2">
            <p className="flex items-center justify-center text-sm text-center font-medium">
                Thời gian:{" "}
            </p>
            <div className="flex gap-2 mx-8">
                <button
                    className="w-auto h-auto flex items-center justify-center px-2 text-sm text-center bg-sixth-color rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                    onClick={() => handleClickedHour("+", time.hour)}
                >
                    +
                </button>
                <input
                    type="number"
                    min={0}
                    className="w-7 text-center text-fourth-color rounded-full bg-white"
                    value={time.hour}
                    disabled
                />
                <button
                    className="w-auto h-auto flex items-center justify-center px-2 text-sm bg-sixth-color text-center rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                    onClick={() => handleClickedHour("-", time.hour)}
                >
                    -
                </button>
                <p className="text-fourth-color">giờ</p>
            </div>
            <div className="flex mx-4 gap-2">
                <button
                    onClick={() => handleClickedMinute("+ +", time.minute)}
                    className="w-auto h-auto flex items-center justify-center px-2 text-sm bg-sixth-color text-center rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                >
                    + +
                </button>
                <button
                    className="w-aut h-auto flex items-center justify-center px-2 text-sm bg-sixth-color text-center rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                    onClick={() => handleClickedMinute("+", time.minute)}
                >
                    +
                </button>
                <input
                    type="number"
                    min={0}
                    max={60}
                    step={15}
                    className="w-8 flex text-center text-fourth-color rounded-full bg-white"
                    value={time.minute}
                    disabled
                />
                <button
                    onClick={() => handleClickedMinute("-", time.minute)}
                    className="w-auto h-auto flex items-center justify-center px-2 text-sm bg-sixth-color text-center rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                >
                    -
                </button>
                <button
                    onClick={() => handleClickedMinute("- -", time.minute)}
                    className="w-auto h-auto flex items-center justify-center px-2 text-sm bg-sixth-color text-center rounded-full border border-second-color active:bg-second-color active:text-sixth-color"
                >
                    - -
                </button>
                <p className="text-fourth-color">phút</p>
            </div>
        </div>
    );
}
