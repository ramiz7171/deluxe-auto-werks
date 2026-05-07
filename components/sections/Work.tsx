"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface WorkItem {
  src: string;
  alt: string;
  caption: string;
  span: string;
}

const items: WorkItem[] = [
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1400&q=80&auto=format&fit=crop",
    alt: "Glossy red sports car after custom repaint",
    caption: "1993 Chevy Indy Pace Truck — Full Repaint",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000&q=80&auto=format&fit=crop",
    alt: "Classic muscle car restoration",
    caption: "1969 Camaro — Frame-Off Restoration",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&q=80&auto=format&fit=crop",
    alt: "Polished black sedan",
    caption: "European Sedan — Ceramic Coat & Polish",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80&auto=format&fit=crop",
    alt: "Vintage car in workshop",
    caption: "Vintage Coupe — Quarter Panel Repair",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&q=80&auto=format&fit=crop",
    alt: "Modern SUV after collision repair",
    caption: "Modern SUV — Front-End Collision",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1000&q=80&auto=format&fit=crop",
    alt: "Classic restored car",
    caption: "Classic Roadster — Custom Pearl Paint",
    span: "",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-20 sm:py-32 lg:py-[120px] bg-surface/50"
    >
      <Container>
        <Reveal>
          <p className="label">Recent Work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Every job, signed off <span className="text-accent">personally.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[260px]">
          {items.map((item, i) => (
            <WorkCard key={item.src} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative group overflow-hidden bg-elevated border border-border ${item.span}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
          Project
        </p>
        <p className="text-text-primary font-medium">{item.caption}</p>
      </figcaption>
    </motion.figure>
  );
}
