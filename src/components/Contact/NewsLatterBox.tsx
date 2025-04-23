"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative h-full z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">

                      <section className="mt-8 text-center pr-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="space-y-4">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@tsatradelog.com" className="text-blue-600 hover:underline">
            info@tsatradelog.com  
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918839683031" className="text-blue-600 hover:underline">
              (+91) 8839683031
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918839683031" className="text-blue-600 hover:underline">
              (+91) 7694081280
            </a>
          </p>
        </div>
      </section>

      <div className="mb-10 max-w-[350px] lg:mb-16">
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
