import Link from 'next/link';

const navItems = [
  ['/', 'Home'],
  ['/reader', 'Reader'],
  ['/challenge', 'Challenge'],
  ['/dashboard', 'Dashboard'],
  ['/share', 'Share'],
  ['/admin', 'Admin']
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-geometric">
      <header className="border-b border-goldAccent/30 bg-emeraldDeep/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <p className="text-lg font-semibold text-goldAccent">Quraniyah Platform</p>
          <div className="flex gap-2 text-sm">
            {navItems.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-md px-3 py-1 text-emerald-100 hover:bg-white/10">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
