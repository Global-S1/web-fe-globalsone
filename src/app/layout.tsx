import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import { Header } from "@/shared/components/header";
import "./globals.css";
import {Footer} from "@/shared/components/footer";
import { Main } from "@/shared/components/main";
import { HeaderMobile } from "@/shared/components/header-mobile";

const inter = Inter({ subsets: ["latin"] });

const grandis = localfont({
  src: [
    {
      path: "../../public/fonts/grandis-extended-bold.otf",
      weight: "100",
    },
  ],
  variable: "--font-grandis",
});
const futuraMedium = localfont({
  src: [
    {
      path: "../../public/fonts/futura-medium.ttf",
    },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "Global S1",
  description: "pagina web de Global S1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${grandis.variable} ${futuraMedium.variable}`}>
      <body className="font-grandis">
        <Header />
        <HeaderMobile />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
