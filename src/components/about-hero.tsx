import Image from "next/image";
import flag from "../data/images/iran.webp";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Faezeh Jafari
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn vision into reality with code. Whether I&apos;m working on
              a website or any digital product, I bring my commitment to design
              excellence and user-centered thinking to every project I work on.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest projects showcasing my expertise in Reactjs,
              Nextjs, Javascript, Typescript and web development.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-between"
          >
            <div className="flex items-center">
              <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
                <Image
                  className="-z-10 h-full w-full bg-cover bg-no-repeat"
                  alt="Indian flag"
                  src={flag}
                  width={15}
                  height={15}
                />
              </div>
              <span className="ml-4 text-lg font-medium text-foreground">
                Tehran, Iran
              </span>
            </div>
            <motion.button
              className="hover:to-cyan-700-500 flex items-center justify-center rounded-[10px] bg-gradient-to-r from-cyan-700 via-blue-500 to-cyan-900  px-3 py-2 text-white transition-all duration-300 hover:from-cyan-500 hover:via-blue-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaDownload className="mr-2" /> Download CV
            </motion.button>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
