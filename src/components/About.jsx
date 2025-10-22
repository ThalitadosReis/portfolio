import { Trans, useTranslation } from "react-i18next";
import SectionHeader from "./common/SectionHeader.jsx";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-12 px-6">
      <div className="container lg:max-w-6xl mx-auto space-y-12">
        <SectionHeader step={t("about.step")} title={t("about.title")} />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="lg:max-w-lg uppercase text-3xl md:text-4xl lg:text-5xl leading-none ">
              <Trans
                i18nKey="about.headline"
                components={{
                  1: <span className="font-newyork" />,
                  3: <span className="font-newyork whitespace-nowrap" />,
                }}
              />
            </h2>
          </div>

          <div className="flex-1 font-light text-justify space-y-4 indent-8">
            <p>{t("about.paragraph1")}</p>

            <p>{t("about.paragraph2")}</p>

            <p>{t("about.paragraph3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
