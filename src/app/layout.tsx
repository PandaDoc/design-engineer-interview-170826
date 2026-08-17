import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inkflow — Document automation for your AI tools",
  description:
    "Draft, send, and track documents from Claude, ChatGPT, or your editor. Less clicking, more closing.",
};

// This layout must stay a Server Component: `metadata` above only works here.
// Everything styled-components (registry + theme) lives inside <Providers>.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
