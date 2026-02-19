import mongoose from 'mongoose';

const hinglishContentSchema = new mongoose.Schema(
  {
    ayahKey: { type: String, required: true, unique: true },
    text: { type: String, required: true },
    basedOnTranslation: { type: String, required: true },
    approvedByAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const HinglishContentModel = mongoose.model('HinglishContent', hinglishContentSchema);
