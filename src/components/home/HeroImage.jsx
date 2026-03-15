import Reveal from "../Reveal.jsx";
import { useLang } from "../../i18n/LangContext.jsx";

const image =
  "https://res.cloudinary.com/douen1dwv/image/upload/v1771245425/default/profile-picture.jpg";

export default function HeroImage({ className = "", delay = 0.3 }) {
  const { t } = useLang();

  return (
    <Reveal className={className} delay={delay} y={0}>
      <div className="mx-auto w-[17.5rem] rotate-[1.5deg] rounded-[2px] border border-neutral-200 bg-white p-3 pb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="aspect-[1/1.18] w-full overflow-hidden rounded-[1px] bg-neutral-200">
          <img
            src={image}
            alt={t.banner.profileAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}
