import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { UserModel } from '../models/User';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await UserModel.create({ name, email, passwordHash });
  return res.status(201).json({ id: user.id, email: user.email });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ sub: user.id, role: user.role }, env.jwtSecret, { expiresIn: '12h' });
  return res.json({ token });
}
