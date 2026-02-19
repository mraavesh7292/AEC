import { challengeSnapshot } from '@/lib/mockData';

const feed = [
  'Bookmark added for Surah Al-Baqarah 2:255',
  'Completed assigned Juz reading',
  'Private note saved for reflection'
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-goldAccent">Assalamu Alaikum, Reader</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card title="Current Position" value={`Juz ${challengeSnapshot.todayJuz}, Surah 9`} />
        <Card title="Challenge Completion" value={`${challengeSnapshot.completionPercent}%`} />
        <Card title="Streak" value={`${challengeSnapshot.streakDays} days`} />
      </div>
      <section className="mt-6 rounded-xl border border-goldAccent/30 bg-black/20 p-4">
        <h2 className="text-lg font-semibold text-goldAccent">Notification Center</h2>
        <ul className="mt-2 space-y-2 text-sm text-emerald-100">
          {feed.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <p className="text-xs uppercase text-emerald-200">{title}</p>
      <p className="mt-2 text-xl">{value}</p>
    </div>
  );
}
