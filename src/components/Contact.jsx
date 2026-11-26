import { ArrowUpRight, Code2, Mail, MapPin, Phone, Send } from "lucide-react";

const EMAIL = "rafeekahamed046@gmail.com";
const PHONE = "+917540074392";
const EMAIL_SUBJECT = "DevOps / Azure Cloud Opportunity";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafeek-ahamed-devops",
    mark: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/RafeekAhamed",
    icon: Code2,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/rafeek-ahamed-m/",
    mark: "LC",
  },
];

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || EMAIL_SUBJECT).trim();
    const message = String(formData.get("message") || "").trim();

    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${senderEmail}`,
      phone ? `Phone: ${phone}` : "",
      "",
      message,
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container relative z-10">
        <header className="mb-10 text-center md:mb-14">
          <p className="micro-label micro-label-cyan">08 / CONTACT</p>
          <h2
            id="contact-heading"
            className="mt-3 text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl md:text-8xl"
          >
            Contact <span className="cyan-text">Us</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-lg">
            Have an opportunity or a question? Send me a message.
          </p>
        </header>

        <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] border border-cyan-400/25 bg-[#080c0e] shadow-[0_24px_90px_rgba(0,0,0,0.35)] lg:grid-cols-[0.82fr_1.18fr]">
          {/* Subtle cyan decoration; the portfolio palette remains unchanged. */}
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.10] blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-cyan-400/[0.10] blur-3xl" />

          <aside className="relative flex flex-col justify-between border-b border-white/10 bg-white/[0.025] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <p className="micro-label micro-label-cyan">CONTACT INFORMATION</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                Let&apos;s talk about what&apos;s next.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
                I&apos;m open to DevOps, Azure Cloud and Cloud Operations opportunities. I&apos;d be glad to connect.
              </p>

              <div className="mt-9 space-y-6">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`}
                  className="group flex items-center gap-3 text-slate-200 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span className="break-all text-sm font-medium">{EMAIL}</span>
                </a>

                <div className="flex items-start gap-3 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <span className="pt-1 text-sm leading-6">
                    Tirunelveli, Tamil Nadu, India
                    <span className="block text-slate-500">Open to relocation</span>
                  </span>
                </div>

                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-sm font-medium text-slate-200 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  +91 75400 74392
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Connect professionally</p>
              <nav className="mt-4 flex gap-3" aria-label="Social profiles">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${social.label} profile in a new tab`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      {Icon ? <Icon size={17} aria-hidden="true" /> : <span className="text-xs font-bold" aria-hidden="true">{social.mark}</span>}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Immediate joiner · Open to work
              </div>
            </div>
          </aside>

          <div className="relative p-7 sm:p-9 lg:p-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="micro-label micro-label-cyan">SEND A MESSAGE</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                  Write to me
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                <Send size={17} aria-hidden="true" />
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">First name</span>
                  <input required name="firstName" autoComplete="given-name" placeholder="Your first name" className="contact-field" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">Last name</span>
                  <input name="lastName" autoComplete="family-name" placeholder="Your last name" className="contact-field" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">Email address</span>
                  <input required type="email" name="email" autoComplete="email" placeholder="name@company.com" className="contact-field" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-300">Phone number</span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" className="contact-field" />
                </label>
              </div>

              <fieldset>
                <legend className="mb-3 text-xs font-medium text-slate-300">Select a subject</legend>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-400 sm:grid-cols-4">
                  {[
                    "Job opportunity",
                    "Technical discussion",
                    "Networking",
                    "Other inquiry",
                  ].map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="subject"
                        value={option === "Job opportunity" ? EMAIL_SUBJECT : option}
                        defaultChecked={option === "Job opportunity"}
                        className="h-3.5 w-3.5 accent-cyan-400"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-xs font-medium text-slate-300">Message</span>
                <textarea required name="message" rows="4" placeholder="Write your message..." className="contact-field min-h-32 resize-y" />
              </label>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-slate-500">
                  Your message will open in your default email application for sending.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-400 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.13em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Send message
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}