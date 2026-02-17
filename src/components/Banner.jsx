import { useTranslation } from "react-i18next";

const image =
  "https://res.cloudinary.com/douen1dwv/image/upload/v1771245425/default/profile-picture.jpg";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section
      className="bg-gray rounded-b-[75px] md:rounded-b-[100px] lg:rounded-b-[200px] overflow-hidden"
      id="home"
    >
      <div className="container lg:max-w-6xl mx-auto px-6 pb-24 space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none font-newyork">
          {t("banner.title")}
        </h1>

        <p className="text-sm font-light">
          {t("banner.description")}
          <br />
          {t("banner.specialization")}
        </p>

        <img
          src={image}
          alt={t("banner.profileAlt")}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="mx-auto h-[300px] lg:h-[450px] aspect-square object-cover grayscale-45"
        />
      </div>
    </section>
  );
}
