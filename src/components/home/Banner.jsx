import { ArrowDownIcon } from "@phosphor-icons/react";
import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

export default function Banner() {
  const { t } = useLang();

  return (
    <section
      className="relative flex flex-col justify-between px-6 sm:px-14 pt-20 sm:pt-24 pb-8 sm:pb-14 min-h-svh"
      id="home"
    >
      <div className="flex flex-wrap items-end justify-between gap-x-14 gap-y-4 border-b border-rule pb-3.5 text-[12px] text-ink-2">
        <div className="flex flex-wrap gap-x-14 gap-y-3">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.14em] uppercase text-mute">
              {t.banner.based}
            </span>
            <span className="text-ink">Lenzburg, CH</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.14em] uppercase text-mute">
              Role
            </span>
            <span className="text-ink">{t.banner.title}</span>
          </div>
        </div>
      </div>

      {/* title + caption */}
      <div>
        <Reveal>
          <h1 className="font-serif font-normal text-[clamp(96px,11vw,188px)] leading-[0.92] tracking-[-0.025em] m-0">
            <span className="block">Thalita</span>
            <span className="block">
              <em className="italic text-ink-2">dos</em> Reis
            </span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 items-end border-t border-rule pt-5 mt-1">
          <Reveal delay={0.6} className="text-[13px] text-ink-2 max-w-[32ch]">
            <span>{t.banner.description}</span>
            <span>{t.banner.specialization}</span>
          </Reveal>

          <Reveal delay={0.8} className="flex md:justify-end">
            <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
              <span>{t.banner.scrollDown}</span>
              <ArrowDownIcon size={12} className="animate-bounce" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
