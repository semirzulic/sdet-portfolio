import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { scrollToElement } from "@/utils/scrollUtils";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Ensuring Software Quality Through Advanced Testing
          </p>

          {/* Hero Section with Background Image and Overlay Text */}
          <div className="relative w-full max-w-4xl mx-auto my-12 lg:my-16">
            {/* Background Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/myimage.jpeg"
                alt="Semir - Senior Software Development Engineer in Test"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              {/* Gradient overlay for enhanced text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 rounded-2xl"></div>
            </div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <TextGenerateEffect
                words="Elevating Software Quality with Innovative Test Automation"
                className="text-center text-white text-[28px] md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-2xl"
              />
            </div>

            {/* Subtle border and glow effects */}
            <div className="absolute inset-0 rounded-2xl border-4 border-purple-500/20 shadow-2xl hover:border-purple-500/40 hover:shadow-purple-500/20 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </div>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Semir, a Senior Software Development Engineer in Test
            specializing in test automation and quality assurance, based in
            Bosnia and Herzegovina.
          </p>

          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("about");
            }}
          >
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
