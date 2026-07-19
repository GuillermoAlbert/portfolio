"use client";
import { useEffect, useRef } from "react";

// The hero's typewriter, miniaturized for the 404: "404" types itself out and
// the cursor keeps blinking — a prompt waiting for input fits a page that
// leads nowhere. Unlike the hero there's no exit choreography on purpose.
export default function NotFoundTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h1 = ref.current;
    if (!h1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const saved = h1.innerHTML;
    const timers: ReturnType<typeof setTimeout>[] = [];

    h1.innerHTML = "";
    const chars = Array.from("404").map((ch) => {
      const span = document.createElement("span");
      span.textContent = ch;
      span.style.opacity = "0";
      h1.appendChild(span);
      return span;
    });

    const cursor = document.createElement("span");
    cursor.className = "tw-cursor";
    cursor.textContent = "_";
    const setTyping = (typing: boolean) =>
      cursor.classList.toggle("tw-cursor--typing", typing);
    chars[0].before(cursor);

    const step = (i: number) => {
      chars[i].style.opacity = "1";
      chars[i].after(cursor);
      if (i + 1 >= chars.length) {
        setTyping(false); // idle prompt: keep blinking, no fade
        return;
      }
      timers.push(setTimeout(() => step(i + 1), 90 + Math.random() * 120));
    };

    // Same "sit down first" beat as the hero before the first key lands.
    timers.push(setTimeout(() => { setTyping(true); step(0); }, 260 + Math.random() * 240));

    return () => {
      timers.forEach(clearTimeout);
      h1.innerHTML = saved;
    };
  }, []);

  return (
    <h1 ref={ref} aria-label="404" style={{ fontSize: "3.5rem", margin: 0, lineHeight: 1 }}>
      404
    </h1>
  );
}
