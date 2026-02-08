"use client";
import React, { useState } from "react";
import { scrollToElement } from "@/utils/scrollUtils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navTranslationKeys: Record<string, string> = {
  About: "nav.about",
  Projects: "nav.projects",
  Testimonials: "nav.testimonials",
  Process: "nav.process",
  Contact: "nav.contact",
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavClick = (link: string) => {
    const elementId = link.replace("#", "");
    scrollToElement(elementId);
    setMobileMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed z-[5000] top-4 md:top-10 inset-x-0 mx-auto",
          className,
        )}
      >
        {/* Desktop Navigation */}
        <div
          className="hidden md:flex max-w-fit md:min-w-[70vw] lg:min-w-fit mx-auto px-10 py-5 rounded-lg items-center justify-center space-x-4"
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(navItem.link);
              }}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              )}
            >
              <span className="text-sm !cursor-pointer">
                {navTranslationKeys[navItem.name]
                  ? t(navTranslationKeys[navItem.name])
                  : navItem.name}
              </span>
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden px-4">
          <div
            className="flex items-center justify-between px-4 py-3 rounded-lg"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            <span className="text-white font-semibold text-sm">SZ</span>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-1 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-2 rounded-lg overflow-hidden"
                style={{
                  backdropFilter: "blur(16px) saturate(180%)",
                  backgroundColor: "rgba(17, 25, 40, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.125)",
                }}
              >
                <div className="py-2">
                  {navItems.map((navItem: any, idx: number) => (
                    <a
                      key={`mobile-link=${idx}`}
                      href={navItem.link}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(navItem.link);
                      }}
                      className="flex items-center gap-3 px-5 py-3 text-white hover:bg-purple/20 transition-colors"
                    >
                      {navItem.icon && (
                        <span className="text-purple">{navItem.icon}</span>
                      )}
                      <span className="text-base font-medium">
                        {navTranslationKeys[navItem.name]
                          ? t(navTranslationKeys[navItem.name])
                          : navItem.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
