import mongoose from 'mongoose';

const challengeProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    startDate: { type: Date, required: true },
    completedJuz: { type: Number, default: 0 },
    streakDays: { type: Number, default: 0 },
    missedDays: { type: [Date], default: [] },
    ayahsRead: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const ChallengeProgressModel = mongoose.model('ChallengeProgress', challengeProgressSchema);
