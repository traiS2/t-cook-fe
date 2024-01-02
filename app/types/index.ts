import { MouseEventHandler } from "react";

export interface CustomSearchProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomIconButtonLinkProps {
    title: string;
    icon?: React.ElementType;
}

export interface Blog{
    id: number;
    title: string;
    category: string;
    image: string;
    date: string;
    description: string;
    tags: string[];
    user: string;
}
