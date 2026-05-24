import ThemeSelector from "@/components/ThemeSelector";
import ConsoleLog from "@/components/ConsoleLog";
import Animations from "@/components/Animation";
import ScrollTop from "@/components/ScrollTop";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import config from "@/config/site.config";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "@/app/globals.css";

const misans = localFont({
  src: [
    {
      path: "../fonts/MiSansVF.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-misans",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tuco's Home", // ✅ 浏览器标签页标题
  description: config.description, // Tuco's Homepage
  icons: {
    icon: "/avatar.avif", // ✅ 浏览器 tab 图标
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${misans.variable} grid gap-5 antialiased selection:bg-sky-400/30`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Animations />
          <NextTopLoader color="#51A8DD" />
          {children}
          <Footer />
          <ThemeSelector />
          <ScrollTop />
          <ConsoleLog />
        </ThemeProvider>
      </body>
    </html>
  );
}
