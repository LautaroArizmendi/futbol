import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private TeamRepository: Repository<Team>,
  ) {}

  add(createTeamDto: CreateTeamDto) {
    return this.TeamRepository.save(createTeamDto);
  }

  findAll() {
    return this.TeamRepository.find();
  }

  async findById(id: number) {
    const result = await this.TeamRepository.find({
      where: { id },
      relations: { players: true },
    });
    if (result === null)
      throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team[]> {
    await this.TeamRepository.update({ id }, updateTeamDto);
    return await this.findById(id);
  }

  async delete(id: number) {
    await this.findById(id);
    await this.TeamRepository.delete({ id });
  }
}
