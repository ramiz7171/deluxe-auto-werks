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
import Reveal, { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    title: "Collision Repair",
    desc: "Insurance-approved structural and panel repair.",
  },
  {
    icon: Palette,
    title: "Custom Paint",
    desc: "Color matching, full repaints, custom finishes.",
  },
  {
    icon: CircleDot,
    title: "Dent Removal",
    desc: "Paintless dent repair for minor damage.",
  },
  {
    icon: Ruler,
    title: "Frame Straightening",
    desc: "Computer-measured frame correction.",
  },
  {
    icon: Car,
    title: "Restoration",
    desc: "Classic and custom vehicle restoration.",
  },
  {
    icon: Sparkles,
    title: "Detailing & Polish",
    desc: "Wheel refinishing, polish, ceramic prep.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 lg:py-[120px]"
    >
      <Container>
        <Reveal>
          <p className="label">What We Do</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Built to factory spec. <br className="hidden sm:block" />
            <span className="text-text-secondary">Finished better.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc }: Service) {
  return (
    <article className="group relative h-full bg-surface p-8 sm:p-10 transition-all duration-300 hover:bg-elevated hover:shadow-[0_0_0_1px_#DC2626] hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 border border-border group-hover:border-accent group-hover:text-accent transition-colors">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="mt-8 display text-3xl sm:text-4xl text-text-primary">
        {title}
      </h3>
      <p className="mt-3 text-text-secondary leading-relaxed">{desc}</p>
    </article>
  );
}
