import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AgletSans } from "../styles/font";
import { css, cx } from "@/styled-system/css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { cq } from "@/styled-system/patterns";
import { sidebarMockData } from "./mocks";
import Head from "next/head";

export const metadata: Metadata = {
  title: "lil tiger",
  description: "ta pagando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${AgletSans.variable}`}>
      <body className={cx(css({ margin: 0, padding: 0 }))}>
        <div className={css({ display: "flex", minHeight: "100vh" })}>
          <Sidebar menuItems={sidebarMockData.linkList} />
          <div
            className={css({
              flex: 1,
              display: "flex",
              flexDirection: "column",
            })}
          >
            <Navbar />
            <main
              className={cx(
                cq({ name: "content" }),
                css({ flex: 1, display: "flex" })
              )}
            >
              <div className={css({ width: "full" })}>{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
