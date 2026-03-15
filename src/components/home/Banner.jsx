import { ArrowDownIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import HeroImage from "./HeroImage.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Banner() {
  const { t } = useLang();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-100"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60 [background-image:radial-gradient(circle,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300/40 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-center">
          <div>
            <Reveal className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-500">
                {t.banner.available}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mb-6 text-[clamp(3.5rem,9vw,8rem)] leading-none tracking-tight">
                <span className="block text-neutral-800">
                  {t.banner.firstName}
                </span>
                <span className="block text-neutral-600 italic">
                  {t.banner.lastName}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-6">
                {t.banner.title}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="w-12 h-px bg-neutral-600 mb-6 origin-left" />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base text-neutral-600 font-light leading-relaxed max-w-lg mb-10">
                {t.banner.description} {t.banner.specialization}
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap items-center gap-4" delay={0.25}>
              <CtaLink to="/projects" className="group">
                {t.banner.projectsCta}
                <ArrowRightIcon
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </CtaLink>
              <CtaLink to="/contact" variant="outline">
                {t.banner.contactCta}
              </CtaLink>
            </Reveal>
          </div>

          <HeroImage className="hidden lg:block" />
        </div>
      </div>

      <Reveal
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        delay={0.6}
        y={0}
      >
        <span className="text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-400">
          {t.banner.scrollDown}
        </span>
        <ArrowDownIcon size={12} className="text-neutral-400 animate-bounce" />
      </Reveal>
    </section>
  );
}
