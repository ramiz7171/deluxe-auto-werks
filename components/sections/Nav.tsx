"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LangToggle from "@/components/ui/LangToggle";
import { useLang } from "@/components/LangProvider";
import { cn } from "@/lib/utils";

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.contact, href: "#contact" },
  ];

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
        <Container className="flex items-center justify-between gap-4 py-4 sm:py-5">
          <a
            href="#top"
            aria-label={t.nav.home}
            className="flex items-center text-text-primary shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Deluxe Auto Werks"
              width={200}
              height={200}
              priority
              className="h-16 w-16 sm:h-24 sm:w-24 lg:h-36 lg:w-36 object-contain"
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-widest text-text-secondary hover:text-text-primary underline-grow whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LangToggle />
            <a href="tel:+16306642793" className="hidden sm:block">
              <Button variant="primary" size="md">
                {t.nav.cta}
              </Button>
            </a>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-text-primary"
              aria-label={t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-bg lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-border">
              <span className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Deluxe Auto Werks"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
                <span className="display leading-[0.85]">
                  <span className="block text-base">DELUXE</span>
                  <span className="block text-base text-accent">AUTO WERKS</span>
                </span>
              </span>
              <div className="flex items-center gap-2">
                <LangToggle />
                <button
                  type="button"
                  className="p-2 -mr-2 text-text-primary"
                  aria-label={t.nav.closeMenu}
                  onClick={close}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <nav
              aria-label="Mobile primary"
              className="flex-1 flex flex-col gap-1 px-6 py-10 overflow-y-auto"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  className="display text-4xl sm:text-5xl py-3 hover:text-accent transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+16306642793"
                onClick={close}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.07, duration: 0.4 }}
                className="mt-8"
              >
                <Button variant="primary" size="lg" className="w-full">
                  {t.nav.cta}
                </Button>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
