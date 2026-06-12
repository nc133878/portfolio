import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook backed by IntersectionObserver.
 * Returns a ref to attach to the element and a `visible` flag that
 * flips true once the element scrolls into view.
 *
 * @param {Object}  [opts]
 * @param {number}  [opts.threshold=0.15] portion visible before triggering
 * @param {string}  [opts.rootMargin='0px 0px -10% 0px'] viewport inset
 * @param {boolean} [opts.once=true] stop observing after first reveal
 */
export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}
