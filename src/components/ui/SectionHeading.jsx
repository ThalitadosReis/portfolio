import Reveal from "../Reveal.jsx";

export default function SectionHeading({
  label,
  title,
  className = "",
  titleClassName = "",
}) {
  return (
    <Reveal className={className}>
      <p className="mb-2.5 text-[10px] font-medium text-accent tracking-[0.2em] uppercase">
        {label}
      </p>
      <h2
        className={`font-serif text-2xl text-ink leading-none ${titleClassName}`.trim()}
      >
        {title}
      </h2>
    </Reveal>
  );
}
