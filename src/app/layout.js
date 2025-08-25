import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";  // 👈 importa o Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gabriel Ribeiro | Desenvolvedor Web e Mobile",
  description:
    "Portfólio de Gabriel Ribeiro, desenvolvedor especializado em Python, Django, Next.js e Flutter. Criação de sistemas, aplicativos e sites modernos, rápidos e profissionais.",
  keywords: [
    "Gabriel Ribeiro",
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "Freelancer",
    "Python",
    "Django",
    "Next.js",
    "Flutter",
    "Sites Profissionais",
    "Aplicativos",
    "Sistemas Web",
    "Programador Full Stack",
  ],
  authors: [{ name: "Gabriel Ribeiro" }],
  openGraph: {
    title: "Gabriel Ribeiro | Desenvolvedor Web e Mobile",
    description:
      "Portfólio de Gabriel Ribeiro - Desenvolvimento de sites, sistemas e aplicativos com tecnologias modernas.",
    url: "https://seu-site.com", // depois troca pelo domínio real
    siteName: "Gabriel Ribeiro | Portfólio",
    images: [
      {
        url: "https://seu-site.com/preview.png", // imagem de pré-visualização (quando compartilhar no WhatsApp/LinkedIn)
        width: 1200,
        height: 630,
        alt: "Portfólio Gabriel Ribeiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-overlay"></div> {/* Película escura */}
        <Header />
        {children}
      </body>
    </html>

  );
}
