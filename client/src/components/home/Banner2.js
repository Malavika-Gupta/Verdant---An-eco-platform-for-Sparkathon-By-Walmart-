/**
 * Title: Write a program using JavaScript on Banner2
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 14, October 2023
 */

import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner2 = ({ className }) => {
  const router = useRouter();

  return (
    <section className="mt-20">
      <Container className={className ? className : ""}>
        <div
          className="bg-yellow-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8"
          style={{ backgroundImage: "url(/assets/home/banner/dots.svg)" }}
        >
          <Image
            src="/assets/home/banner/kid.png"
            alt="model"
            height={872}
            width={600}
            className="lg:absolute bottom-0 left-0 order-2"
          />
          <article className="flex flex-col justify-start items-end order-1">
            <div className="flex flex-col gap-y-4 max-w-lg z-50 lg:ml-auto lg:mr-0 mr-auto">
              <h1 className="md:text-6xl text-4xl">
                Buy Green and Donate to the Education of a Child
              </h1>
              <p className="flex flex-row gap-x-0.5 items-center text-lg text-slate-500">
                We have collaborated with a charity organization to support children's education with every purchase you make.
              </p>
              <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4"
              onClick={() => router.push("https://devhasibulislam.vercel.app/")}>
                Discover More
              </button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Banner2;
