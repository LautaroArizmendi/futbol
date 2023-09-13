import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

describe('TeamsController', () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllTeams => should return an array of Teams', async () => {
    const team = {
      name: 'River Plate',
      stadium: 'Más Monumental',
      badges: 'CARP',
      year_fundation: '1901',
    };
    const result = await controller.findAllTeams();
    expect(result).toEqual(team);
  });
});
