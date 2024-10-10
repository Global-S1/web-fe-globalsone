import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import localfont from "next/font/local";
import { Header } from "@/shared/components/header";
import "./globals.css";
import { Footer } from "@/shared/components/footer";
import { Main } from "@/shared/components/main";
import { HeaderMobile } from "@/shared/components/header-mobile";
import { BgLeave } from "@/shared/animations/leaves-background-animation";
import { getLayoutLinks } from "@/shared/services/layout.service";

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
const urbanistFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Global S1",
  description: "pagina web de Global S1",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const link = await getLayoutLinks();
  return (
    <html
      lang="en"
      className={`${grandis.variable} ${futuraMedium.variable} ${urbanistFont.variable} scroll-smooth`}
    >
      <body className="font-grandis">
        <BgLeave />
        <Header content={link.headerLinks} />
        <HeaderMobile content={link.headerLinks} />
        <Main>{children}</Main>
        <Footer content={link.footerLinks} socialMedia={link.socialMedia} />
      </body>
    </html>
  );
}
