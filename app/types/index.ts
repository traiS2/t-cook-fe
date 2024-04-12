import { MouseEventHandler } from "react";

export interface CustomSearchProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomIconButtonLinkProps {
  title: string;
  icon?: React.ElementType;
}

export interface BreadcrumbNavigation {
  name: string;
  href: string;
  current: boolean;
}

export interface IconButtonCustomProps {
  title: string;
  style?: string;
  icon?: any;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
