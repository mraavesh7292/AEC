import { QuranAyah } from '@/types/quran';

type Props = {
  ayahs: QuranAyah[];
};

export function QuranReader({ ayahs }: Props) {
  return (
    <div className="space-y-4">
      {ayahs.map((ayah) => (
        <article key={ayah.key} className="rounded-xl border border-goldAccent/40 bg-black/25 p-5">
          <p className="text-right text-3xl leading-loose text-emerald-50">{ayah.arabicText}</p>
          {ayah.translations.map((translation) => (
            <div key={translation.language} className="mt-3 rounded-lg bg-white/5 p-3">
              <p className="text-sm text-goldAccent">
                {translation.language} — {translation.translator}
              </p>
              <p className="mt-1 text-sm text-emerald-50">{translation.text || 'Translation not available.'}</p>
            </div>
          ))}
          <p className="mt-2 text-xs text-emerald-200">
            Hinglish rendering based strictly on verified translation.
          </p>
        </article>
      ))}
    </div>
  );
}
