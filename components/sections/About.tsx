"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 1000, suffix: "+", label: "Vehicles" },
  { value: 100, suffix: "%", label: "Family-Run" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 lg:py-[120px]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-elevated border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=1200&q=80&auto=format&fit=crop"
                alt="Inside the Deluxe Auto Werks workshop"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg/80 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="label">Our Story</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="display mt-4"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Old-school craft. <br />
                <span className="text-accent">Modern equipment.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-text-secondary leading-relaxed">
                <p>
                  Deluxe Auto Werks is a family-run body shop in West Chicago,
                  Illinois. Scott and the team built this place around a simple
                  idea: do the job the right way the first time, every time —
                  whether it&apos;s a fender bender, a full repaint, or a
                  ground-up restoration.
                </p>
                <p>
                  We treat every vehicle that rolls through the bay like it&apos;s
                  ours. Modern computerized frame measurement, factory-spec
                  refinishing, and the kind of attention to detail that only
                  comes from people who actually love cars. Custom and
                  restoration work is where we shine — but we bring the same
                  pride to a daily driver.
                </p>
                <p>
                  Local, honest, and accountable. When you pick your car up, it
                  leaves better than it came in.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-border">
            {stats.map((s, i) => (
              <StatBlock key={s.label} stat={s} index={i} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StatBlock({ stat, index }: { stat: Stat; index: number }) {
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
      className={`p-8 sm:p-10 ${
        index > 0 ? "sm:border-l border-t sm:border-t-0 border-border" : ""
      }`}
    >
      <motion.span
        className="display text-text-primary block"
        style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
      >
        {display}
        <span className="text-accent">{stat.suffix}</span>
      </motion.span>
      <span className="mt-2 block label !text-text-secondary">
        {stat.label}
      </span>
    </div>
  );
}
