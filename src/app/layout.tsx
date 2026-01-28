import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatMap",
  description: "Generate mindmaps with your chat link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FBF9F9]">{children}</body>
    </html>
  );
}
