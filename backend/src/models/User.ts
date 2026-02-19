import mongoose, { InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    currentJuz: { type: Number, default: 1 }
  },
  { timestamps: true }
);

export type UserDocument = InferSchemaType<typeof userSchema>;
export const UserModel = mongoose.model('User', userSchema);
