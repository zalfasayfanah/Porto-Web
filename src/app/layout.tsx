import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zalfaulislam Sayfanah | Web Developer Portfolio",
  description:
    "Personal Portfolio Website of Zalfaulislam Sayfanah — Informatics Student at UNIMUS & Web Developer specializing in Next.js, TypeScript, and modern web application development.",
  keywords: [
    "Zalfaulislam Sayfanah",
    "Web Developer",
    "Web Developer Intern",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Informatika UNIMUS",
  ],
  authors: [{ name: "Zalfaulislam Sayfanah" }],
  openGraph: {
    title: "Zalfaulislam Sayfanah | Web Developer Portfolio",
    description:
      "Explore the portfolio, projects, skills, and certifications of Zalfaulislam Sayfanah, Web Developer & Informatics Student.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

