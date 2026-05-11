import { ArrowDownIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import CtaLink from "../ui/CtaLink.jsx";
import HeroImage from "./HeroImage.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Banner() {
  const { t } = useLang();

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-stone-50"
      id="home"
    >
      {/* gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 h-[560px] w-[560px] rounded-full bg-accent/20 blur-[96px]" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full pt-28 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-center">
          <div>
            <Reveal className="inline-flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-medium leading-4 tracking-[0.2em] uppercase text-stone-400">
                {t.banner.available}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-serif mb-6 text-[clamp(4.5rem,10vw,10rem)] leading-[0.92] tracking-[-0.025em]">
                <span className="block text-stone-900">
                  {t.banner.firstName}
                </span>
                <span className="block text-accent/70 italic">
                  {t.banner.lastName}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-[10px] font-medium text-stone-400 tracking-[0.22em] uppercase mb-7">
                {t.banner.title}
              </p>
            </Reveal>

            <div className="mb-7">
              <Reveal delay={0.15} scaleX className="inline-block w-10">
                <div className="h-px bg-accent/50" />
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <p className="text-base text-stone-500 font-light leading-[1.8] max-w-md mb-12 tracking-[0.01em]">
                {t.banner.description} {t.banner.specialization}
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap items-center gap-6" delay={0.25}>
              <CtaLink
                to="/projects"
                variant="default"
                size="micro"
                className="py-3 px-8"
              >
                {t.banner.projectsCta}
              </CtaLink>
              <CtaLink to="/contact" variant="inline" size="micro">
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
        <span className="text-[9px] font-medium leading-4 tracking-[0.2em] uppercase text-stone-400">
          {t.banner.scrollDown}
        </span>
        <ArrowDownIcon
          size={11}
          className="text-stone-400 animate-scroll-drift"
        />
      </Reveal>
    </section>
  );
}
