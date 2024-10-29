import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { montserrat } from "@/lib/fonts/fonts";

export const metadata: Metadata = {
  title: "Jeels dev",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <div className="container md:max-w-[50rem] w-full mx-auto max-w-none antialiased mb-10 px-5 md:px-10 lg:px-0">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
