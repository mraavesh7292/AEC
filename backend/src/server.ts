import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { connectDatabase } from './config/database';
import { env } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import { adminRoutes } from './routes/adminRoutes';
import { authRoutes } from './routes/authRoutes';
import { challengeRoutes } from './routes/challengeRoutes';
import { quranRoutes } from './routes/quranRoutes';

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 250 }));
app.use(express.json());
app.use(morgan('tiny'));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/quran', quranRoutes);
app.use('/api/challenge', challengeRoutes);
app.use('/api/admin', adminRoutes);
app.use(errorHandler);

connectDatabase()
  .then(() => {
    app.listen(env.port, () => {
      // eslint-disable-next-line no-console
      console.log(`API running on port ${env.port}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Database connection failed', error);
    process.exit(1);
  });
