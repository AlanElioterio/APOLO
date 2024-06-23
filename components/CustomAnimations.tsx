"use client";

import { motion } from "framer-motion";

export function MotionBenefit({
    className,
    style,
  children,
  
}: {
  className?: string;
  style?: any;
  children: React.ReactNode;
}) {
  return (
      <motion.div

      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
          className={className}
          style={style}
    >
      {children}
    </motion.div>
  );
}
