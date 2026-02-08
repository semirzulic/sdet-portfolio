"use client";

import {
  FaLocationArrow,
  FaRocket,
  FaCode,
  FaMobile,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [
  <FaLaptopCode key="laptop" className="w-6 h-6" />,
  <FaMobile key="mobile" className="w-6 h-6" />,
  <FaCode key="code" className="w-6 h-6" />,
  <FaRocket key="rocket" className="w-6 h-6" />,
];

const latestWorkData = [
  {
    url: "https://www.balkandawah.com",
    domain: "balkandawah.com",
    titleKey: "projects.latestWork1Title",
    descKey: "projects.latestWork1Desc",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    url: "https://www.estech.dev",
    domain: "estech.dev",
    titleKey: "projects.latestWork2Title",
    descKey: "projects.latestWork2Desc",
    gradient: "from-blue-500 to-purple",
    bgGradient: "from-blue-500/20 to-purple/20",
  },
];

const RecentProjects = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: featureIcons[0],
      title: t("projects.feature1Title"),
      description: t("projects.feature1Desc"),
    },
    {
      icon: featureIcons[1],
      title: t("projects.feature2Title"),
      description: t("projects.feature2Desc"),
    },
    {
      icon: featureIcons[2],
      title: t("projects.feature3Title"),
      description: t("projects.feature3Desc"),
    },
    {
      icon: featureIcons[3],
      title: t("projects.feature4Title"),
      description: t("projects.feature4Desc"),
    },
  ];

  return (
    <div id="projects" className="py-20 relative">
      <h1 className="heading">
        {t("projects.heading")}{" "}
        <span className="text-purple">{t("projects.headingHighlight")}</span>
      </h1>

      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto px-4">
        {t("projects.description")}
      </p>

      <div className="flex flex-col items-center justify-center mt-16 px-4">
        {/* Main showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl"
        >
          {/* Animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple via-blue-500 to-purple rounded-2xl blur-xl opacity-30 group-hover:opacity-50 animate-pulse" />

          {/* Card container */}
          <div className="relative bg-[#0c0e1a] border border-white/[0.1] rounded-2xl overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple to-transparent" />

            <div className="p-8 md:p-12 lg:p-16">
              {/* Header section */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple bg-purple/10 rounded-full border border-purple/20">
                      {t("projects.badge")}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {t("projects.title")}{" "}
                      <span className="text-purple">
                        {t("projects.titleHighlight")}
                      </span>
                    </h2>
                    <p className="text-white-200 text-lg max-w-xl">
                      {t("projects.subtitle")}
                    </p>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <a
                    href="https://plama-react.envytheme.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <MagicButton
                      title={t("projects.cta")}
                      icon={<FaLocationArrow />}
                      position="right"
                      otherClasses="!bg-[#161A31] hover:!bg-purple/20 transition-colors duration-300"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className="relative bg-[#10132E] border border-white/[0.08] rounded-xl p-6 hover:border-purple/30 transition-all duration-300 h-full">
                      <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple mb-4 group-hover:bg-purple/20 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white-200 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA area */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white-200 text-sm">
                    {t("projects.liveStatus")}
                  </span>
                </div>
                <span className="hidden sm:inline text-white/20">|</span>
                <a
                  href="https://plama-react.envytheme.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:text-purple/80 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                >
                  plama-react.envytheme.com
                  <FaLocationArrow className="w-3 h-3" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Latest Work Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mt-16"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-purple bg-purple/10 rounded-full border border-purple/20">
              {t("projects.latestWorkBadge")}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t("projects.latestWorkTitle")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestWorkData.map((work, index) => (
              <motion.a
                key={index}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group relative block"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${work.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
                />
                <div className="relative bg-[#0c0e1a] border border-white/[0.1] rounded-2xl p-6 md:p-8 h-full hover:border-white/[0.2] transition-all duration-300">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${work.bgGradient} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <FaGlobe className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple transition-colors duration-300">
                    {t(work.titleKey)}
                  </h4>
                  <p className="text-white-200 text-sm mb-5">
                    {t(work.descKey)}
                  </p>
                  <div className="flex items-center gap-2 text-purple group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm font-medium">{work.domain}</span>
                    <FaLocationArrow className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentProjects;
