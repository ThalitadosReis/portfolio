import ProfilePhoto from "./ProfilePhoto.jsx";
import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";
import { siteData } from "../../data/siteData.js";
import SectionHeading from "../ui/SectionHeading.jsx";

function Meta({ label, value }) {
  return (
    <div className="flex flex-col gap-1 text-[13px]">
      <span className="text-mute text-[10px] tracking-[0.14em] uppercase">
        {label}
      </span>
      <span className="text-ink">{value}</span>
    </div>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="px-6 sm:px-14 py-20 sm:py-28">
      <SectionHeading
        label={`02 / ${t.about.eyebrow}`}
        title={t.about.title}
        aside="Lenzburg, CH"
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-9 md:gap-14">
        <Reveal className="flex flex-col gap-7">
          <ProfilePhoto />
          <Meta label="Name" value="Thalita dos Reis" />
          <Meta label={t.banner.based} value="Lenzburg, CH" />
          <Meta label={t.about.languagesLabel} value={siteData.languages} />
          <Meta label={t.about.openToLabel} value={t.about.openToValue} />
        </Reveal>

        <div className="flex flex-col gap-7">
          <Reveal>
            <p className="m-0 text-ink font-serif text-[clamp(22px,2.5vw,26px)] leading-[1.4] max-w-[30ch] first-letter:text-[1.4em] first-letter:italic first-letter:pr-1">
              {t.about.paragraph1}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="m-0 text-ink font-serif text-[clamp(22px,2.5vw,26px)] leading-[1.4] max-w-[30ch] first-letter:text-[1.4em] first-letter:italic first-letter:pr-1">
              {t.about.paragraph2}
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="flex flex-wrap gap-x-3.5 gap-y-2 mt-5"
          >
            <div className="w-full text-[10px] tracking-[0.14em] uppercase text-mute mb-1.5">
              {t.about.toolsLabel}
            </div>
            {siteData.skills.map((s) => (
              <span
                key={s}
                className="font-mono text-[12px] text-ink-2 py-1 not-last:after:content-['·'] not-last:after:ml-3.5 not-last:after:text-rule"
              >
                {s}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
