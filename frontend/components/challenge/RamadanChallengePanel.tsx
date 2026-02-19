import { ChallengeSnapshot } from '@/types/challenge';

export function RamadanChallengePanel({ snapshot }: { snapshot: ChallengeSnapshot }) {
  return (
    <section className="rounded-2xl border border-goldAccent/40 bg-black/20 p-6">
      <h2 className="text-2xl font-semibold text-goldAccent">30-Day Khatam Challenge</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Metric label="Today's Juz" value={`Juz ${snapshot.todayJuz}`} />
        <Metric label="Completed" value={`${snapshot.completedJuz}/30`} />
        <Metric label="Streak" value={`${snapshot.streakDays} days`} />
        <Metric label="Ayahs Read" value={String(snapshot.ayahsRead)} />
        <Metric label="Remaining Days" value={String(snapshot.remainingDays)} />
        <Metric label="Completion" value={`${snapshot.completionPercent}%`} />
      </div>
      <div className="mt-4 h-2 rounded bg-white/10">
        <div className="h-2 rounded bg-goldAccent" style={{ width: `${snapshot.completionPercent}%` }} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-3">
      <p className="text-xs uppercase text-emerald-200">{label}</p>
      <p className="mt-1 text-lg font-medium">{value}</p>
    </div>
  );
}
