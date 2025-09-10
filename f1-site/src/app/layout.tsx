import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Formula1 Portugal',
  description: 'Portal F1 em Português — calendário, pilotos, equipas e classificações',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
