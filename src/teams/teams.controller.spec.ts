import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

describe('TeamsController', () => {
  let controller: TeamsController;
  const mock = {
    teams: [
      {
        id: 1,
        name: 'River Plate',
        stadium: 'Mas Monumental',
        badges: 'CARP',
        year_fundation: '1901',
      },
      {
        id: 2,
        name: 'Boca Juniors',
        stadium: 'La Bombonera',
        badges: 'CABJ',
        year_fundation: '1905',
      },
    ],
    findAll() {
      return this.teams;
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    })
      .overrideProvider(TeamsService)
      .useValue(mock)
      .compile();
    controller = module.get<TeamsController>(TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllTeams => should return an array of Teams', async () => {
    const result = await controller.findAllTeams();
    expect(result).toEqual(teams);
  });
});
