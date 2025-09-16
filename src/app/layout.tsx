import type { Metadata } from "next";
import { geist } from "./fonts";
import "./globals.css";

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
        className={`${geist.className} antialiased dark`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
