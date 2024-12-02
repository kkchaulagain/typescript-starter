import { Schema, Document ,model} from 'mongoose';

// Define the Player Schema
export const PlayerSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  role: {
    type: String,
    enum: ['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'],
    required: true,
  },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team', required: false },
  stats: {
    runs: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    catches: { type: Number, default: 0 },
  },
  fantasyPoints: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

// Define the Player Interface
export interface Player extends Document {
  name: string;
  age: number;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';
  teamId?: string;  // Changed to string to match the ObjectId of Team
  stats: {
    runs: number;
    wickets: number;
    catches: number;
  };
  fantasyPoints: number;
  lastUpdated: Date;
}


export const PlayerModel = model<Player>('Player', PlayerSchema);  // This creates the model
