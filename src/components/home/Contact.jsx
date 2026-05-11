import Reveal from "../Reveal.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import { siteData } from "../../data/siteData.js";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-white py-28">
      <Reveal className="max-w-5xl mx-auto px-6 text-center">
        <SectionHeading
          label={t.contact.step}
          title={t.contact.title}
          titleClassName="mb-5 text-5xl lg:text-7xl tracking-[-0.03em]"
        />

        <Reveal delay={0.08} className="flex flex-col items-center">
          <div className="mb-7">
            <Reveal delay={0.1} scaleX className="inline-block w-8">
              <div className="h-px bg-accent/50" />
            </Reveal>
          </div>
          <p className="max-w-sm mx-auto text-base font-light leading-[1.8] text-stone-400 tracking-[0.01em]">
            {t.contact.pageDescription}
          </p>
        </Reveal>

        <Reveal
          delay={0.16}
          className="flex justify-center items-center gap-5 text-xs flex-wrap mt-12"
        >
          <CtaLink
            onClick={() => (window.location.href = `mailto:${siteData.email}`)}
            aria-label={t.contact.emailAria}
          >
            {t.contact.email}
          </CtaLink>

          {siteData.whatsappUrl && (
            <CtaLink
              onClick={() => window.open(siteData.whatsappUrl, "_blank")}
              variant="outline"
              aria-label={t.contact.whatsappAria}
            >
              {t.contact.whatsapp}
            </CtaLink>
          )}
        </Reveal>
      </Reveal>
    </section>
  );
}
