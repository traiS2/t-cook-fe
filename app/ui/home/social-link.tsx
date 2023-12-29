import { link } from "fs";
import { Facebook, Youtube, Instagram } from "react-bootstrap-icons";
export default function SocialLink() {
    const links = [
        {
            name: "facebook",
            href: "https://www.facebook.com/",
            icon: Facebook,
            size: 16,
            hover_color: "hover:text-blue-500",
        },
        {
            name: "youtube",
            href: "https://www.youtube.com/",
            icon: Youtube,
            size: 18,
            hover_color: "hover:text-red-500",
        },
        {
            name: "instagram",
            href: "https://www.instagram.com/",
            icon: Instagram,
            size: 16,
            hover_color: "hover:text-pink-500",
        },
    ];
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <a href={link.href} target="_blank" key={link.name}>
                        <LinkIcon
                            size={link.size}
                            className={link.hover_color}
                        />
                    </a>
                );
            })}
        </>
    );
}
