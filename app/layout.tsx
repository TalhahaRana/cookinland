import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import "./globals.css";

const inter = Space_Mono({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "CookinLand",
  description: "Sweet and Sour Harmony, Perfectly Balanced.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}
        
      </body>
    </html>
  );
}
