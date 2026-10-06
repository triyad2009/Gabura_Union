import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaburaarchive.vercel.app"),
  title: {
    default: "Gabura Digital Archive",
    template: "%s — Gabura Archive",
  },
  description:
    "An independent evidence-first digital archive documenting Gabura, Shyamnagar — history, people, climate, documents, maps and community memory.",
  applicationName: "Gabura Digital Archive",
  keywords: [
    "Gabura",
    "Gabura Union",
    "Shyamnagar",
    "Satkhira",
    "Gabura history",
    "Sundarbans",
    "coastal Bangladesh",
    "digital archive",
  ],
  authors: [{ name: "Gabura Digital Archive" }],
  creator: "Gabura Digital Archive",
  publisher: "Gabura Digital Archive",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gabura Digital Archive",
    description:
      "Documenting Gabura — history, people, climate, documents, maps and community memory.",
    type: "website",
    locale: "bn_BD",
    siteName: "Gabura Digital Archive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabura Digital Archive",
    description:
      "An independent evidence-first digital archive documenting Gabura.",
  },
};

export const viewport: Viewport = {
  themeColor: "#080909",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
