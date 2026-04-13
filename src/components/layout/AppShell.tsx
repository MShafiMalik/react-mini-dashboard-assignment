import { NavLink, Outlet } from 'react-router-dom'

import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Listing', to: '/listing' },
  { label: 'Form', to: '/form' },
]

export function AppShell() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <header className="border-border/80 bg-card/95 dark:bg-card/90 rounded-lg border p-4 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Mini Dashboard
              </p>
              <h1 className="text-2xl font-semibold sm:text-3xl">Assignment Workspace</h1>
              <p className="text-sm text-muted-foreground">
                API listing and form validation implementation.
              </p>
            </div>
            <ThemeToggle />
          </div>
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <Outlet />
      </div>
    </main>
  )
}
