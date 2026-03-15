import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import PageIntro from "../components/ui/PageIntro.jsx";
import Tag from "../components/ui/Tag.jsx";
import Reveal from "../components/Reveal.jsx";
import { siteData } from "../data/siteData.js";
import { useLang } from "../i18n/LangContext.jsx";

const techStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "MongoDB",
];

export default function Contact() {
  const { t } = useLang();

  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col bg-white pt-14">
      <PageIntro label={t.contact.pageLabel} title={t.contact.title} />

      <section className="flex-1 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-10 max-w-md">
                  {t.contact.pageDescription}
                </p>
              </Reveal>

              <Reveal className="flex flex-col gap-3" delay={0.08}>
                <a
                  href={`mailto:${siteData.email}`}
                  className="group flex items-center justify-between rounded-sm border border-neutral-200 bg-neutral-50 px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-neutral-200 group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <EnvelopeIcon
                        size={18}
                        className="text-neutral-600 group-hover:text-accent"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-700 tracking-wide group-hover:text-accent transition-colors duration-200">
                        {t.contact.email}
                      </p>
                      <p className="mt-0.5 text-[0.65rem] leading-4 tracking-[0.1em] text-neutral-500">
                        {siteData.email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRightIcon
                    size={14}
                    className="text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>

                {siteData.whatsappUrl && (
                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-sm border border-neutral-200 bg-neutral-50 px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-accent hover:bg-accent/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-sm bg-neutral-200 group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-300 shrink-0">
                        <WhatsappLogoIcon
                          size={18}
                          className="text-neutral-600 group-hover:text-accent"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-700 tracking-wide group-hover:text-accent transition-colors duration-200">
                          {t.contact.whatsapp}
                        </p>
                        <p className="mt-0.5 text-[0.65rem] leading-4 tracking-[0.1em] text-neutral-500">
                          {siteData.whatsappPhone}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRightIcon
                      size={14}
                      className="text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </a>
                )}
              </Reveal>

              <Reveal
                className="mt-8 pt-8 border-t border-neutral-200"
                delay={0.16}
              >
                <p className="mb-4 text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-500">
                  {t.contact.socialTitle}
                </p>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs text-neutral-600 hover:text-accent transition-colors duration-200 group"
                  >
                    <GithubLogoIcon
                      size={16}
                      className="text-neutral-400 group-hover:text-accent transition-colors duration-200"
                    />
                    {siteData.github.replace(/^https?:\/\//, "")}
                    <ArrowUpRightIcon
                      size={10}
                      className="text-neutral-300 group-hover:text-accent transition-colors duration-200"
                    />
                  </a>
                  <a
                    href={siteData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs text-neutral-600 hover:text-accent transition-colors duration-200 group"
                  >
                    <LinkedinLogoIcon
                      size={16}
                      className="text-neutral-400 group-hover:text-accent transition-colors duration-200"
                    />
                    {siteData.linkedin.replace(/^https?:\/\//, "")}
                    <ArrowUpRightIcon
                      size={10}
                      className="text-neutral-300 group-hover:text-accent transition-colors duration-200"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <section className="rounded-sm border border-neutral-200 bg-neutral-50 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="mb-7 pb-7 border-b border-neutral-200">
                  <h2 className="font-display mb-1 text-3xl leading-none tracking-tight text-neutral-800">
                    {t.contact.cardTitle}
                  </h2>
                  <p className="text-xs font-mono text-accent tracking-widest uppercase mt-2">
                    {t.banner.title}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed font-light mb-7">
                  {t.contact.cardDescription}
                </p>

                <div className="mb-7 flex items-center gap-2 border-b border-neutral-200 pb-7 text-[0.65rem] leading-4 tracking-[0.1em] text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {siteData.location}
                </div>

                <div>
                  <p className="mb-3 text-[0.65rem] leading-4 tracking-[0.1em] uppercase text-neutral-400">
                    {t.contact.stackTitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
