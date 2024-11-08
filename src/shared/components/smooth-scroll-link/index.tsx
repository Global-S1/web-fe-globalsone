"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  href: string;
  children: React.ReactNode;
}

export const SmoothScrollLink = ({ href, children }: IProps): JSX.Element => {
  console.log(href);
  const [sectionToScroll, setSectionToScroll] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handlerClick = (e: React.PointerEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.includes("#")) {
      const section = href.split("#")[1];
      setSectionToScroll(section);

      if (pathname === "/") {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${section}`);
      }
    } else {
      router.push("/", { scroll: true });
    }
  };

  useEffect(() => {
    // Scroll only if the pathname includes "/" and sectionToScroll is set
    if (pathname === "/" && sectionToScroll) {
      const timer = setTimeout(() => {
        document
          .getElementById(sectionToScroll)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [pathname, sectionToScroll]);
  return (
    <a onClick={handlerClick} style={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};
