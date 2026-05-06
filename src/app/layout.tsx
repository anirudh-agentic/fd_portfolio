import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export const metadata = {
  title: "K.A. Harshita | Fashion Designer",
  description: "Emerging luxury fashion designer’s official editorial portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-muted-beige">
        {children}
      </body>
    </html>
  );
}
