import Link from 'next/link';

const sections = [
  { href: '/reader', label: 'Quran Reader' },
  { href: '/challenge', label: 'Ramadan 30-Day Khatam' },
  { href: '/dashboard', label: 'User Dashboard' },
  { href: '/share', label: 'Ayah Card Generator' },
  { href: '/admin', label: 'Admin Panel' }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="text-4xl font-semibold text-goldAccent">Quraniyah</h1>
      <p className="mt-4 max-w-3xl text-emerald-50">
        Production-oriented platform scaffold for authentic Quran reading, verified translations, progress tracking,
        and sharing with strict no-modification safeguards.
      </p>
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-goldAccent/50 bg-black/20 p-4 transition hover:border-goldAccent hover:bg-black/35"
          >
            {section.label}
          </Link>
        ))}
      </section>
    </main>
  );
}
