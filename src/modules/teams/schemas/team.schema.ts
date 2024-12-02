import { Schema,model } from 'mongoose';

export const TeamSchema = new Schema({
  name: { type: String, required: true },
  coach: { type: String },
  matchesPlayed: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
});

export interface Team extends Document {
      name: string;
      coach: string;
      matchesPlayed: number;
      wins: number;
      losses: number;
}


export const TeamModel =  model<Team>('Team',TeamSchema)