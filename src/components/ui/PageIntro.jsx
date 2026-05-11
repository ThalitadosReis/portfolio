import Reveal from "../Reveal.jsx";

export default function PageIntro({ label, title }) {
  return (
    <section className="bg-stone-50 py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="mb-3 text-[10px] font-medium tracking-[0.2em] uppercase text-accent">
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.025em] text-ink">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <div className="h-px w-12 bg-accent/70" />
        </Reveal>
      </div>
    </section>
  );
}
