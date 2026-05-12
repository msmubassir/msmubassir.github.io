import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Mubassir Ahmed Siddique - Portfolio",
  description:
    "TypeScript-first frontend engineer building fast, elegant, and conversion-focused web experiences.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}