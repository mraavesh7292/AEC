const adminModules = [
  'Manage supported verified translations',
  'Manage approved audio recitation sources',
  'Monitor user activity and challenge analytics',
  'Approve manually curated Hinglish entries',
  'System configuration and role management'
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-goldAccent">Admin Panel</h1>
      <p className="mt-2 text-sm text-emerald-100">Arabic Quran text is immutable and excluded from admin write actions.</p>
      <ul className="mt-5 space-y-2 rounded-xl border border-goldAccent/30 bg-black/20 p-4 text-sm text-emerald-100">
        {adminModules.map((module) => (
          <li key={module}>• {module}</li>
        ))}
      </ul>
    </main>
  );
}
