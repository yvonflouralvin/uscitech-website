import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; 
import MainWrapper from "@/components/partials/MainWraper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Uscitech",
  description: "UNIVERSITE DES SCIENCES ET TECHNOLOGIES | UNIVERSITE CANADIENNE BILINGUE",
  icons: {
    icon: "/icon_uscitech.png",
    shortcut: "/icon_uscitech.png",
    apple: "/icon_uscitech.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icon_uscitech.png" />
        <link rel="apple-touch-icon" href="/icon_uscitech.png" />
        <link rel="icon" type="image/png" href="/icon_uscitech.png" />
        <link rel="icon" type="image/svg+xml" href="/icon_uscitech.png" />
        <link rel="icon" type="image/x-icon" href="/icon_uscitech.png" />
        <link rel="icon" type="image/webp" href="/icon_uscitech.png" />
        <link rel="icon" type="image/gif" href="/icon_uscitech.png" />
        <link rel="icon" type="image/jpeg" href="/icon_uscitech.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainWrapper>
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
