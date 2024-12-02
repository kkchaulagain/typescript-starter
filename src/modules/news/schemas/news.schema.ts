import { Schema } from 'mongoose';

export const NewsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Admin' },
  datePublished: { type: Date, default: Date.now },
  tags: [{ type: String }],
  relatedPlayers: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
});
