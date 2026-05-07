"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/components/LangProvider";

interface Stat {
  value: number;
  suffix: string;
  labelKey: "years" | "vehicles" | "family";
}

const stats: Stat[] = [
  { value: 15, suffix: "+", labelKey: "years" },
  { value: 1000, suffix: "+", labelKey: "vehicles" },
  { value: 100, suffix: "%", labelKey: "family" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-20 sm:py-32 lg:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-elevated border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=1200&q=80&auto=format&fit=crop"
                alt={t.about.imgAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg/80 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="label">{t.about.label}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="display mt-4 break-words"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {t.about.headingA} <br />
                <span className="text-accent">{t.about.headingB}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-text-secondary leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-border">
            {stats.map((s, i) => (
              <StatBlock
                key={s.labelKey}
                stat={s}
                index={i}
                label={t.about.stats[s.labelKey]}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StatBlock({
  stat,
  index,
  label,
}: {
  stat: Stat;
  index: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, stat.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [inView, mv, stat.value]);

  return (
    <div
      ref={ref}
      className={`p-6 sm:p-8 lg:p-10 ${
        index > 0 ? "sm:border-l border-t sm:border-t-0 border-border" : ""
      }`}
    >
      <motion.span
        className="display text-text-primary block"
        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
      >
        {display}
        <span className="text-accent">{stat.suffix}</span>
      </motion.span>
      <span className="mt-2 block label !text-text-secondary">{label}</span>
    </div>
  );
}
