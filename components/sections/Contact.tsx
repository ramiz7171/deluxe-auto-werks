"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { useLang } from "@/components/LangProvider";

const ADDRESS = "319 Wilson Ave, West Chicago, IL 60185";
const PHONE_DISPLAY = "(630) 664-2793";
const PHONE_HREF = "tel:+16306642793";

const MAP_EMBED =
  "https://www.google.com/maps?q=319+Wilson+Ave,+West+Chicago,+IL+60185&output=embed";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative py-12 sm:py-32 lg:py-[120px]">
      <Container>
        <Reveal>
          <p className="label">{t.contact.label}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="display mt-4 max-w-3xl break-words"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {t.contact.headingA}{" "}
            <span className="text-accent">{t.contact.headingB}</span>
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <ContactInfo />
          </Reveal>

          <Reveal delay={0.1}>
            <a href={PHONE_HREF} className="block">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                <Phone className="h-5 w-5" strokeWidth={2} />
                {t.contact.callCta} {PHONE_DISPLAY}
              </Button>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 sm:mt-12 lg:mt-16 aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7] w-full overflow-hidden border border-border bg-elevated">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.contact.mapTitle}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactInfo() {
  const { t } = useLang();
  return (
    <div className="space-y-7 sm:space-y-8">
      <InfoRow
        icon={<MapPin className="h-5 w-5" strokeWidth={1.5} />}
        label={t.contact.visit}
      >
        <a
          href={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent underline-grow break-words"
        >
          {ADDRESS}
        </a>
      </InfoRow>
      <InfoRow
        icon={<Phone className="h-5 w-5" strokeWidth={1.5} />}
        label={t.contact.call}
      >
        <a href={PHONE_HREF} className="hover:text-accent underline-grow">
          {PHONE_DISPLAY}
        </a>
      </InfoRow>
      <InfoRow
        icon={<Clock className="h-5 w-5" strokeWidth={1.5} />}
        label={t.contact.hours}
      >
        <span className="block">{t.contact.hoursWeekday}</span>
        <span className="block text-text-secondary">
          {t.contact.hoursWeekend}
        </span>
      </InfoRow>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 sm:gap-5">
      <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 border border-border text-accent">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="label !text-text-secondary mb-2">{label}</p>
        <div className="text-text-primary text-base sm:text-lg">{children}</div>
      </div>
    </div>
  );
}
