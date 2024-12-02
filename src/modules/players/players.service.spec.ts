import { Test, TestingModule } from '@nestjs/testing';
import { PlayersService } from './players.service';
import { getModelToken } from '@nestjs/mongoose';
import { PlayerModel } from './schemas/player.schema';  // Import the actual Player model
import { Model } from 'mongoose';

// Mock playerModel using jest
const mockPlayerModel = {
  new: jest.fn().mockResolvedValue({
    save: jest.fn().mockResolvedValue(true),  // Mock save method
  }),
  find: jest.fn().mockResolvedValue([{
    name: 'Player 1',
    age: 30,
    role: 'Batsman',
    teamId: 'team-id-123',
  }]),  // Mock find method
  findOne: jest.fn().mockResolvedValue({
    name: 'Player 1',
    age: 30,
    role: 'Batsman',
    teamId: 'team-id-123',
  }),  // Mock findOne method
};

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersService,
        {
          provide: getModelToken(PlayerModel.name),  // Use the model, not just the type
          useValue: mockPlayerModel,  // Provide the mock model
        },
      ],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should create a new player', async () => {
    const createPlayerDto = {
      name: 'Player 1',
      age: 30,
      role: 'Batsman',
      teamId: 'team-id-123',
    };

    const player = await service.create(createPlayerDto);

    expect(player).toHaveProperty('save');
    expect(mockPlayerModel.new).toHaveBeenCalledWith(createPlayerDto);  // Check if the playerModel was called with the correct data
  });

  it('should find all players', async () => {
    const players = await service.findAll();
    expect(players).toEqual([{
      name: 'Player 1',
      age: 30,
      role: 'Batsman',
      teamId: 'team-id-123',
    }]);
    expect(mockPlayerModel.find).toHaveBeenCalled();
  });

  it('should find one player', async () => {
    const player = await service.findOne('team-id-123');
    expect(player).toEqual({
      name: 'Player 1',
      age: 30,
      role: 'Batsman',
      teamId: 'team-id-123',
    });
    expect(mockPlayerModel.findOne).toHaveBeenCalledWith({ _id: 'team-id-123' });
  });
});
