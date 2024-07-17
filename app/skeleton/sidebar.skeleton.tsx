export default function SidebarSkeleton() {
    const blogSidebar = Array.from({ length: 3 }, (_, i) => i + 1);
    return (
        <div className="animate-pulse flex z-0 sticky top-6 bottom-4 flex-col justify-center items-center py-10">
            <h2 className="flex w-full h-auto items-center justify-center pt-4 text-xl font-semibold uppercase text-fifth-color ">
                Món ăn nổi bật
            </h2>
            <div className="w-full flex flex-col justify-center items-center gap-6 pt-4">
                {blogSidebar.map((blog) => (
                    <div key={blog} className="px-6">
                        <article className="flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-lg shadow-gray-300 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl dark:shadow-black">
                            <div className="flex items-center justify-center w-full h-52 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                <svg
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col p-2">
                                <h3 className="text-base font-semibold uppercase text-fifth-color">
                                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%] mt-2 mb-1"></div>
                                </h3>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}
