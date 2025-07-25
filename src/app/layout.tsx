import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import './assets/scss/tailwind.scss'
import './assets/css/material.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})


export const metadata: Metadata = {
  title: "Appever - NextJs App Landing Template",
  description: "Appever - NextJs App Landing Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body
        className={` ${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
