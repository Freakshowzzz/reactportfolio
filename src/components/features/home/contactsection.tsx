import { useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

const SOCIAL_LINKS = [
  {
    label: "Email",
    value: "adonisbillyregodon@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adonisbillyregodon@gmail.com",
  },
  { label: "GitHub", value: "Freakshowzzz", href: "https://github.com/Freakshowzzz" },
  { label: "LinkedIn", value: "freakshowzzz", href: "https://www.linkedin.com/in/freakshowzzz/" },
];

type Status = "idle" | "submitting" | "success";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    // Placeholder submission — no backend wired up yet.
    // Swap this block for a real fetch() call once you have
    // somewhere to send the message (Formspree, your own API, etc).
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 600);
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
          Contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
          Have a project in mind?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Quick links */}
          <div className="space-y-4">
            <p className="text-sm text-slate-400">
              Prefer to reach out directly? Here's where to find me.
            </p>
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-900/30 px-4 py-3 transition-colors hover:border-sky-400/40 hover:bg-slate-900/50"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {link.label}
                  </span>
                  <span className="text-sm text-slate-300">{link.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-700/50 bg-slate-900/30 px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-700/50 bg-slate-900/30 px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-400/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-700/50 bg-slate-900/30 px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-sky-400/50"
                placeholder="What are you looking to build?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={cn(
                "inline-flex items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-colors",
                "hover:border-sky-400/60 hover:bg-sky-400/20",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-400">
                Message sent — I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}