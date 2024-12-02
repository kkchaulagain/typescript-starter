import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamService } from './team.service';
import { TeamController } from './teams.controller';
import { TeamSchema } from './schemas/team.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Team', schema: TeamSchema }]),
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
