'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Página Inicial' },
  { href: '/pistas', label: 'Pistas' },
  { href: '/calendario', label: 'Calendário' },
  { href: '/pilotos', label: 'Pilotos' },
  { href: '/equipas', label: 'Equipas' },
  { href: '/classificacoes', label: 'Classificações' },
  // { href: '/quiz', label: 'Quiz' }, // Futuro
]

export default function Navbar() {
  const pathname = usePathname() || '/'

  return (
    <header className="sticky top-0 z-50">
      {/* top letreiro vermelho */}
      <div className="bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold">
            Formula1 Portugal
          </Link>
        </div>
      </div>

      {/* tabs de navegação */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex gap-2 overflow-x-auto py-2">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      'inline-block px-4 py-2 rounded-t-md transition ' +
                      (isActive
                        ? 'bg-red-50 text-red-700 border-b-2 border-red-600'
                        : 'text-gray-600 hover:text-red-600')
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
