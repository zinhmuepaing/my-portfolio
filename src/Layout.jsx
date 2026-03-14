import { Link, useLocation, Outlet } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { createPageUrl } from '@/utils'

const navLinks = [
  { label: 'Home', page: 'Home' },
  { label: 'About', page: 'About' },
  { label: 'Skills', page: 'Skills' },
  { label: 'Projects', page: 'Projects' },
  { label: 'Achievements', page: 'Achievements' },
  { label: 'Leadership', page: 'Leadership' },
  { label: 'Contact', page: 'Contact' },
]

export default function Layout() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              ZHP
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, page }) => {
                const href = page === 'Home' ? '/' : createPageUrl(page)
                const isActive =
                  page === 'Home'
                    ? location.pathname === '/'
                    : location.pathname === href

                return (
                  <Link
                    key={page}
                    to={href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-1 pb-2 overflow-x-auto">
            {navLinks.map(({ label, page }) => {
              const href = page === 'Home' ? '/' : createPageUrl(page)
              const isActive =
                page === 'Home'
                  ? location.pathname === '/'
                  : location.pathname === href

              return (
                <Link
                  key={page}
                  to={href}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
