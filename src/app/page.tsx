"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showTopButton, setShowTopButton] = useState(false);
  const stats = [
    { label: "Years Building", value: "5+" },
    { label: "Projects Shipped", value: "30+" },
    { label: "Avg. Lighthouse", value: "98" },
  ];

  const skills = [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "REST APIs",
    "Testing Library",
  ];

  const projects = [
    {
      title: "Atlas Dashboard",
      description:
        "A multi-tenant analytics suite with real-time insights, role-based access, and a precision-crafted UI.",
      tags: ["Next.js", "tRPC", "PostgreSQL"],
    },
    {
      title: "Lumen Commerce",
      description:
        "Headless storefront focused on speed and conversion with edge caching and dynamic merchandising.",
      tags: ["TypeScript", "Edge", "Stripe"],
    },
    {
      title: "News Portal",
      description:
        "High-performance news platform with editorial workflows, category-based feeds, and SEO-focused delivery.",
      tags: ["Next.js", "TypeScript", "SSR"],
    },
  ];

  const experience = [
    {
      role: "Independent Developer",
      period: "2024 - Present",
      summary:
        "Building personal projects and client-ready demos with a focus on performance, clarity, and modern UI.",
    },
    {
      role: "Project-Based Learning",
      period: "2022 - 2024",
      summary:
        "Completed hands-on builds across responsive UI, API integration, and deployment workflows.",
    },
    {
      role: "Frontend Practice",
      period: "2020 - 2022",
      summary:
        "Strengthened fundamentals in HTML, CSS, JavaScript, and TypeScript through iterative practice.",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 240);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const header = document.querySelector("header");
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const extraGap = 12;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - extraGap;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-display text-lg text-white/90">
            Md Mubassir Ahmed Siddique
          </span>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {[
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className="cursor-pointer bg-transparent transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hidden cursor-pointer rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/60 hover:text-white md:inline-flex"
            >
              Let&apos;s Talk
            </button>
            <details className="relative md:hidden">
              <summary className="list-none rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/60 hover:text-white">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-black/90 p-3 text-sm text-white/90 shadow-2xl">
                {[
                  "about",
                  "skills",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(item)}
                    className="block w-full cursor-pointer rounded-lg bg-transparent px-3 py-2 text-left transition hover:bg-white/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative overflow-hidden px-4 pt-16 sm:px-6 md:pt-28">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:px-4 sm:text-xs">
                Personal Portfolio
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
              </div>
              <div className="space-y-4">
                <h1 className="text-display text-3xl text-white sm:text-5xl md:text-6xl">
                  Crafting premium digital products with precision and taste.
                </h1>
                <p className="max-w-xl text-sm text-[color:var(--muted)] sm:text-lg">
                  I&apos;m Md Mubassir Ahmed Siddique, a TypeScript-first frontend
                  engineer building fast, elegant, and conversion-focused web
                  experiences. I blend design systems with engineering rigor.
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("projects")}
                  className="pulse-glow cursor-pointer rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  View Projects
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  Book a Call
                </button>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass w-full rounded-2xl px-5 py-4 sm:w-auto"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="glass glow relative h-[360px] w-full max-w-sm rounded-[32px] p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                  Portfolio System
                  <span className="rounded-full border border-white/20 px-2 py-1 text-[10px]">
                    Live
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Design System",
                    "Performance Engineering",
                    "Motion & Micro-UX",
                    "Product Strategy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80"
                    >
                      {item}
                      <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)]"></span>
                    </div>
                  ))}
                </div>
                <div className="float absolute -right-6 -top-8 hidden h-20 w-20 rounded-3xl border border-white/10 bg-[color:var(--accent)]/80 sm:block"></div>
                <div className="float absolute -bottom-6 -left-8 hidden h-16 w-16 rounded-full border border-white/10 bg-[color:var(--accent-2)]/80 sm:block"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-display text-sm text-[color:var(--accent)]">
                About
              </p>
              <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
                Building clarity, speed, and confidence into every interface.
              </h2>
            </div>
            <div className="space-y-5 text-sm text-[color:var(--muted)] sm:text-base">
              <p>
                I focus on TypeScript and Next.js, building clean, responsive
                interfaces with strong performance and accessibility.
              </p>
              <p>
                I am currently available for new opportunities and keep my
                skills sharp through real-world projects, product prototypes,
                and continuous learning.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Design Systems",
                  "Frontend Architecture",
                  "Product Strategy",
                  "UX Engineering",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 pb-16 sm:px-6 md:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-display text-sm text-[color:var(--accent)]">
                  Skills
                </p>
                <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
                  Full-stack capability with a frontend core.
                </h2>
              </div>
              <span className="hidden text-sm text-white/50 md:block">
                Always shipping, always learning
              </span>
            </div>
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="ringed rounded-2xl bg-black/20 px-5 py-4 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 pb-16 sm:px-6 md:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-display text-sm text-[color:var(--accent)]">
                  Projects
                </p>
                <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
                  Signature work crafted for scale and elegance.
                </h2>
              </div>
            </div>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/30"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 pb-16 sm:px-6 md:pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-6 sm:mb-8">
              <p className="text-display text-sm text-[color:var(--accent)]">
                Experience
              </p>
              <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
                Proven delivery across product, scale, and speed.
              </h2>
            </div>
            <div className="grid gap-5 sm:gap-6">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="glass rounded-3xl p-6 lg:flex lg:items-center lg:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-xl text-sm text-[color:var(--muted)] lg:mt-0">
                    {item.summary}
                  </p>
                  <span className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50 lg:mt-0">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 sm:px-6 md:pb-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="glass rounded-[36px] p-8 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-display text-sm text-[color:var(--accent)]">
                    Contact
                  </p>
                  <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
                    Let&apos;s build something unforgettable.
                  </h2>
                  <p className="mt-4 text-sm text-[color:var(--muted)] sm:text-base">
                    Share a project brief, timeline, or role. I respond quickly
                    and can jump into new engagements within 3 days.
                  </p>
                  <form
                    className="mt-6 grid gap-4 sm:mt-8"
                    onSubmit={async (event) => {
                      event.preventDefault();
                      setFormStatus("sending");
                      const form = event.currentTarget;
                      const data = new FormData(form);

                      if (data.get("website")) {
                        setFormStatus("sent");
                        form.reset();
                        return;
                      }

                      const payload = {
                        name: String(data.get("name") || ""),
                        contacts: String(data.get("contacts") || ""),
                        message: String(data.get("message") || ""),
                      };

                      try {
                        const res = await fetch("https://msnrtgapi2.vercel.app/receive", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });

                        if (!res.ok) throw new Error("Request failed");
                        setFormStatus("sent");
                        form.reset();
                      } catch {
                        setFormStatus("error");
                      }
                    }}
                  >
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Name
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                        />
                      </label>
                      <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Contact
                        <input
                          type="text"
                          name="contacts"
                          placeholder="Email or phone"
                          required
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                        />
                      </label>
                    </div>
                    <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Message
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        required
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                      ></textarea>
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black sm:w-auto"
                    >
                      {formStatus === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {formStatus === "sent" && (
                      <p className="text-sm text-emerald-300">Message sent.</p>
                    )}
                    {formStatus === "error" && (
                      <p className="text-sm text-red-300">Failed to send. Try again.</p>
                    )}
                  </form>
                </div>
                <div className="space-y-4 text-sm text-white/70">
                  <div className="ringed rounded-2xl bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Availability
                    </div>
                    <div className="mt-2 text-base text-white">
                      Open for selective projects
                    </div>
                  </div>
                  <div className="ringed rounded-2xl bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Focus
                    </div>
                    <div className="mt-2 text-base text-white">
                      Premium web products and Telegram bot
                    </div>
                  </div>
                  <div className="ringed rounded-2xl bg-black/30 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Location
                    </div>
                    <div className="mt-2 text-base text-white">
                      Remote-friendly, global clients
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="mailto:masmubassir@gmail.com"
                      className="mx-auto rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black"
                    >
                      masmubassir@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showTopButton && (
        <button
          type="button"
          aria-label="Go to top"
          title="Go to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-black/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      )}

      <footer className="border-t border-white/5 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-center text-xs uppercase tracking-[0.2em] text-white/50 md:flex-row md:gap-4 md:text-left">
          <span>(c) 2026 Md Mubassir Ahmed Siddique</span>
          <span>Built with TypeScript + Next.js</span>
        </div>
      </footer>
    </div>
  );
}
