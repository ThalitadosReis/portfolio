import { Link } from "react-router-dom";

const variants = {
  default: "bg-neutral-800 text-neutral-100 hover:bg-neutral-600",
  outline:
    "border border-neutral-300 text-neutral-700 hover:border-neutral-600 hover:bg-neutral-600/5 hover:text-neutral-600",
  inline: "px-0 py-0 text-neutral-600 hover:text-neutral-800",
  square:
    "border border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-800",
};

const sizes = {
  default: "gap-2.5 px-6 py-3 text-xs font-medium tracking-widest uppercase",
  inline: "gap-1.5 text-xs",
  micro: "gap-1.5 text-[0.65rem] leading-4 tracking-[0.1em] uppercase",
  square: "h-8 w-8 justify-center",
};

export default function CtaLink({
  children,
  className = "",
  variant = "default",
  size = "default",
  to,
  href,
  onClick,
  target,
  rel,
  ...props
}) {
  const sharedClassName =
    `inline-flex items-center rounded-sm transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={sharedClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={sharedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClassName}
      {...props}
    >
      {children}
    </button>
  );
}
