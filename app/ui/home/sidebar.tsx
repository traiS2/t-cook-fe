import { outstandingDish } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex sticky top-6 bottom-4 flex-col justify-center items-center py-10">
      <h2 className="flex w-full h-auto items-center justify-center pt-4 text-xl font-semibold uppercase text-fifth-color ">
        Món ăn nổi bật
      </h2>
      <div className="w-full flex flex-col justify-center items-center gap-10 pt-4">
        {outstandingDish.map((dish, index) => (
          <div key={index} className="px-6">
            <Link href={`/blog/${dish.link}`}>
              <article className="flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-lg shadow-gray-300 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl dark:shadow-black">
                <div className="">
                  <Image
                    className="w-[100%] h-[100%] "
                    objectFit="cover"
                    src={dish.image}
                    alt={dish.link}
                    width={350}
                    height={200}
                  />
                </div>
                <div className="flex flex-col p-2">
                  <h3 className="text-base font-semibold uppercase text-fifth-color">
                    {dish.title}
                  </h3>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
