import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

const image =
  "https://res.cloudinary.com/douen1dwv/image/upload/v1771245425/default/profile-picture.jpg";

export default function HeroImage({ className = "", delay = 0.3 }) {
  const { t } = useLang();

  return (
    <Reveal className={className} delay={delay} y={0}>
      <div
        className="animate-hero-float"
        style={{ animationDelay: `${delay + 0.8}s` }}
      >
        <div className="mx-auto w-70 rotate-[1.5deg] border border-neutral-200 bg-white p-3 pb-10 shadow-lg">
          <div className="aspect-[1/1.18] w-full overflow-hidden rounded-[1px] bg-neutral-200">
            <img
              src={image}
              alt={t.banner.profileAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={252}
              height={297}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
