"use client";

import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { useLang } from "@/components/LangProvider";

interface Review {
  name: string;
  body: string;
}

const reviews: Review[] = [
  {
    name: "Randal Birkey",
    body: "Based on a recommendation from my auto mechanic, I contracted Deluxe Auto Werks to repaint my custom 1993 Chevy Indy Pace Truck. Scott and his team were pleasant to work with, thorough in doing the job right, and took pride in their work.",
  },
  {
    name: "Jessica",
    body: "Very satisfied with the service at Deluxe Auto Werks. The team was professional, friendly, and kept me updated the whole time.",
  },
  {
    name: "Ramirez",
    body: "Excellent work and great customer service from Deluxe Auto Werks. Everything was handled smoothly and the repair quality was amazing.",
  },
  {
    name: "John",
    body: "Great experience at Deluxe Auto Werks. Fast service, honest communication, and my car came out looking perfect. Highly recommend.",
  },
  {
    name: "Keven",
    body: "Fantastic experience with Deluxe Auto Werks. The team was professional, honest, and did an amazing job on my car. Everything went smoothly from start to finish, and I'm very satisfied with the quality of the repair. Special thanks to Jose for all the help and great communication. Highly recommend them.",
  },
  {
    name: "Jerrod",
    body: "Great place to bring your car.",
  },
];

export default function Reviews() {
  const { t } = useLang();

  return (
    <section
      id="reviews"
      className="relative py-12 sm:py-32 lg:py-[120px] bg-surface/50"
    >
      <Container>
        <Reveal>
          <p className="label">{t.reviews.label}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl break-words"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {t.reviews.headingA}{" "}
            <span className="text-accent">{t.reviews.headingB}</span>
          </h2>
        </Reveal>

        <StaggerContainer className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r) => (
            <StaggerItem key={r.name} className="h-full">
              <article className="relative h-full bg-surface border border-border p-6 sm:p-8 lg:p-10 flex flex-col">
                <Quote
                  aria-hidden
                  className="h-8 w-8 text-accent/30 mb-5 sm:mb-6"
                  strokeWidth={1.5}
                />
                <div
                  className="flex gap-1 mb-5"
                  aria-label={t.reviews.starsAria}
                >
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-text-primary leading-relaxed flex-1">
                  &ldquo;{r.body}&rdquo;
                </p>
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border">
                  <p className="font-semibold text-text-primary">{r.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-secondary">
                    {t.reviews.role}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
