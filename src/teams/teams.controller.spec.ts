import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Player } from 'src/players/entities/player.entity';
import { Team } from './entities/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

describe('TeamsController', () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [Player, Team],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Team]),
      ],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('findAllTeams => should return an array of Teams', async () => {
  //   const team = {
  //     name: 'River Plate',
  //     stadium: 'Más Monumental',
  //     badges: 'CARP',
  //     year_fundation: '1901',
  //   };
  //   const result = await controller.findAllTeams();
  //   expect(result).toEqual(team);
  // });
});
