"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Clock, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { useLang } from "@/components/LangProvider";

const ADDRESS = "319 Wilson Ave, West Chicago, IL 60185";
const PHONE_DISPLAY = "(630) 664-2793";
const PHONE_HREF = "tel:+16306642793";

const MAP_EMBED =
  "https://www.google.com/maps?q=319+Wilson+Ave,+West+Chicago,+IL+60185&output=embed";

interface FormState {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  description: string;
}

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  description: "",
};

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((errs) => ({ ...errs, [k]: undefined }));
  };

  const validate = (f: FormState) => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!f.name.trim()) errs.name = t.contact.errors.required;
    if (!f.phone.trim()) errs.phone = t.contact.errors.required;
    else if (!/[\d().\-+\s]{7,}/.test(f.phone))
      errs.phone = t.contact.errors.phone;
    if (!f.email.trim()) errs.email = t.contact.errors.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      errs.email = t.contact.errors.email;
    if (!f.vehicle.trim()) errs.vehicle = t.contact.errors.required;
    if (!f.description.trim()) errs.description = t.contact.errors.required;
    return errs;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 lg:py-[120px]">
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

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <ContactInfo />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-surface border border-border p-5 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessState key="success" />
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="space-y-5"
                    aria-label={t.contact.formAria}
                  >
                    <Field
                      id="name"
                      label={t.contact.fields.name}
                      value={form.name}
                      onChange={update("name")}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field
                        id="phone"
                        label={t.contact.fields.phone}
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        error={errors.phone}
                        autoComplete="tel"
                      />
                      <Field
                        id="email"
                        label={t.contact.fields.email}
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        error={errors.email}
                        autoComplete="email"
                      />
                    </div>
                    <Field
                      id="vehicle"
                      label={t.contact.fields.vehicle}
                      value={form.vehicle}
                      onChange={update("vehicle")}
                      error={errors.vehicle}
                      placeholder="2018 Honda Accord"
                    />
                    <Field
                      id="description"
                      label={t.contact.fields.description}
                      multiline
                      value={form.description}
                      onChange={update("description")}
                      error={errors.description}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      {t.contact.submit}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
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

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
  placeholder,
  autoComplete,
}: FieldProps) {
  const baseClass =
    "block w-full bg-bg border px-4 py-3 text-text-primary placeholder:text-text-secondary/60 focus:border-accent focus:outline-none transition-colors";
  const borderClass = error ? "border-accent" : "border-border";

  return (
    <div>
      <label htmlFor={id} className="block label !text-text-secondary mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          rows={4}
          placeholder={placeholder}
          className={`${baseClass} ${borderClass} resize-y min-h-[120px]`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`${baseClass} ${borderClass}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState() {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-12 text-center"
    >
      <div className="mx-auto flex items-center justify-center h-16 w-16 border border-accent text-accent">
        <Check className="h-7 w-7" strokeWidth={2} />
      </div>
      <h3 className="display mt-6 text-3xl sm:text-4xl">
        {t.contact.successHeading}
      </h3>
      <p className="mt-3 text-text-secondary">{t.contact.successBody}</p>
    </motion.div>
  );
}
