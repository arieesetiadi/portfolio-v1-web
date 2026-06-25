import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "../css/dist/bootstrap.min.css";
import "../css/dist/style.min.css";
import "../css/custom.min.css";
import "../css/projects.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arie Setiadi - Personal Development Portfolio",
  keywords:
    "web developer, web design, frontend developer, backend developer, full stack developer, programmer, coder, HTML, CSS, JavaScript, Vue, React, PHP, Laravel, database, SQL, web development portfolio",
  description:
    "Explore the personal development portfolio of Arie Setiadi, showcasing projects, skills, and growth in various areas. A professional overview of his journey and accomplishments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
