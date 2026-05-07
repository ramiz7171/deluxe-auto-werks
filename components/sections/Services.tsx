"use client";

import {
  Wrench,
  Palette,
  CircleDot,
  Ruler,
  Car,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/components/LangProvider";

const icons: LucideIcon[] = [Wrench, Palette, CircleDot, Ruler, Car, Sparkles];

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative py-12 sm:py-32 lg:py-[120px]">
      <Container>
        <Reveal>
          <p className="label">{t.services.label}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl break-words"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {t.services.headingA} <br className="hidden sm:block" />
            <span className="text-text-secondary">{t.services.headingB}</span>
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} as="article" delay={i * 0.06} className="h-full">
                <div className="group relative h-full bg-surface p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-elevated hover:shadow-[0_0_0_1px_#DC2626] hover:-translate-y-1">
                  <div className="flex items-center justify-center h-12 w-12 border border-border group-hover:border-accent group-hover:text-accent transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 sm:mt-8 display text-2xl sm:text-3xl lg:text-4xl text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-text-secondary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
