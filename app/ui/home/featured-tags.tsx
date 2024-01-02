"use client";
export default function FeaturedTags() {
    const tags = [
        "làm bánh",
        "món ăn Việt",
        "đơn giản",
        "món ăn",
        "món chay",
        "rau",
        "thịt",
        "cá",
        "trái cây",
        "bánh",
    ];
    return (
        <div className="h-auto w-full">
            <h1 className="flex text-second-color text-3xl items-center justify-center font-allura">
                Tag
            </h1>
            <div className="flex flex-wrap mt-4">
                {tags.map((tag) => (
                    <p key={tag} className="text-sm text-second-color bg-white rounded-md px-1 m-1">
                        {tag}
                    </p>
                ))}
            </div>
        </div>
    );
}
