import { ChallengeSnapshot } from '@/types/challenge';
import { QuranAyah } from '@/types/quran';

export const sampleAyahs: QuranAyah[] = [
  {
    key: '1:1',
    surahNumber: 1,
    ayahNumber: 1,
    juz: 1,
    arabicText: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    translations: [
      { language: 'English', translator: 'Saheeh International', source: 'Quran.com', text: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
      { language: 'Hindi', translator: 'Fateh Muhammad Jalandhari (Hindi Rendering)', source: 'Tanzil Verified Catalog', text: 'अल्लाह के नाम से जो बड़ा कृपालु, अत्यन्त दयावान है।' },
      { language: 'Urdu', translator: 'Fateh Muhammad Jalandhari', source: 'Tanzil Verified Catalog', text: 'شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔' },
      { language: 'Bengali', translator: 'Muhiuddin Khan', source: 'Tanzil Verified Catalog', text: 'পরম করুণাময় অসীম দয়ালু আল্লাহর নামে।' },
      { language: 'Hinglish', translator: 'Manual Curated (Verified Translation Based)', source: 'Internal Reviewed Layer', text: 'Allah ke naam se jo nihayat meherbaan, rahem farmane wala hai.' },
      { language: 'Arabic', translator: 'Tanzil Uthmani', source: 'Tanzil', text: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ' }
    ]
  }
];

export const challengeSnapshot: ChallengeSnapshot = {
  todayJuz: 9,
  completedJuz: 8,
  ayahsRead: 1240,
  streakDays: 7,
  remainingDays: 22,
  completionPercent: 26
};
