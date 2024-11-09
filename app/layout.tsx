import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Receptai",
  description:
    "Dalinkitės savo mėgstamiausiais receptais paprastai ir greitai.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="lt">
        <body className="min-h-screen bg-background">{children}</body>
      </html>
    </ClerkProvider>
  );
}
