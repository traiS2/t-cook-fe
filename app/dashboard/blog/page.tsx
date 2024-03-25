import { BreadcrumbNavigation, IconButtonCustom } from "@/app/components";
import { Plus } from "react-bootstrap-icons";
export default function Page() {
    const navigations = [
        {
            name: "Dashboard",
            href: "/dashboard",
            current: false,
        },
        {
            name: "Blog",
            href: "/dashboard/blog",
            current: true,
        },
    ];

    const icon = () => {
        return <Plus size={20} className="h-auto" />;
    };


    return (
        <div className="w-full h-[100vh] p-2 bg-sixth-color rounded-md  ">
            <div className="flex items-center justify-between">
                <div>
                    <BreadcrumbNavigation navigations={navigations} />
                </div>
                <div>
                    <IconButtonCustom
                        title="Add blog"
                        icon={icon}
                        style="bg-blue-200 text-second-color"
                    />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
