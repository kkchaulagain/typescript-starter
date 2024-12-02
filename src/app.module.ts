import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './modules/players/players.module';
import { DATABASE_CONFIG } from './config/database.config';
import { TeamModule } from './modules/teams/teams.module';
@Module({
  imports: [
    
    MongooseModule.forRoot(DATABASE_CONFIG.uri),
    PlayersModule,
    TeamModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
