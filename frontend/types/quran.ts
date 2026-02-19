export type Translation = {
  language: 'Arabic' | 'English' | 'Hindi' | 'Urdu' | 'Bengali' | 'Hinglish';
  translator: string;
  source: string;
  text: string;
};

export type QuranAyah = {
  key: string;
  surahNumber: number;
  ayahNumber: number;
  juz: number;
  arabicText: string;
  translations: Translation[];
};
