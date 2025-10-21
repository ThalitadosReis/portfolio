export default function SectionHeader({ step, title }) {
  return (
    <div className="flex flex-col items-end mb-8">
      <span className="absolute text-xs uppercase my-auto">{title}</span>
      <div className="flex items-center w-full gap-3">
        <div className="relative flex items-center justify-center w-10 h-10 transform rotate-45 border border-black/10 rounded-lg">
          <span className="transform -rotate-45 text-sm">{step}</span>
        </div>
        <div className="grow border-t border-black/10" />
      </div>
    </div>
  );
}
