import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const _poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Joba and Suto Wedding Celebration",
  description: "Join us for a beautiful celebration of love and togetherness",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_playfairDisplay.variable} ${_poppins.variable} font-sans antialiased bg-wedding-dark text-wedding-light`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
