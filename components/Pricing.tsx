"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import MagicButton from "./MagicButton";

const Pricing = () => {
  const { t } = useLanguage();

  const pricingTiers = [
    {
      id: "simple",
      name: t("pricing.simple.name"),
      subtitle: t("pricing.simple.subtitle"),
      priceKM: "1.300",
      priceEUR: "650",
      features: [
        t("pricing.simple.feature1"),
        t("pricing.simple.feature2"),
        t("pricing.simple.feature3"),
        t("pricing.simple.feature4"),
        t("pricing.simple.feature5"),
        t("pricing.simple.feature6"),
        t("pricing.simple.feature7"),
        t("pricing.simple.feature8"),
      ],
      highlighted: false,
    },
    {
      id: "professional",
      name: t("pricing.professional.name"),
      subtitle: t("pricing.professional.subtitle"),
      priceKM: "2.000",
      priceEUR: "1.000",
      features: [
        t("pricing.professional.feature1"),
        t("pricing.professional.feature2"),
        t("pricing.professional.feature3"),
        t("pricing.professional.feature4"),
        t("pricing.professional.feature5"),
        t("pricing.professional.feature6"),
        t("pricing.professional.feature7"),
        t("pricing.professional.feature8"),
      ],
      highlighted: true,
      badge: t("pricing.professional.badge"),
    },
    {
      id: "ecommerce",
      name: t("pricing.ecommerce.name"),
      subtitle: t("pricing.ecommerce.subtitle"),
      priceKM: "2.800",
      priceEUR: "1.400",
      features: [
        t("pricing.ecommerce.feature1"),
        t("pricing.ecommerce.feature2"),
        t("pricing.ecommerce.feature3"),
        t("pricing.ecommerce.feature4"),
        t("pricing.ecommerce.feature5"),
        t("pricing.ecommerce.feature6"),
        t("pricing.ecommerce.feature7"),
        t("pricing.ecommerce.feature8"),
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="py-20 w-full" id="pricing">
      <h1 className="heading">
        {t("pricing.heading")}{" "}
        <span className="text-purple">{t("pricing.headingHighlight")}</span>
      </h1>

      <p className="text-center text-white-200 mt-4 mb-12 max-w-2xl mx-auto px-4">
        {t("pricing.subtitle")}
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mb-16">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl p-8 ${
              tier.highlighted
                ? "bg-[#0c0e1a] border-2 border-purple shadow-[0_0_30px_rgba(191,90,242,0.3)]"
                : "bg-[#0c0e1a] border border-white/[0.1]"
            }`}
          >
            {/* Badge for highlighted tier */}
            {tier.highlighted && tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-purple text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {tier.badge}
                </span>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
              <p className="text-white-200 text-sm uppercase tracking-wider mb-2">
                {tier.name}
              </p>
              <h3 className="text-white text-xl font-bold mb-1">
                {tier.subtitle}
              </h3>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {tier.priceKM}
                </span>
                <span className="text-white-200 text-lg">KM</span>
              </div>
              <p className="text-white-200 text-sm">{tier.priceEUR} EUR</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheck className="text-purple mt-1 flex-shrink-0" />
                  <span className="text-white-200 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <MagicButton
              title={t("pricing.cta")}
              otherClasses={`w-full ${
                tier.highlighted
                  ? "!bg-purple hover:!bg-purple/90"
                  : "!bg-[#161A31] hover:!bg-purple/20"
              }`}
              handleClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              icon={undefined}
              position={""}
            />
          </motion.div>
        ))}
      </div>

      {/* Digital Marketing Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="bg-[#0c0e1a] border border-white/[0.1] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            {t("pricing.features.heading")}
          </h2>
          <p className="text-white-200 text-center mb-12">
            {t("pricing.features.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* SEO Included */}
            <div className="bg-[#10132E] border border-white/[0.08] rounded-xl p-6 hover:border-purple/30 transition-all duration-300">
              <div className="w-14 h-14 bg-purple/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-3">
                {t("pricing.features.seo.title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.features.seo.desc")}
              </p>
            </div>

            {/* Google Integration */}
            <div className="bg-[#10132E] border border-white/[0.08] rounded-xl p-6 hover:border-purple/30 transition-all duration-300">
              <div className="w-14 h-14 bg-purple/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-3">
                {t("pricing.features.google.title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.features.google.desc")}
              </p>
            </div>

            {/* Advertising Ready */}
            <div className="bg-[#10132E] border border-white/[0.08] rounded-xl p-6 hover:border-purple/30 transition-all duration-300">
              <div className="w-14 h-14 bg-purple/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-3">
                {t("pricing.features.ads.title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.features.ads.desc")}
              </p>
            </div>
          </div>

          <p className="text-purple text-center font-medium">
            {t("pricing.features.footer")}
          </p>
        </div>
      </motion.div>

      {/* What We Need Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="bg-[#0c0e1a] border border-white/[0.1] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            {t("pricing.whatWeNeed.heading")}
          </h2>
          <p className="text-white-200 text-center mb-10">
            {t("pricing.whatWeNeed.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                {t("pricing.whatWeNeed.item1Title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.whatWeNeed.item1Desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                {t("pricing.whatWeNeed.item2Title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.whatWeNeed.item2Desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">
                {t("pricing.whatWeNeed.item3Title")}
              </h3>
              <p className="text-white-200 text-sm">
                {t("pricing.whatWeNeed.item3Desc")}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white text-lg mb-6">
              {t("pricing.whatWeNeed.cta")}
            </p>
            <a
              href="https://wa.me/38762364474"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title={t("pricing.whatWeNeed.button")}
                otherClasses="!bg-purple hover:!bg-purple/90"
                icon={undefined}
                position={""}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
