export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border border-neutral-300 bg-neutral-100 px-2.5 py-0.5 text-[0.65rem] font-medium leading-4 tracking-widest uppercase text-neutral-500 ${className}`.trim()}
    >
      {children}
    </span>
  );
}
