import Link from "next/link";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn, getFirstSegment } from "@/app/lib/utils";
import { ignoredLinks } from "@/app/lib/constants";
import { NavbarNestedLinks } from "@/app/lib/definitions";
import NestedLink from "./nested-link";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
  pathname: string;
}

export default function MainNavbarSection({
  href,
  name,
  nestedLinks,
  pathname,
}: props) {
  const linkHref = ignoredLinks.includes(href) ? "" : href;
  const parentSegmentInUrl = getFirstSegment(pathname);
  const hasNestedLinks = !!nestedLinks.length;

  return (
    <li
      className={cn(
        "before:absolute before:w-full before:h-[10px]",
        "before:top-full before:right-0 before:hidden hover:before:inline",
        "whitespace-nowrap relative px-4 py-3 rounded-md cursor-pointer",
        "transition-colors hover:bg-sky-700 group relative",
        href === parentSegmentInUrl && "bg-sky-700"
      )}
    >
      {!hasNestedLinks && (
        <Link href={linkHref} className=" flex items-center gap-[2px]">
          {name}
        </Link>
      )}

      {hasNestedLinks && (
        <>
          <button type="button" className=" flex items-center gap-[2px] group">
            {name}
            <>
              <ChevronDownIcon className="h-3 w-3 mt-[2px] group-hover:hidden" />
              <XMarkIcon className="h-3 w-3 mt-[2px] hidden group-hover:block" />
            </>
          </button>
          <ul
            className="
            absolute top-[58px] right-2 rounded bg-slate-200 
            hidden group-hover:flex flex-col
            w-64 max-w-72 min-w-fit
            drop-shadow-lg z-[1000]
          "
          >
            {nestedLinks.map(
              ({ name, href = "", nestedLinks, prefetch = true }) => (
                <NestedLink
                  key={name}
                  name={name}
                  href={href}
                  prefetch={prefetch}
                  nestedLinks={nestedLinks}
                />
              )
            )}
          </ul>
        </>
      )}
    </li>
  );
}
