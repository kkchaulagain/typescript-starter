import { Schema } from 'mongoose';

export const TeamSchema = new Schema({
  name: { type: String, required: true },
  coach: { type: String },
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
  matchesPlayed: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
});
