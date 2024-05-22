/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer";
import { font } from "@/lib/utils";
import { Toast, ToastProvider } from "@/components/ui/toast";

export const metadata: Metadata = {
  title: {
    default: "ViewTB - Learn About Tuberculosis.",
    template: "%s | ViewTB",
  },
  description: "Creating awareness and Helping the public understand TB more.",
  icons: [
    {
      rel: "icon",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider>
          <Toast />
          <Nav />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
