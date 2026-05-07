"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { useLang } from "@/components/LangProvider";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1400&q=80&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&q=80&auto=format&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&q=80&auto=format&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80&auto=format&fit=crop",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&q=80&auto=format&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&q=80&auto=format&fit=crop",
    span: "",
  },
];

export default function Work() {
  const { t } = useLang();

  return (
    <section
      id="work"
      className="relative py-20 sm:py-32 lg:py-[120px] bg-surface/50"
    >
      <Container>
        <Reveal>
          <p className="label">{t.work.label}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl break-words"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {t.work.headingA}{" "}
            <span className="text-accent">{t.work.headingB}</span>
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:auto-rows-[260px]">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative group overflow-hidden bg-elevated border border-border aspect-[4/3] md:aspect-auto ${p.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={t.work.alts[i]}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent mb-1.5 sm:mb-2">
                  {t.work.project}
                </p>
                <p className="text-text-primary font-medium text-sm sm:text-base">
                  {t.work.items[i]}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
