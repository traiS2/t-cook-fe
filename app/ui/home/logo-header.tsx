import Image from "next/image";
import Link from "next/link";
export default function LogoHeader() {
    return (
        <div className="flex items-center justify-center bg-sixth-color">
            <Link href={"/"}>
                <Image
                    src="/t-cook-logo.png"
                    alt="t-cook"
                    width={400}
                    height={133}
                    className="w-max-1/3 h-auto object-contain"
                />
            </Link>
        </div>
    );
}
