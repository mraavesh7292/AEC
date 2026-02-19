import { Router } from 'express';
import { getChallengeSummary } from '../controllers/challengeController';
import { requireAuth } from '../middleware/auth';

export const challengeRoutes = Router();
challengeRoutes.get('/summary', requireAuth, getChallengeSummary);
