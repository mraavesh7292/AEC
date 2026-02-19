import { AyahCardPreview } from '@/components/share/AyahCardPreview';
import { sampleAyahs } from '@/lib/mockData';

export default function SharePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-goldAccent">Ayah Card Generator</h1>
      <p className="mt-2 text-sm text-emerald-100">Ayah text is locked and cannot be edited.</p>
      <div className="mt-6">
        <AyahCardPreview ayah={sampleAyahs[0]} />
      </div>
    </main>
  );
}
