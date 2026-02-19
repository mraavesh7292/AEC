import { Router } from 'express';
import { getAyahs } from '../controllers/quranController';

export const quranRoutes = Router();
quranRoutes.get('/ayahs', getAyahs);
