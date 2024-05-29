import "./globals.css";

import { yekan } from "@/utils/fonts";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "املاک | خرید و فروش ملک",
  description: "سایت خرید و فروش ملک",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
