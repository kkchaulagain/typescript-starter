import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    Put, 
    Delete, 
    UsePipes, 
    ValidationPipe 
  } from '@nestjs/common';
  import { 
    ApiTags, 
    ApiOperation, 
    ApiResponse, 
    ApiParam 
  } from '@nestjs/swagger';
  import { TeamService } from './team.service';
import { Team } from './schemas/team.schema';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
  @ApiTags('Teams')
  @Controller('teams')
  export class TeamController {
    constructor(private readonly teamService: TeamService) {}
  
    @Post()
    @ApiOperation({ summary: 'Create a new team' })
    @ApiResponse({ status: 201, description: 'The team has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @UsePipes(new ValidationPipe())
    async create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
      return await this.teamService.create(createTeamDto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all teams' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved the list of teams.' })
    async findAll(): Promise<Team[]> {
      return await this.teamService.findAll();
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get team by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved the team.' })
    @ApiResponse({ status: 404, description: 'Team not found.' })
    @ApiParam({ name: 'id', description: 'Team ID', type: 'string' })
    async findOne(@Param('id') id: string): Promise<Team> {
      return await this.teamService.findOne(id);
    }
  
    @Put(':id')
    @ApiOperation({ summary: 'Update team by ID' })
    @ApiResponse({ status: 200, description: 'The team has been successfully updated.' })
    @ApiResponse({ status: 404, description: 'Team not found.' })
    @ApiParam({ name: 'id', description: 'Team ID', type: 'string' })
    @UsePipes(new ValidationPipe())
    async update(
      @Param('id') id: string, 
      @Body() updateTeamDto: UpdateTeamDto
    ): Promise<Team> {
      return await this.teamService.update(id, updateTeamDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete team by ID' })
    @ApiResponse({ status: 200, description: 'The team has been successfully deleted.' })
    @ApiResponse({ status: 404, description: 'Team not found.' })
    @ApiParam({ name: 'id', description: 'Team ID', type: 'string' })
    async remove(@Param('id') id: string): Promise<Team> {
      return await this.teamService.remove(id);
    }
  }