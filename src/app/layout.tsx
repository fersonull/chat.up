import type { Metadata } from "next";
import { geist } from "./fonts";
import "./globals.css";
import HomeNavbar from "@/components/home/home-navbar";

export const metadata: Metadata = {
  title: "ChatUp",
  description: "Chat anywhere, anytime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
