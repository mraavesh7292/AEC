import { Router } from 'express';
import { approveHinglish, getSystemPolicy } from '../controllers/adminController';
import { requireAdmin, requireAuth } from '../middleware/auth';

export const adminRoutes = Router();
adminRoutes.get('/policy', requireAuth, requireAdmin, getSystemPolicy);
adminRoutes.patch('/hinglish/:id/approve', requireAuth, requireAdmin, approveHinglish);
