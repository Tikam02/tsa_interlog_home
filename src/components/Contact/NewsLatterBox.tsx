"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative h-full z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                    <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 h-max winline-block">
                  <Image
                    src="/images/about/garlic.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                </div>
     
    </div>
  );
};

export default NewsLatterBox;
