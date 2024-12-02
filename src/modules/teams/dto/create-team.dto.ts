import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateTeamDto {
  @ApiProperty()
  @IsString()
  name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  coach?: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  matchesPlayed?: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  wins?: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  losses?: number;
}