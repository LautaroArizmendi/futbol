import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nacionalidad: string;

  @Column()
  goles: number;
  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
