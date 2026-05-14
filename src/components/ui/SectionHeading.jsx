import Reveal from "../Reveal.jsx";

export default function SectionHeading({
  label,
  title,
  aside,
  className = "",
  titleClassName = "",
}) {
  return (
    <Reveal
      className={`grid grid-cols-[1fr_auto] md:grid-cols-12 gap-x-6 border-t border-rule-strong pt-4 mb-14 md:mb-20 ${className}`.trim()}
    >
      <div className="md:col-span-2 font-mono text-[11px] tracking-[0.06em] text-mute self-center">
        {label}
      </div>

      {aside && (
        <div className="text-right md:col-span-2 md:col-start-11 font-mono text-[11px] text-mute self-center">
          {aside}
        </div>
      )}

      {title && (
        <div
          className={`col-span-full md:col-span-7 mt-4 md:mt-0 m-0 font-serif font-normal text-[clamp(48px,6vw,96px)] leading-[0.98] tracking-[-0.025em] ${titleClassName}`.trim()}
        >
          {title}
        </div>
      )}
    </Reveal>
  );
}
