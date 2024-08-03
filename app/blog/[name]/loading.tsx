import {
    Alarm,
    Dash,
    Pencil,
    Person,
    Plus,
    StarFill,
} from "react-bootstrap-icons";

export default function Loading() {
    return (
        <div className="min-h-[100vh]">
            <div className="hidden w-full py-4 border-b border-second-color sm:flex">
                <h1 className="w-full flex justify-start items-center gap-2 italic text-base text-fifth-color font-normal">
                    Trang chủ <span className="text-sm">{` >> `}</span> Blog{" "}
                    <span className="text-sm">{` >> `}</span>{" "}
                    <div className="animate-pulse h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[25%]"></div>
                </h1>
            </div>
            <div className="flex items-center justify-center mt-4 w-full h-[442px] object-cover bg-gray-300 rounded  dark:bg-gray-700">
                <svg
                    className="w-20 h-20 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <div className="flex flex-col w-full h-auto items-center justify-start border-b border-second-color pb-4">
                <h1 className="flex w-full h-auto items-center justify-start pt-4 text-2xl font-semibold uppercase text-fifth-color ">
                    <div className="animate-pulse h-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-[50%]"></div>
                </h1>
                <div className="w-full flex gap-1 h-auto items-center justify-start text-xs font-bold pt-1 text-second-color">
                    Đăng vào{" "}
                    <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[10%]"></div>
                    <span className="font-medium text-fifth-color"></span> |
                    trong{" "}
                    <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[10%]"></div>
                    <span className="font-medium text-fifth-color">
                        {/* {blog.category} */}
                    </span>{" "}
                    bởi{" "}
                    <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[10%]"></div>
                </div>
            </div>
            <div className="flex w-full items-center justify-between py-4 border-b border-second-color">
                <div className="flex w-full items-center justify-center gap-1">
                    <Alarm className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Thời gian nấu
                        </p>
                        <div className="flex justify-start items-center text-sm font-semibold text-second-color">
                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%]"></div>{" "}
                            phút
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center gap-1">
                    <Person className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Khẩu phần ăn
                        </p>
                        <div className="text-sm font-semibold text-second-color">
                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[100%]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex h-auto w-full items-center justify-center gap-1">
                    <Pencil className="w-10 h-10 border-2 border-fifth-color p-2 rounded-full text-fifth-color" />
                    <div>
                        <p className="text-sm font-medium italic text-fourth-color">
                            Độ khó
                        </p>
                        <div className="animate-pulse flex flex-wrap gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <StarFill
                                    key={i}
                                    className={`w-4 h-4 ${
                                        i <= 0
                                            ? "text-yellow-500"
                                            : "text-second-color"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-b  border-second-color w-full h-auto pt-4">
                <div className="w-full">
                    <h3 className="inline-block w-auto text-base font-medium text-fifth-color h-auto px-2 py-2 border-x border-t border-second-color">
                        CÔNG THỨC
                    </h3>
                </div>
                <div className="w-full h-10 gap-1 flex items-end justify-end">
                    <div className="flex w-full h-auto justify-end items-center gap-2">
                        <p className="text-sm">Cỡ chữ</p>
                        <div className="flex items-center justify-center gap-1">
                            <button>
                                <Plus className="w-4 h-4 text-white bg-fifth-color rounded-full" />
                            </button>
                            <button>
                                <Dash className="w-4 h-4 text-white bg-fifth-color rounded-full" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-auto py-4">
                <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
                <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
                <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
                <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
                <div
                    className="flex w-full h-auto items-center justify-start pt-4 
                     font-normal uppercase text-fifth-color"
                >
                    <div className="animate-pulse h-7 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-[50%]"></div>
                </div>
                <h3 className={`font-semibold text-fourth-color pt-2 `}>
                    Nguyên liệu
                </h3>
                <div className="list-disc list-inside pt-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((ingredient) => (
                        <div
                            key={ingredient}
                            className="flex items-center justify-start text-fourth-color py-2 pl-8  italic indent-8"
                        >
                            <div className="a items-center w-3 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <div className=" ml-2 animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%]"></div>
                        </div>
                    ))}
                </div>
                {/* {blog.note.map((note) => (
                    <p
                        key={note.id}
                        className={`text-fourth-color pt-4 italic ${textSize[textSizeIndex]}`}
                    >
                        <span>**</span> {note.content}
                    </p>
                ))} */}
                <h3 className={`font-semibold text-fourth-color pt-2 `}>
                    Cách làm
                </h3>
                {[0, 1, 2, 3, 4].map((recipe) => (
                    <div className="py-1" key={recipe}>
                        <div
                            className={`w-full flex items-center justify-start font-medium h-auto text-fourth-color text-justify py-2`}
                        >
                            <span className="mr-2">{recipe + 1}.</span>
                            <div className="animate-pulse h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%]"></div>
                        </div>
                        {true &&
                            [0, 1].map((detail) => (
                                <div
                                    key={detail}
                                    className={`flex items-center justify-start fourth-color text-justify py-0.5 indent-4 font-normal `}
                                >
                                    <span className="mr-2">-</span>
                                    <div className="animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-[80%]"></div>
                                </div>
                            ))}
                        <div className="flex items-center justify-center my-4 w-full h-[442px] object-cover bg-gray-300 rounded  dark:bg-gray-700">
                            <svg
                                className="w-20 h-20 text-gray-200 dark:text-gray-600"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
