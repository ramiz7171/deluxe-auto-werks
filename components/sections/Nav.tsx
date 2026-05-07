"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-border/60"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between py-5">
          <a
            href="#top"
            aria-label="Deluxe Auto Werks home"
            className="display text-text-primary leading-[0.85]"
          >
            <span className="block text-lg sm:text-xl">DELUXE</span>
            <span className="block text-lg sm:text-xl text-accent">
              AUTO WERKS
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-10"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary underline-grow"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="primary" size="md">
                Get a Quote
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-text-primary"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-bg md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="display leading-[0.85]">
                <span className="block text-lg">DELUXE</span>
                <span className="block text-lg text-accent">AUTO WERKS</span>
              </span>
              <button
                type="button"
                className="p-2 -mr-2 text-text-primary"
                aria-label="Close menu"
                onClick={close}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex flex-col gap-2 px-6 py-12"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="display text-5xl py-3 hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={close}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.07, duration: 0.4 }}
                className="mt-8"
              >
                <Button variant="primary" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
