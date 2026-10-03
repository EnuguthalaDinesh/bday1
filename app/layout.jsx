import "./globals.css";
import Nav from "@/components/Nav";
import Backdrop from "@/components/Backdrop";
import PandaLayer from "@/components/PandaLayer";

export const metadata = {
  title: "Happy Birthday Bhargavi",
  description: "A little birthday website, made with love.",
};

const fonts =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;1,400;1,600&family=Jost:wght@400;500;600&family=Pinyon+Script&family=Noto+Sans+Telugu:wght@400;600&family=Noto+Sans+Devanagari:wght@400;600&family=Noto+Sans+Tamil:wght@400;600&family=Noto+Sans+Kannada:wght@400;600&family=Noto+Sans+Malayalam:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&family=Noto+Sans+Gujarati:wght@400;600&family=Noto+Sans+Gurmukhi:wght@400;600&family=Noto+Sans+Oriya:wght@400;600&display=swap";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fonts} />
      </head>
      <body>
        <Backdrop />
        <Nav />
        <main>{children}</main>
        <PandaLayer />
      </body>
    </html>
  );
}
