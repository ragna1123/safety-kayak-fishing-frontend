import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilProvider from "./recoilProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safety Kayak Fishing App",
  description: "let's go fishing with safety first",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        {/* 認証チェックを行うクライアントコンポーネント */}
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
