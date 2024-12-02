import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersService } from './players.service';
import { PlayerSchema } from './schemas/player.schema';
import { PlayersController } from './players.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema }]),
  ],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
