import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";
import { siteData } from "../../data/siteData.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Contact() {
  const { t } = useLang();
  const contactItems = [
    {
      label: "Email",
      href: `mailto:${siteData.email}`,
      value: siteData.email,
    },
    {
      label: "GitHub",
      href: siteData.github,
      value: "@ThalitadosReis",
    },
    {
      label: "LinkedIn",
      href: siteData.linkedin,
      value: "in/thalitadosreis",
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 sm:px-14 pt-16 sm:pt-24 pb-10 sm:pb-14 bg-paper"
    >
      <SectionHeading
        label={`03 / ${t.contact.eyebrow}`}
        aside={siteData.languages}
        className="mb-10"
      />

      <Reveal>
        <h2 className="font-serif font-normal text-[clamp(72px,11vw,168px)] leading-[0.92] tracking-[-0.03em] m-0 my-6 text-ink">
          <span>{t.contact.line1}</span>
          <br />
          <em className="italic text-ink-2">{t.contact.line2}</em>
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="max-w-[56ch] text-ink-2 text-[17px] leading-snug">
          {t.contact.sub}
        </p>
      </Reveal>

      <Reveal delay={0.16} className="flex gap-4 items-center flex-wrap mt-8">
        <a
          href={`mailto:${siteData.email}`}
          className="inline-flex items-center group bg-ink text-bg font-serif italic text-[22px] rounded-full gap-3.5 py-4 px-7 transition-all duration-250 hover:-translate-y-[3px]"
        >
          <span>{t.contact.sendEmail}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-[3px]">
            <ArrowUpRightIcon size={20} />
          </span>
        </a>
      </Reveal>

      <Reveal
        delay={0.24}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 md:gap-x-16 mt-10 sm:mt-16 pt-6 border-t border-rule"
      >
        {contactItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col gap-1.5 border-b border-rule py-5 pr-6 md:border-b-0 ${
              index === contactItems.length - 1 ? "" : "md:border-r"
            }`}
          >
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
              {item.label}
            </span>
            <a
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-[14px] hover:text-ink-2 transition-colors"
            >
              {item.value}
            </a>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
