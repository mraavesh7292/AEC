import { Request, Response } from 'express';
import { ChallengeProgressModel } from '../models/ChallengeProgress';

export async function getChallengeSummary(req: Request, res: Response) {
  const userId = (req as Request & { user: { sub: string } }).user.sub;
  const progress = await ChallengeProgressModel.findOne({ userId });
  if (!progress) return res.json({ message: 'Challenge not started' });

  const completionPercent = Math.round((progress.completedJuz / 30) * 100);
  return res.json({
    todayAssignedJuz: progress.completedJuz + 1,
    completedJuz: progress.completedJuz,
    totalAyahsRead: progress.ayahsRead,
    completionPercent,
    streakCount: progress.streakDays,
    remainingDays: 30 - progress.completedJuz
  });
}
