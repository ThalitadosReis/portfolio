import React from "react";

export default function ContactButton({
  icon,
  label,
  url,
  onClick,
  bgColor,
  textColor,
  iconSize,
  ariaLabel,
  className,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.location.href = url; 
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-2 border-2 border-neutral-light rounded-full ${bgColor} ${textColor} hover-underline ${className}`}
      ariaLabel={ariaLabel}
    >
      {icon && React.cloneElement(icon, { size: iconSize })}
      {label}
    </button>
  );
}
