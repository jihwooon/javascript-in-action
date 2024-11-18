import "./globals.css";
import { Inter } from "next/font/google";
import style from "./(beforeLogin)/_component/main.module.css"
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface Props {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className={style.container}>
        {children}
    </div>
    </body>
    </html>
  );
}