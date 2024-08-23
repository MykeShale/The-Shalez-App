import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import type { Metadata } from "next"


export const metadata = {
  title: 'The Shalez || Shaping the Digital Universe',
  description: 'Beyond aesthetics, we build experiences that resonate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
