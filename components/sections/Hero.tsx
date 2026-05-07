"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useLang } from "@/components/LangProvider";

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const lines = [
    { text: t.hero.line1, accent: false },
    { text: t.hero.line2, accent: true },
    { text: t.hero.line3, accent: false },
  ];

  return (
    <section
      ref={ref}
      id="top"
      className="relative sm:min-h-[100svh] w-full overflow-hidden flex items-start sm:items-end pb-12 sm:pb-32 pt-24 sm:pt-32"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[40%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605152276897-4f618f831968?w=2400&q=80&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg" />
        <div className="absolute inset-0 bg-bg/40" />
      </motion.div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label mb-6"
        >
          {t.hero.kicker}
        </motion.div>

        <h1
          className="display text-text-primary break-words"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
          }}
        >
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block ${line.accent ? "text-accent" : ""}`}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <a href="tel:+16306642793">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </Button>
          </a>
          <a href="#work">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Button>
          </a>
        </motion.div>
      </Container>

      <motion.div
        aria-hidden
        style={{ opacity }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
