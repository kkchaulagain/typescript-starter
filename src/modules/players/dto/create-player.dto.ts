import { IsString, IsInt, IsEnum, IsOptional, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreatePlayerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
  @IsEnum(['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'])
  role: string;

  @ApiProperty({ required: false })
  @IsOptional()  // Makes teamId optional
  @IsMongoId()
  teamId?: Types.ObjectId;  // This field is now optional

  @ApiProperty()
  stats: {
    runs: number;
    wickets: number;
    catches: number;
  };
}
