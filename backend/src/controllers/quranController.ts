import { Request, Response } from 'express';
import { env } from '../config/env';
import { assertVerifiedQuranSource, immutableAyahPolicyNotice } from '../services/quranContentGuard';

export async function getAyahs(req: Request, res: Response) {
  const sourceUrl = `${env.quranApiBaseUrl}/quran/verses/uthmani`;
  assertVerifiedQuranSource(sourceUrl);

  return res.json({
    source: sourceUrl,
    language: req.query.language ?? 'Arabic',
    policy: immutableAyahPolicyNotice(),
    data: []
  });
}
