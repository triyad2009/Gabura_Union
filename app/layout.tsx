import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabura Digital Archive",
  description: "Documenting Gabura — history, people, climate, documents and community memory.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="bn"><body>{children}</body></html>;
}