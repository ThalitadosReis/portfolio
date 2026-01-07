import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import CV_EN from "../../assets/cv_en.pdf";
import CV_DE from "../../assets/cv_de.pdf";

const email = "dosreistha@gmail.com";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setEnabled(i18n.language === "en");
    }
  }, [i18n.language, i18n.isInitialized]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((error) => console.error("Error copying email:", error));
  };

  return (
    <nav className="bg-gray py-8">
      <div className="container lg:lg:max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xs">
          {/* desktop */}
          <div className="hidden lg:flex items-center rounded-full border-2 border-neutral">
            <span className="px-6">{email}</span>
            <button
              onClick={handleCopyToClipboard}
              aria-label="Copy email to clipboard"
              className={`px-6 py-2 rounded-full border-none ${
                copied ? "bg-neutral" : "bg-offwhite"
              } hover:underline`}
            >
              {copied ? t("nav.copied") : t("nav.copy")}
            </button>
          </div>

          {/* mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => (window.location.href = `mailto:${email}`)}
              aria-label="Send email"
              className="px-6 py-2 rounded-full border-2 border-neutral bg-black text-white hover:underline"
            >
              {t("nav.email")}
            </button>
          </div>

          <a
            href={i18n.language === "de" ? CV_DE : CV_EN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
            className="px-6 py-2 rounded-full border-2 border-neutral bg-offwhite hover:underline"
          >
            {t("nav.cv")}
          </a>
        </div>

        <div className="flex items-stretch justify-center self-stretch">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="relative px-6 py-2 w-24 rounded-full border-2 border-neutral bg-offwhite transition-colors duration-300 flex items-center text-xs"
          >
            <span className="absolute inset-0 flex items-center">
              <span className="w-1/2 text-center">EN</span>
              <span className="w-1/2 text-center">DE</span>
            </span>

            <span
              className="absolute top-0 left-0 h-full w-[50%] bg-gray rounded-full shadow-sm transform transition-transform duration-300"
              style={{
                transform: enabled ? "translateX(100%)" : "translateX(0)",
              }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
