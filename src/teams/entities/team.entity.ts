import { Player } from 'src/players/entities/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  stadium: string;

  @Column()
  badges: string;

  @Column()
  year_fundation: number;
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
