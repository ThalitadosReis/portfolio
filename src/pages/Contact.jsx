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
    <main className="flex min-h-screen flex-col bg-stone-50 pt-20">
      <PageIntro label={t.contact.pageLabel} title={t.contact.title} />

      <section className="flex-1 py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-base text-stone-500 font-light leading-[1.8] mb-10 max-w-md">
                  {t.contact.pageDescription}
                </p>
              </Reveal>

              <Reveal className="flex flex-col gap-3" delay={0.08}>
                <a
                  href={`mailto:${siteData.email}`}
                  className="group flex items-center justify-between border border-stone-200 bg-stone-50/50 px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-stone-100 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <EnvelopeIcon
                        size={16}
                        className="text-stone-400 group-hover:text-accent"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-stone-700 tracking-[0.05em] group-hover:text-accent transition-colors duration-200">
                        {t.contact.email}
                      </p>
                      <p className="mt-0.5 text-[0.6rem] leading-4 tracking-[0.12em] text-stone-400">
                        {siteData.email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRightIcon
                    size={13}
                    className="text-stone-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </a>

                {siteData.whatsappUrl && (
                  <a
                    href={siteData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-stone-200 bg-stone-50/50 px-5 py-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-stone-100 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                        <WhatsappLogoIcon
                          size={16}
                          className="text-stone-400 group-hover:text-accent"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-stone-700 tracking-[0.05em] group-hover:text-accent transition-colors duration-200">
                          {t.contact.whatsapp}
                        </p>
                        <p className="mt-0.5 text-[0.6rem] leading-4 tracking-[0.12em] text-stone-400">
                          {siteData.whatsappPhone}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRightIcon
                      size={13}
                      className="text-stone-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </a>
                )}
              </Reveal>

              <Reveal
                className="mt-8 pt-8 border-t border-stone-200"
                delay={0.16}
              >
                <p className="mb-4 text-[10px] font-medium leading-4 tracking-[0.2em] uppercase text-stone-400">
                  {t.contact.socialTitle}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={siteData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs text-stone-500 hover:text-accent transition-colors duration-200 group"
                  >
                    <GithubLogoIcon
                      size={15}
                      className="text-stone-300 group-hover:text-accent transition-colors duration-200"
                    />
                    {siteData.github.replace(/^https?:\/\//, "")}
                    <ArrowUpRightIcon
                      size={10}
                      className="text-stone-300 group-hover:text-accent transition-colors duration-200"
                    />
                  </a>
                  <a
                    href={siteData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs text-stone-500 hover:text-accent transition-colors duration-200 group"
                  >
                    <LinkedinLogoIcon
                      size={15}
                      className="text-stone-300 group-hover:text-accent transition-colors duration-200"
                    />
                    {siteData.linkedin.replace(/^https?:\/\//, "")}
                    <ArrowUpRightIcon
                      size={10}
                      className="text-stone-300 group-hover:text-accent transition-colors duration-200"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <section className="border border-stone-200 bg-white p-8 lg:p-10 shadow-sm">
                <div className="mb-7 pb-7 border-b border-stone-100">
                  <h2 className="font-serif mb-1 text-3xl leading-none tracking-[-0.02em] text-stone-900">
                    {t.contact.cardTitle}
                  </h2>
                  <p className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase mt-2.5">
                    {t.banner.title}
                  </p>
                </div>

                <p className="text-base text-stone-500 leading-[1.8] font-light mb-7">
                  {t.contact.cardDescription}
                </p>

                <div className="mb-7 flex items-center gap-2 border-b border-stone-100 pb-7 text-[0.6rem] leading-4 tracking-[0.12em] text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {siteData.location}
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-medium leading-4 tracking-[0.2em] uppercase text-stone-400">
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
