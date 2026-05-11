import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  once = true,
  amount = 0.2,
  scaleX = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setIsVisible(true);
      return undefined;
    }

    const node = ref.current;

    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: amount },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [amount, once, prefersReduced]);

  const getTransform = () => {
    if (prefersReduced) return "none";
    if (scaleX) return isVisible ? "scaleX(1)" : "scaleX(0)";
    return `translate3d(0, ${isVisible ? 0 : y}px, 0)`;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionDelay: prefersReduced ? "0s" : `${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transformOrigin: scaleX ? "left center" : undefined,
        transition: prefersReduced
          ? "none"
          : "opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
