import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private PlayerRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto) {
    return this.PlayerRepository.save(createPlayerDto);
  }

  findAll() {
    return this.PlayerRepository.find();
  }

  async findById(id: number) {
    const result = await this.PlayerRepository.findOne({
      where: { id },
      relations: { team: true },
    });

    if (result === null)
      throw new HttpException('Player not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async update(id: number, updateplayerDto: UpdatePlayerDto) {
    await this.PlayerRepository.update({ id }, updateplayerDto);
    return await this.findById(id);
  }

  async remove(id: number) {
    await this.findById(id);
    await this.PlayerRepository.delete({ id });
  }
}
