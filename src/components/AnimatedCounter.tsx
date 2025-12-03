import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ from, to, duration = 2, delay = 0, suffix = "", decimals = 0 }: AnimatedCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals);
    }
    if (latest >= 1000) {
      return (latest / 1000).toFixed(1) + "K";
    }
    return Math.round(latest).toString();
  });
  const [displayValue, setDisplayValue] = useState(from.toString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      
      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [count, to, duration, delay, rounded]);

  return (
    <motion.span className="font-bold tabular-nums">
      {displayValue}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
