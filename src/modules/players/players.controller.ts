import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './schemas/player.schema';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  // Create a new player
  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiResponse({ status: 201, description: 'The player has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.create(createPlayerDto);
  }

  // Get all players
  @Get()
  @ApiOperation({ summary: 'Get all players' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the list of players.' })
  async findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  // Get a player by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get player by ID' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved the player.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  async findOne(@Param('id') id: string): Promise<Player> {
    return this.playersService.findOne(id);
  }

  // Update a player
  @Put(':id')
  @ApiOperation({ summary: 'Update player by ID' })
  @ApiResponse({ status: 200, description: 'The player has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  async update(
    @Param('id') id: string,
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<Player> {
    return this.playersService.update(id, createPlayerDto);
  }

  // Delete a player
  @Delete(':id')
  @ApiOperation({ summary: 'Delete player by ID' })
  @ApiResponse({ status: 200, description: 'The player has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Player not found.' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.playersService.remove(id);
  }
}
