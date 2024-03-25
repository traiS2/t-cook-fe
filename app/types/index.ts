import { ElementType, MouseEventHandler, ReactElement } from "react";
import { IconProps } from "react-bootstrap-icons";

export interface CustomSearchProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomIconButtonLinkProps {
    title: string;
    icon?: React.ElementType;
}

export interface Blog {
    id: number;
    link: string;
    title: string;
    category: string;
    image: string;
    date: string;
    description: string;
    tags: string[];
    user: string;
}

export interface BreadcrumbNavigation {
    name: string;
    href: string;
    current: boolean;
}

export interface IconButtonCustomProps {
    title: string;
    style?: string;
    icon?: any
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
