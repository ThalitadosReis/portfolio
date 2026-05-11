export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[9px] font-medium tracking-[0.14em] uppercase text-stone-500 transition-colors duration-200 hover:border-accent/40 hover:text-accent/80 hover:bg-accent/5 ${className}`.trim()}
    >
      {children}
    </span>
  );
}
