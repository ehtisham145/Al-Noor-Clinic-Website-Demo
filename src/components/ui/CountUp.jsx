import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

// Counts from 0 to `value` once it scrolls into view
export default function CountUp({ value, decimals = 0, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration, ease: 'easeOut', onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
