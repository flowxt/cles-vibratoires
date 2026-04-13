"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

type MotionProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({ children, delay = 0, duration = 0.6, className, ...props }: MotionProps) {
  const mounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const skip = !mounted || prefersReduced;

  return (
    <motion.div
      initial={skip ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0, duration = 0.6, className, ...props }: MotionProps) {
  const mounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const skip = !mounted || prefersReduced;

  return (
    <motion.div
      initial={skip ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className, ...props }: MotionProps) {
  const mounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const skip = !mounted || prefersReduced;

  return (
    <motion.div
      initial={skip ? false : { opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Stagger({ children, staggerDelay = 0.08, className, ...props }: StaggerProps) {
  const mounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const skip = !mounted || prefersReduced;

  return (
    <motion.div
      initial={skip ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: Omit<MotionProps, "delay" | "duration">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={`h-full ${className ?? ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
