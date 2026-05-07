import { Facebook, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a
              href="#top"
              className="display leading-[0.85] inline-block"
              aria-label="Deluxe Auto Werks"
            >
              <span className="block text-2xl">DELUXE</span>
              <span className="block text-2xl text-accent">AUTO WERKS</span>
            </a>
            <p className="mt-5 max-w-xs text-text-secondary text-sm leading-relaxed">
              Family-run auto body shop in West Chicago. Collision repair,
              custom paint, and restoration done right.
            </p>
          </div>

          <div>
            <p className="label !text-text-secondary mb-5">Explore</p>
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
            <p className="label !text-text-secondary mb-5">Visit</p>
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

        <div className="mt-16 pt-8 border-t border-border flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs text-text-secondary">
            &copy; 2026 Deluxe Auto Werks. All rights reserved.
          </p>
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
