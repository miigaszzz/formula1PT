'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Sun, Moon, Instagram, Twitter } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/pistas', label: 'Pistas' },
  { href: '/calendario', label: 'Calendário' },
  { href: '/pilotos', label: 'Pilotos' },
  { href: '/equipas', label: 'Equipas' },
  { href: '/classificacoes', label: 'Classificações' },
]

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname() || '/'

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="w-full shadow-sm">
      {/* 🔴 Linha vermelha fina */}
      <div className="bg-red-700 text-white text-xs py-1">
        <div className="max-w-6xl mx-auto flex justify-between px-4">
          <div className="space-x-4">
            <Link href="/sobre" className="hover:underline">Sobre Nós</Link>
            <Link href="/politicas" className="hover:underline">Políticas</Link>
          </div>
          <div>
            {new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>
      </div>

      {/* 🔘 Branding + Social + Pesquisa + Dark Mode */}
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Social */}
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <Link href="https://instagram.com/" target="_blank"><Instagram className="w-5 h-5 hover:text-red-600" /></Link>
            <Link href="https://twitter.com/" target="_blank"><Twitter className="w-5 h-5 hover:text-red-600" /></Link>
          </div>

          {/* Logo */}
          <div className="text-3xl font-extrabold">
            <Link href="/">Formula1 Portugal</Link>
          </div>

          {/* Pesquisa + Dark mode */}
          <div className="flex items-center gap-4">
            <button aria-label="Pesquisar">
              <Search className="w-5 h-5 hover:text-red-600" />
            </button>
            <button onClick={toggleDarkMode} aria-label="Alternar tema">
              {darkMode ? (
                <Sun className="w-5 h-5 hover:text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 hover:text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 🔲 Linha preta de separação */}
      <div className="h-[2px] bg-black dark:bg-gray-700" />

      {/* 📌 Navbar com tabs */}
      <nav className="bg-white dark:bg-gray-900 border-b">
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
                        : 'text-gray-600 dark:text-gray-300 hover:text-red-600')
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
