import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from './schemas/team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export class TeamService {
  constructor(
    @InjectModel('Team') private readonly teamModel: Model<Team>
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const newTeam = new this.teamModel(createTeamDto);
    return await newTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return await this.teamModel.find().exec();
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamModel.findById(id).exec();
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
    return team;
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const existingTeam = await this.teamModel.findByIdAndUpdate(
      id, 
      updateTeamDto, 
      { new: true }
    ).exec();

    if (!existingTeam) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    return existingTeam;
  }

  async remove(id: string): Promise<Team> {
    const deletedTeam = await this.teamModel.findByIdAndDelete(id).exec();
    
    if (!deletedTeam) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    return deletedTeam;
  }
}