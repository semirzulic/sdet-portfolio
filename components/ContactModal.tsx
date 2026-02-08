"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaEnvelope, FaPhone, FaCopy, FaCheck } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "semirzulic92@gmail.com";
  const phone = "+38762364474";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[10000] mx-auto max-w-md sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="relative bg-[#0c0e1a] border border-white/[0.1] rounded-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-200 z-10"
              >
                <FaXmark className="w-4 h-4 text-white/70" />
              </button>

              <div className="p-5 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {t("contact.modalTitle")}
                  </h2>
                  <p className="text-white-200 text-xs sm:text-sm">
                    {t("contact.modalSubtitle")}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Email */}
                  <div className="group relative bg-[#10132E] border border-white/[0.08] rounded-xl p-3 sm:p-4 hover:border-purple/30 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple/20 transition-colors duration-300 flex-shrink-0">
                          <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white-200 text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                            {t("contact.email")}
                          </p>
                          <a
                            href={`mailto:${email}`}
                            className="text-white font-medium hover:text-purple transition-colors text-sm sm:text-base block truncate"
                          >
                            {email}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(email, "email")}
                        className="p-2 rounded-lg bg-white/5 hover:bg-purple/20 transition-colors duration-200 flex-shrink-0"
                        title={t("contact.copyEmail")}
                      >
                        {copiedEmail ? (
                          <FaCheck className="w-4 h-4 text-green-400" />
                        ) : (
                          <FaCopy className="w-4 h-4 text-white/50" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="group relative bg-[#10132E] border border-white/[0.08] rounded-xl p-3 sm:p-4 hover:border-purple/30 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple/20 transition-colors duration-300 flex-shrink-0">
                          <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-white-200 text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                            {t("contact.phone")}
                          </p>
                          <a
                            href={`tel:${phone}`}
                            className="text-white font-medium hover:text-purple transition-colors text-sm sm:text-base block"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(phone, "phone")}
                        className="p-2 rounded-lg bg-white/5 hover:bg-purple/20 transition-colors duration-200 flex-shrink-0"
                        title={t("contact.copyPhone")}
                      >
                        {copiedPhone ? (
                          <FaCheck className="w-4 h-4 text-green-400" />
                        ) : (
                          <FaCopy className="w-4 h-4 text-white/50" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="mt-5 sm:mt-6 w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  {t("contact.close")}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
