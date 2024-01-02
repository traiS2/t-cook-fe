export default function FeaturedBlogs() {
    const blogs = [
        "Cách làm sữa chua tại nhà",
        "Cách làm bánh mì",
        "Cách làm bánh bông lan",
        "Cách làm bánh bao",
        "Cách làm bánh kem",
        "Cách làm bánh flan",
        "Cách làm bánh mousse",
        "Cách làm bánh su kem",
        "Cách làm bánh tart",
        "Cách làm bánh trung thu",
    ];
    return (
        <div className="h-auto w-full">
            <h1 className="flex text-second-color text-3xl items-center justify-center  font-allura">
                Món ăn nổi bật
            </h1>
            <div className="grid grid-cols-2 mt-4">
                {blogs.map((blog) => (
                    <p key={blog} className=" text-sm text-second-color underline  underline-offset-2 rounded-md px-1 m-1">
                        {blog}
                    </p>
                ))}
            </div>
        </div>
    );
}
