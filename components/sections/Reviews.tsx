"use client";

import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

interface Review {
  name: string;
  role: string;
  body: string;
}

const reviews: (Review | null)[] = [
  {
    name: "Randal Birkey",
    role: "Local Guide",
    body: "Based on a recommendation from my auto mechanic, I contracted Deluxe Auto Werks to repaint my custom 1993 Chevy Indy Pace Truck. Scott and his team were pleasant to work with, thorough in doing the job right, and took pride in their work.",
  },
  {
    name: "Jerrod",
    role: "Local Guide",
    body: "Great place to bring your car.",
  },
  // TODO: add new review
  null,
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 sm:py-32 lg:py-[120px] bg-surface/50"
    >
      <Container>
        <Reveal>
          <p className="label">What Clients Say</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Don&apos;t take our word <span className="text-accent">for it.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) =>
            r ? (
              <StaggerItem key={r.name} className="h-full">
                <ReviewCard review={r} />
              </StaggerItem>
            ) : (
              <StaggerItem key={`placeholder-${i}`} className="h-full">
                <PlaceholderCard />
              </StaggerItem>
            )
          )}
        </StaggerContainer>
      </Container>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="relative h-full bg-surface border border-border p-8 sm:p-10 flex flex-col">
      <Quote
        aria-hidden
        className="h-8 w-8 text-accent/30 mb-6"
        strokeWidth={1.5}
      />
      <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-accent text-accent"
            aria-hidden
          />
        ))}
      </div>
      <p className="text-text-primary leading-relaxed flex-1">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-semibold text-text-primary">{review.name}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-text-secondary">
          {review.role}
        </p>
      </div>
    </article>
  );
}

function PlaceholderCard() {
  return (
    <article className="relative h-full border border-dashed border-border/60 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
      <div className="flex gap-1 mb-5 opacity-30">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-text-secondary" aria-hidden />
        ))}
      </div>
      <p className="text-text-secondary text-sm">More reviews coming soon</p>
    </article>
  );
}
