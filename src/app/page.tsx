export default function Home() {
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
      role: "Senior Frontend Engineer",
      company: "Nova Labs",
      period: "2023 - Present",
      summary:
        "Led the redesign of the flagship product, improving activation by 28% and reducing load time by 60%.",
    },
    {
      role: "Product Engineer",
      company: "Orbit Studio",
      period: "2021 - 2023",
      summary:
        "Built a scalable design system and shipped 12 feature releases with cross-functional teams.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2019 - 2021",
      summary:
        "Partnered with founders to deliver MVPs, from prototype to production-grade experiences.",
    },
  ];

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
              <a
                key={item}
                href={`#${item}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/60 hover:text-white md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <details className="relative md:hidden">
              <summary className="list-none rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/60 hover:text-white">
                Menu
              </summary>
              <div className="glass absolute right-0 mt-3 w-52 rounded-2xl p-3 text-sm text-white/80">
                {[
                  "about",
                  "skills",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block rounded-lg px-3 py-2 transition hover:bg-white/10"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative overflow-hidden px-6 pt-20 md:pt-28">
          <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
                Personal Portfolio
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"></span>
              </div>
              <div className="space-y-4">
                <h1 className="text-display text-4xl text-white sm:text-5xl md:text-6xl">
                  Crafting premium digital products with precision and taste.
                </h1>
                <p className="max-w-xl text-base text-[color:var(--muted)] sm:text-lg">
                  I&apos;m Md Mubassir Ahmed Siddique, a TypeScript-first frontend
                  engineer building fast, elegant, and conversion-focused web
                  experiences. I blend design systems with engineering rigor.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="pulse-glow rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  Book a Call
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl px-5 py-4"
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
                <div className="float absolute -right-6 -top-8 h-20 w-20 rounded-3xl border border-white/10 bg-[color:var(--accent)]/80"></div>
                <div className="float absolute -bottom-6 -left-8 h-16 w-16 rounded-full border border-white/10 bg-[color:var(--accent-2)]/80"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-display text-sm text-[color:var(--accent)]">
                About
              </p>
              <h2 className="text-display text-3xl text-white md:text-4xl">
                Building clarity, speed, and confidence into every interface.
              </h2>
            </div>
            <div className="space-y-6 text-base text-[color:var(--muted)]">
              <p>
                I specialize in TypeScript and Next.js, designing resilient
                systems that scale from MVP to global product. My focus is on
                performance, accessibility, and clean modular architecture.
              </p>
              <p>
                I work closely with founders, product teams, and designers to
                transform bold ideas into delightful experiences. Expect crisp
                UI, measurable impact, and a stress-free delivery cadence.
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

        <section id="skills" className="px-6 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-display text-sm text-[color:var(--accent)]">
                  Skills
                </p>
                <h2 className="text-display text-3xl text-white md:text-4xl">
                  Full-stack capability with a frontend core.
                </h2>
              </div>
              <span className="hidden text-sm text-white/50 md:block">
                Always shipping, always learning
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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

        <section id="projects" className="px-6 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="text-display text-sm text-[color:var(--accent)]">
                  Projects
                </p>
                <h2 className="text-display text-3xl text-white md:text-4xl">
                  Signature work crafted for scale and elegance.
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/60 md:inline-flex"
              >
                Request Case Study
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
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

        <section id="experience" className="px-6 pb-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8">
              <p className="text-display text-sm text-[color:var(--accent)]">
                Experience
              </p>
              <h2 className="text-display text-3xl text-white md:text-4xl">
                Proven delivery across product, scale, and speed.
              </h2>
            </div>
            <div className="grid gap-6">
              {experience.map((item) => (
                <div
                  key={item.role}
                  className="glass rounded-3xl p-6 md:flex md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-white/60">{item.company}</p>
                  </div>
                  <p className="mt-4 max-w-xl text-sm text-[color:var(--muted)] md:mt-0">
                    {item.summary}
                  </p>
                  <span className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50 md:mt-0">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="glass rounded-[36px] p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-display text-sm text-[color:var(--accent)]">
                    Contact
                  </p>
                  <h2 className="text-display text-3xl text-white md:text-4xl">
                    Let&apos;s build something unforgettable.
                  </h2>
                  <p className="mt-4 text-base text-[color:var(--muted)]">
                    Share a project brief, timeline, or role. I respond quickly
                    and can jump into new engagements within 3 days.
                  </p>
                  <form className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Name
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                        />
                      </label>
                      <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Contact
                        <input
                          type="email"
                          name="email"
                          placeholder="Email or phone"
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
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                      ></textarea>
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black sm:w-auto"
                    >
                      Send Message
                    </button>
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

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-white/50 md:flex-row">
          <span>© 2026 Md Mubassir Ahmed Siddique</span>
          <span>Built with TypeScript + Next.js</span>
        </div>
      </footer>
    </div>
  );
}
