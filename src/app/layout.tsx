import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

import { ToastContainer, Slide } from "react-toastify";

import "../css/dist/bootstrap.min.css";
import "../css/dist/style.min.css";
import "../css/custom.css";
import "../css/projects.min.css";

import { QueryProvider } from "@/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Arie Setiadi | Full Stack Web Developer",
  description:
    "Portfolio of Arie Setiadi, a Full Stack Web Developer specializing in React, Next.js, and Laravel. Explore my projects, skills, and professional experience.",
  keywords: [
    "Arie Setiadi",
    "web developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "React",
    "Next.js",
    "Laravel",
    "portfolio",
  ],
  authors: [{ name: "Arie Setiadi" }],
  creator: "Arie Setiadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Arie Setiadi | Full Stack Web Developer",
    description:
      "Portfolio of Arie Setiadi, a Full Stack Web Developer specializing in React, Next.js, and Laravel. Explore my projects, skills, and professional experience.",
    siteName: "Arie Setiadi Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Arie Setiadi | Full Stack Web Developer",
    description:
      "Portfolio of Arie Setiadi, a Full Stack Web Developer specializing in React, Next.js, and Laravel. Explore my projects, skills, and professional experience.",
    creator: "@arieesetiadi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <Header />
          <main className="content">{children}</main>
          <Footer />
        </QueryProvider>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      </body>
    </html>
  );
}
