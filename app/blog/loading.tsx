export default function Loading() {
    const pageQuantity = Array.from({ length: 3 }, (_, i) => i + 1);
    return pageQuantity.map((page) => (
        <div
            key={page}
            className="w-full h-auto border-b border-second-color my-8 animate-pulse"
        >
            <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-[75%] mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-[50%]"></div>
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
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-1.5 w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 my-5 w-[25%]"></div>
            <div className="h-7 bg-gray-200 rounded-xl dark:bg-gray-700 my-5 w-28"></div>
        </div>
    ));
}
