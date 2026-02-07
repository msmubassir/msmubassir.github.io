import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Mubassir Ahmed Siddique - Portfolio",
  description:
    "Advanced portfolio for Md Mubassir Ahmed Siddique: frontend, systems, and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const legacyGuardScript = `
    (function () {
      var root = document.documentElement;
      var legacy = false;
      var ua = navigator.userAgent || "";
      function versionAfter(token, index) {
        var part = ua.split(token)[index] || "";
        var num = parseInt(part.split(/[ .;)/]/)[0], 10);
        return isNaN(num) ? 0 : num;
      }
      try {
        if (!window.CSS || !window.CSS.supports) {
          legacy = true;
        } else {
          if (!CSS.supports("display", "grid")) {
            legacy = true;
          }
          var hasBackdrop = CSS.supports("backdrop-filter", "blur(2px)") ||
            CSS.supports("-webkit-backdrop-filter", "blur(2px)");
          if (!hasBackdrop) {
            root.classList.add("no-backdrop");
          }
          if (!CSS.supports("mask-image", "linear-gradient(black, transparent)")) {
            root.classList.add("no-mask");
          }
          if (!("scrollBehavior" in root.style)) {
            root.classList.add("no-smooth-scroll");
          }
        }
        var chrome = versionAfter("Chrome/", 1);
        var safari = ua.indexOf("Safari/") > -1 && ua.indexOf("Chrome/") === -1;
        var safariVersion = versionAfter("Version/", 1);
        var androidVersion = versionAfter("Android ", 1);
        if ((chrome && chrome < 90) || (safari && safariVersion && safariVersion < 15) || (androidVersion && androidVersion < 10)) {
          legacy = true;
        }
      } catch (_err) {
        legacy = true;
      }
      if (legacy) {
        root.classList.add("legacy-browser");
      }
      try {
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          root.classList.add("reduced-motion");
        }
      } catch (_err) {}
    })();
  `;

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: legacyGuardScript }} />
        {children}
      </body>
    </html>
  );
}
