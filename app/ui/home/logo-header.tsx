import Image from "next/image";
export default function LogoHeader() {
    return (
        <div className="flex items-center justify-center bg-second-bg-color">
            <Image
                src="/savoury-food.png"
                alt="t-cook"
                width={400}
                height={133}
                className="w-max-1/3 h-auto object-contain"
            />
        </div>
    );
}
