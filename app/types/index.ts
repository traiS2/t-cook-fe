import { MouseEventHandler } from "react";

export interface CustomSearchProps {
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
