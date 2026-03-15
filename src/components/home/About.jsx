import HeroImage from "./HeroImage.jsx";
import Tag from "../ui/Tag.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

const aboutTags = {
  en: [
    "Team Player",
    "Fast Learner",
    "Detail-Oriented",
    "Communicative",
    "Self-Motivated",
  ],
  de: [
    "Teamfähig",
    "Schnelle Auffassungsgabe",
    "Detailorientiert",
    "Kommunikation",
    "Selbstmotiviert",
  ],
};

export default function About() {
  const { t, lang } = useLang();
  const language = lang;
  const paragraphs = [t.about.paragraph1, t.about.paragraph2].filter(Boolean);

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-10">
          <SectionHeading label={t.about.step} title={t.about.title} />

          <div className="lg:col-start-2 font-light space-y-4">
            <HeroImage className="lg:hidden pb-4" delay={0.04} />
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.08 + index * 0.08}>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {aboutTags[language].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
