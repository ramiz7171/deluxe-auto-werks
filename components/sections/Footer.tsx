"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { useLang } from "@/components/LangProvider";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-border">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <a
              href="#top"
              className="inline-flex items-center"
              aria-label="Deluxe Auto Werks"
            >
              <Image
                src="/logo.png"
                alt="Deluxe Auto Werks"
                width={200}
                height={200}
                className="h-28 w-28 sm:h-36 sm:w-36 object-contain"
              />
            </a>
            <p className="mt-5 max-w-xs text-text-secondary text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="label !text-text-secondary mb-5">
              {t.footer.explore}
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-text-primary hover:text-accent underline-grow"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label !text-text-secondary mb-5">{t.footer.visit}</p>
            <address className="not-italic text-text-primary leading-relaxed">
              319 Wilson Ave
              <br />
              West Chicago, IL 60185
            </address>
            <a
              href="tel:+16306642793"
              className="mt-4 inline-block text-text-primary hover:text-accent underline-grow"
            >
              (630) 664-2793
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs text-text-secondary">{t.footer.copyright}</p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center justify-center h-9 w-9 border border-border hover:border-accent hover:text-accent text-text-secondary transition-colors"
            >
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center h-9 w-9 border border-border hover:border-accent hover:text-accent text-text-secondary transition-colors"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
