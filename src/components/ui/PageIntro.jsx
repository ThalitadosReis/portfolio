import Reveal from "../Reveal.jsx";

export default function PageIntro({ label, title }) {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="mb-3 text-[0.7rem] leading-4 tracking-[0.15em] uppercase text-neutral-500">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-tight">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="w-8 h-px bg-neutral-900 mt-5 origin-left" />
        </Reveal>
      </div>
    </section>
  );
}
