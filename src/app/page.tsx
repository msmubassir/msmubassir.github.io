"use client";

import { useEffect, useState } from "react";

import AIChat from "@/components/AIChat";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showTopButton, setShowTopButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const stats = [
    { value: "5+", label: "Years" },
    { value: "30+", label: "Projects" },
    { value: "98", label: "Lighthouse" },
  ];

  const skills = [
    "TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS",
    "Framer Motion", "PostgreSQL", "REST APIs", "Testing Library",
  ];

  const projects = [
    {
      title: "Atlas Dashboard",
      description: "Multi-tenant analytics suite with real-time insights, role-based access, and precision-crafted UI.",
      tags: ["Next.js", "tRPC", "PostgreSQL"],
    },
    {
      title: "Lumen Commerce",
      description: "Headless storefront focused on speed and conversion with edge caching and dynamic merchandising.",
      tags: ["TypeScript", "Edge", "Stripe"],
    },
    {
      title: "News Portal",
      description: "High-performance news platform with editorial workflows, category-based feeds, and SEO-focused delivery.",
      tags: ["Next.js", "TypeScript", "SSR"],
    },
  ];

  const experience = [
    {
      role: "Independent Developer",
      period: "2024 - Present",
      summary: "Building personal projects and client-ready demos with focus on performance and modern UI.",
    },
    {
      role: "Project-Based Learning",
      period: "2022 - 2024",
      summary: "Completed hands-on builds across responsive UI, API integration, and deployment workflows.",
    },
    {
      role: "Frontend Practice",
      period: "2020 - 2022",
      summary: "Strengthened fundamentals in HTML, CSS, JavaScript, and TypeScript.",
    },
  ];

  const navItems = ["about", "skills", "projects", "experience", "contact"];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Mubassir</span>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-zinc-400 hover:text-white transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block btn-primary text-sm"
            >
              Get in touch
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-400"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#18181b] border-t border-zinc-800">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-zinc-400 hover:text-white py-2 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section className="min-h-[90vh] flex items-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className={`${mounted ? "animate-slide-up" : "opacity-0"}`}>
              <div className="tag mb-6">Available for projects</div>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 ${mounted ? "animate-slide-up stagger-1" : "opacity-0"}`}>
              <span className="gradient-text">Md Mubassir Ahmed</span>
              <br />
              <span className="gradient-accent">Siddique</span>
            </h1>

            <p className={`text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 ${mounted ? "animate-slide-up stagger-2" : "opacity-0"}`}>
              TypeScript-first frontend engineer building fast, elegant, and conversion-focused web experiences.
            </p>

            <div className={`flex flex-wrap gap-4 mb-16 ${mounted ? "animate-slide-up stagger-3" : "opacity-0"}`}>
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary"
              >
                View Work
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>

            <div className={`flex flex-wrap gap-8 ${mounted ? "animate-slide-up stagger-4" : "opacity-0"}`}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="section-title">About</p>
                <h2 className="section-heading mb-6">
                  Building clarity and speed into every interface.
                </h2>
              </div>
              <div className="space-y-4 text-zinc-400">
                <p>
                  I focus on TypeScript and Next.js, building clean, responsive interfaces with strong performance and accessibility.
                </p>
                <p>
                  Currently available for new opportunities and keeping skills sharp through real-world projects.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Design Systems", "Frontend Architecture", "UX Engineering"].map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 px-6 bg-[#18181b]/50">
          <div className="max-w-5xl mx-auto">
            <p className="section-title">Skills</p>
            <h2 className="section-heading mb-12">Full-stack capability with a frontend core.</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="card text-center hover:bg-zinc-800/50">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="section-title">Projects</p>
            <h2 className="section-heading mb-12">Selected work.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article key={project.title} className="card group">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 px-6 bg-[#18181b]/50">
          <div className="max-w-5xl mx-auto">
            <p className="section-title">Experience</p>
            <h2 className="section-heading mb-12">Proven delivery.</h2>

            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.role} className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{item.role}</h3>
                    <span className="text-sm text-zinc-500">{item.period}</span>
                  </div>
                  <p className="text-sm text-zinc-400 max-w-md">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl">
              <p className="section-title">Contact</p>
              <h2 className="section-heading mb-4">Let's work together.</h2>
              <p className="text-zinc-400 mb-10">
                Share a project brief or timeline. I respond quickly and can start within 3 days.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("sending");
                  const form = e.currentTarget;
                  const data = new FormData(form);

                  if (data.get("website")) {
                    setFormStatus("sent");
                    form.reset();
                    return;
                  }

                  try {
                    await fetch("https://msnrtgapi2.vercel.app/receive", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name: data.get("name"),
                        contacts: data.get("contacts"),
                        message: data.get("message"),
                      }),
                    });
                    setFormStatus("sent");
                    form.reset();
                  } catch {
                    setFormStatus("error");
                  }
                }}
                className="space-y-4"
              >
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="contacts"
                    placeholder="Email or phone"
                    required
                    className="input-field"
                  />
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  required
                  className="input-field resize-none"
                />

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "sent" && (
                  <p className="text-emerald-500 text-sm">Message sent successfully!</p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      {showTopButton && (
        <button
          onClick={() => scrollToSection("")}
          className="fixed bottom-6 right-6 w-12 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <AIChat />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>2026 Md Mubassir Ahmed Siddique</span>
          <span>Built with TypeScript + Next.js</span>
        </div>
      </footer>
    </div>
  );
}