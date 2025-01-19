import React from "react";

export default function ContactButton({
  icon,
  label,
  url,
  bgColor,
  textColor,
  iconSize,
  ariaLabel,
}) {
  return (
    <button
      onClick={() => (window.location.href = url)}
      className={`flex items-center gap-2 px-6 py-3 border-2 border-neutral-light rounded-full ${bgColor} ${textColor} hover-underline`}
      aria-label={ariaLabel}
    >
      {icon && React.cloneElement(icon, { size: iconSize })}
      {label}
    </button>
  );
}
