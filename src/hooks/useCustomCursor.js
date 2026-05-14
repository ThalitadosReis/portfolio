import { useEffect } from "react";

// Custom cursor — blend-mode circle that follows the pointer with easing and
// grows when hovering anchors / buttons. Skipped on touch devices and respects
// prefers-reduced-motion (snaps to the pointer instead of easing).
export function useCustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const el = document.createElement("div");
    el.id = "__cursor";
    Object.assign(el.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "#1a1a1a",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
      mixBlendMode: "difference",
      transition: "width .18s ease, height .18s ease, opacity .2s",
      opacity: "0",
    });
    document.body.appendChild(el);
    document.body.classList.add("cursor-on");

    let tx = 0,
      ty = 0,
      x = 0,
      y = 0,
      raf = 0,
      started = false;

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      if (reduced) {
        x = tx;
        y = ty;
      } else {
        x += (tx - x) * 0.22;
        y += (ty - y) * 0.22;
      }
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!started) {
        started = true;
        x = tx;
        y = ty;
        el.style.opacity = "1";
        raf = requestAnimationFrame(tick);
      }
    };

    const onOver = (e) => {
      const t = e.target.closest("a, button, [data-hover]");
      el.style.width = t ? "64px" : "28px";
      el.style.height = t ? "64px" : "28px";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };
    const onEnter = () => {
      if (started) el.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.classList.remove("cursor-on");
      el.remove();
    };
  }, []);
}
