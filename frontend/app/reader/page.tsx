import { QuranReader } from '@/components/reader/QuranReader';
import { sampleAyahs } from '@/lib/mockData';

export default function ReaderPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-goldAccent">Quran Reader</h1>
      <p className="mt-2 text-sm text-emerald-100">
        Arabic text must be fetched only from authenticated sources such as Tanzil Uthmani; no AI generation, no rewriting.
      </p>
      <QuranReader ayahs={sampleAyahs} />
    </main>
  );
}
