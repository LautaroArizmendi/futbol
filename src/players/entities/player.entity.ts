import { Team } from 'src/teams/entities/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nationality: string;

  @Column()
  goals: number;

  @Column()
  age: number;

  @Column()
  position: string;
  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
