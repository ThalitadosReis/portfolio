import { useLang } from "../../i18n/LangContext.jsx";

const image =
  "https://res.cloudinary.com/douen1dwv/image/upload/v1771245425/default/profile-picture.jpg";

export default function ProfilePhoto({ className = "" }) {
  const { t } = useLang();

  return (
    <div
      className={`aspect-3/4 border border-rule filter-[grayscale(0.08)_contrast(1.02)] overflow-hidden bg-paper ${className}`.trim()}
    >
      <img
        src={image}
        alt={t.banner.profileAlt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={252}
        height={335}
        className="h-full w-full object-cover object-[center_20%]"
      />
    </div>
  );
}
