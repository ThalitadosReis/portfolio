import { EnvelopeIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import { siteData } from "../../data/siteData.js";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-white py-24">
      <Reveal className="max-w-5xl mx-auto px-6 text-center">
        <p className="mb-2 text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-400">
          {t.contact.step}
        </p>
        <Reveal>
          <h2 className="font-display mb-5 text-5xl leading-none tracking-tight text-neutral-800 lg:text-6xl">
            {t.contact.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="w-8 h-px bg-neutral-900 mx-auto mb-6" />
          <p className="max-w-md mx-auto text-sm font-light leading-7 text-neutral-500">
            {t.contact.pageDescription}
          </p>
        </Reveal>

        <Reveal
          delay={0.16}
          className="flex justify-center items-center gap-5 text-xs flex-wrap mt-10"
        >
          <CtaLink
            onClick={() => (window.location.href = `mailto:${siteData.email}`)}
            aria-label={t.contact.emailAria}
          >
            <EnvelopeIcon size={20} weight="light" />
            {t.contact.email}
          </CtaLink>

          {siteData.whatsappUrl && (
            <CtaLink
              onClick={() => window.open(siteData.whatsappUrl, "_blank")}
              variant="outline"
              aria-label={t.contact.whatsappAria}
            >
              <WhatsappLogoIcon size={20} weight="light" />
              {t.contact.whatsapp}
            </CtaLink>
          )}
        </Reveal>
      </Reveal>
    </section>
  );
}
