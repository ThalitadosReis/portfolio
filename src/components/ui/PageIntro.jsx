import Reveal from "../Reveal.jsx";

export default function PageIntro({ label, title }) {
  return (
    <section className="bg-neutral-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="mb-3 text-[0.7rem] leading-4 tracking-[0.15em] uppercase text-accent/75">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none tracking-tight text-ink">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-5 h-px w-8 origin-left bg-accent" />
        </Reveal>
      </div>
    </section>
  );
}
