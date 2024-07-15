import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../components/theme-provider";
import { CrispProvider } from "../components/crisp-provider";
import { ToastProvider } from "../components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intel GenAI | AI Market",
  description:
    "Intel GenAI (AI-market), this platform contains AI & ML products, where user can rent our products and Intel GenAI have a playground facility so user can able to build their own AI modal. Users can able to use our APIs as open source (APIs are completely developed by Intel GenAI from scratch). Visitors can also able to buy source codes from Intel GenAI store/market, our store contains the latest cutting-edge technologies (source code). Some free source codes also available in our store. And also Intel GenAI has Documentation page, this documentation page will guide the users to how to develop ML modals and also guide to use our source codes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
