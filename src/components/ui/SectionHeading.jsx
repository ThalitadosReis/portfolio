import Reveal from "../Reveal.jsx";

export default function SectionHeading({
  label,
  title,
  className = "",
  titleClassName = "",
}) {
  return (
    <Reveal className={className}>
      <p className="mb-2 text-[0.7rem] font-mono text-accent leading-4 tracking-[0.1em] uppercase">
        {label}
      </p>
      <h2
        className={`font-display text-2xl text-ink leading-none tracking-tight ${titleClassName}`.trim()}
      >
        {title}
      </h2>
    </Reveal>
  );
}
