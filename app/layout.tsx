import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
   subsets: ["latin"],
   weight: ['300', '400', '500', '600', '700'],
   variable: '--font-cormorant'
})

const greatVibes = Great_Vibes({ 
   subsets: ["latin"],
   weight: ['400'],
   variable: '--font-great-vibes'
})

export const metadata: Metadata = {
   title: 'Syamsul & Iim - Undangan Pernikahan',
   description: 'Anda diundang untuk merayakan pernikahan Syamsul & Iim',
   generator: 'v0.app',
   icons: {
      icon: [
         {
         url: '/icon-light-32x32.png',
         media: '(prefers-color-scheme: light)',
         },
         {
         url: '/icon-dark-32x32.png',
         media: '(prefers-color-scheme: dark)',
         },
         {
         url: '/icon.svg',
         type: 'image/svg+xml',
         },
      ],
      apple: '/apple-icon.png',
   },
}

export const viewport: Viewport = {
   themeColor: '#1a1a2e',
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
   userScalable: false,
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="id" className="bg-background">
         <body className={`${cormorant.variable} ${greatVibes.variable} font-serif antialiased`}>
         {children}
         {process.env.NODE_ENV === 'production' && <Analytics />}
         </body>
      </html>
   )
}
