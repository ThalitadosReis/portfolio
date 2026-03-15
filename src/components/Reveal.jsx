import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, [amount, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionDelay: `${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: `translate3d(0, ${isVisible ? 0 : y}px, 0)`,
        transition:
          "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
