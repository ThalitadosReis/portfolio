import { Trans, useTranslation } from "react-i18next";
import { EnvelopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import SocialLinks from "../common/SocialLinks";

export default function Contact() {
  const { t } = useTranslation();
  const email = "dosreistha@gmail.com";
  const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE;

  return (
    <footer
      id="contact"
      className="bg-gray rounded-t-[75px] md:rounded-t-[100px] lg:rounded-t-[200px] overflow-hidden"
    >
      <div className="container lg:max-w-6xl mx-auto pt-16 pb-8 text-center space-y-8">
        <h2 className="uppercase font-medium text-4xl md:text-6xl lg:text-7xl leading-none whitespace-break-">
          <Trans
            i18nKey="contact.title"
            components={{
              1: <span className="font-newyork font-extrabold" />,
            }}
          />
        </h2>

        <div className="flex justify-center items-center gap-5 text-xs">
          <button
            onClick={() => (window.location.href = `mailto:${email}`)}
            className="flex items-center gap-2 px-6 py-2 border-2 border-neutral rounded-full bg-black text-white hover:underline"
            aria-label={t("contact.emailAria")}
          >
            <EnvelopeIcon size={20} weight="light" />
            {t("contact.email")}
          </button>

          <button
            onClick={() =>
              window.open(`https://wa.me/${whatsappPhone}`, "_blank")
            }
            className="flex items-center gap-2 px-6 py-2 border-2 border-neutral rounded-full bg-offwhite hover:underline"
            aria-label={t("contact.whatsappAria")}
          >
            <WhatsappLogoIcon size={20} weight="light" />
            {t("contact.whatsapp")}
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm border-t border-black/10 pt-4 gap-4">
          <span>{t("contact.copyright")}</span>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
