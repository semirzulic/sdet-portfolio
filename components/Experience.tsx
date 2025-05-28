import React from "react";

import { workExperience } from "@/data";
import { FaDownload } from "react-icons/fa";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";

const Experience = () => {
  const handleDownload = () => {
    // Replace '/path-to-your-cv.pdf' with the actual path to your CV
    const link = document.createElement("a");
    link.href = "/Semir_Zulic_Resume.pdf";
    link.download = "Semir_Zulic_Resume.pdf"; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
        <div className="lg:col-span-4 flex flex-col items-center mt-16">
          <p className="text-center text-white text-lg mb-6">
            Want to know more about my professional journey and skills?
            <br />
            Download my comprehensive CV for a detailed look at my experience
            and qualifications.
          </p>
          <MagicButton
            title="Download My CV"
            icon={<FaDownload />}
            position="left"
            handleClick={handleDownload}
            otherClasses="!bg-[#161A31]"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
