import { Inter, Luckiest_Guy, Indie_Flower } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const luckiestGuy = Luckiest_Guy({ weight: '400', subsets: ['latin'], variable: '--font-luckiest-guy' })
const indieFlower = Indie_Flower({ weight: '400', subsets: ['latin'], variable: '--font-indie-flower' })

export const metadata = {
  title: 'Talk to Chill Guy AI',
  description: 'A chill AI chatbot experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${luckiestGuy.variable} ${indieFlower.variable}`}>
        {children}
      </body>
    </html>
  )
}

