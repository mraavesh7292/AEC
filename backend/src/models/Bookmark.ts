import mongoose from 'mongoose';

const bookmarkSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    surahNumber: { type: Number, required: true },
    ayahNumber: { type: Number, required: true },
    note: { type: String, default: '' }
  },
  { timestamps: true }
);

export const BookmarkModel = mongoose.model('Bookmark', bookmarkSchema);
