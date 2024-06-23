"use client";

import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}


export function MotionDiv({
  style, className, children,
}: {
  style?:any,
  className?:string, 
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


export function MotionH1({
  className, children,
}: {
  className?:string, 
  children: React.ReactNode;
}) {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}
export function MotionH2({
  className, children,
}: {
  className?:string, 
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
export function MotionP({
  className, children,
}: {
  className?:string, 
  children: React.ReactNode;
}) {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
