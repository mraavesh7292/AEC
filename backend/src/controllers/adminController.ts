import { Request, Response } from 'express';
import { HinglishContentModel } from '../models/HinglishContent';

export async function approveHinglish(req: Request, res: Response) {
  const item = await HinglishContentModel.findByIdAndUpdate(req.params.id, { approvedByAdmin: true }, { new: true });
  return res.json(item);
}

export function getSystemPolicy(_req: Request, res: Response) {
  return res.json({
    arabicTextEditable: false,
    note: 'Admin is prohibited from editing original Quran Arabic text.'
  });
}
