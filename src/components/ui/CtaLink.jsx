import { Link } from "react-router-dom";

const variants = {
  default: "bg-ink text-stone-100 hover:bg-accent hover:text-white",
  outline:
    "border border-stone-300 text-stone-500 hover:border-accent hover:bg-accent/8 hover:text-accent",
  inline: "px-0 py-0 text-stone-500 hover:text-accent",
  square:
    "border border-stone-200 text-stone-500 hover:border-accent/45 hover:bg-accent/8 hover:text-accent",
};

const sizes = {
  default: "px-7 py-3.5 text-[0.65rem] font-medium tracking-[0.14em] uppercase",
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
    `inline-flex items-center cursor-pointer transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`.trim();

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
