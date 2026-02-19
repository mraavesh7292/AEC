import { QuranAyah } from '@/types/quran';

export function AyahCardPreview({ ayah }: { ayah: QuranAyah }) {
  const english = ayah.translations.find((entry) => entry.language === 'English');

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-goldAccent/40 bg-gradient-to-b from-emerald-900 to-emerald-950 p-6 shadow-xl">
      <p className="text-right text-3xl text-emerald-50">{ayah.arabicText}</p>
      <p className="mt-4 text-sm text-emerald-100">{english?.text ?? 'Translation not available.'}</p>
      <p className="mt-2 text-xs text-goldAccent">Translator: {english?.translator ?? 'N/A'}</p>
      <p className="mt-4 text-xs text-emerald-200">Quran text is immutable and sourced from verified databases.</p>
    </div>
  );
}
