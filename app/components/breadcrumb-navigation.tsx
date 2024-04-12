import { ChevronRight } from "react-bootstrap-icons";
import clsx from "clsx";
import Link from "next/link";
import type { BreadcrumbNavigation } from "../types";
export default function BreadcrumbNavigation({
  navigations,
}: {
  navigations: BreadcrumbNavigation[];
}) {
  return (
    <div className="w-full h-auto flex gap-2 ">
      {navigations.map((naviagtion) => {
        return (
          <div key={naviagtion.name}>
            <Link
              href={naviagtion.href}
              className={clsx(
                " text-second-color hover:text-third-color font-medium",
                {
                  "text-third-color": naviagtion.current === true,
                }
              )}
            >
              {naviagtion.name}
            </Link>
            <ChevronRight className="inline ml-2 w-3 h-3 text-gray-400" />
          </div>
        );
      })}
    </div>
  );
}
