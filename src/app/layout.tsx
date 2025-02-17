import type { Metadata } from "next";
import { Geist, Epilogue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistEpilogue = Epilogue({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Basket",
  description: "Discover the freshest farm produce at Green Basket. Shop locally grown fruits and vegetables delivered straight to your doorstep.",
  keywords: "farm produce, locally grown, fruits, vegetables, delivery",
  robots: "index, follow",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistEpilogue.variable} antialiased
        ${process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
