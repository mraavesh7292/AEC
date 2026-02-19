const ALLOWED_SOURCES = ['tanzil.net', 'api.quran.com', 'quranenc.com'];

export function assertVerifiedQuranSource(url: string) {
  const isAllowed = ALLOWED_SOURCES.some((source) => url.includes(source));
  if (!isAllowed) {
    throw new Error('Unverified Quran source blocked by authenticity policy');
  }
}

export function immutableAyahPolicyNotice() {
  return {
    policy: 'Arabic Quran text is immutable. No AI generation, no paraphrasing, no modification.',
    fallback: 'Translation not available.'
  };
}
