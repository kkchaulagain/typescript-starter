import { Schema } from 'mongoose';

export const MatchSchema = new Schema({
  team1: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  team2: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  result: { type: String },
  playerPerformances: [
    {
      playerId: { type: Schema.Types.ObjectId, ref: 'Player', required: true },
      runs: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      catches: { type: Number, default: 0 },
      fantasyPointsEarned: { type: Number, default: 0 },
    },
  ],
  lastUpdated: { type: Date, default: Date.now },
});
