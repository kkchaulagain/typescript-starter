import { IsString, IsInt, IsIn, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  @IsIn(['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'])
  role: string;

  @IsString()
  teamId?: string;

  @IsOptional()
  @IsInt()
  runs?: number;

  @IsOptional()
  @IsInt()
  wickets?: number;

  @IsOptional()
  @IsInt()
  catches?: number;
}
