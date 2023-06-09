import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from '../../teams/entities/team.entity';
import { BoardList } from '../../board-lists/entities/board-list.entity';
import { Workspace } from '../../workspaces/entities/workspaces.entity';

interface BoardCreationAttrs {
  name: string;
  closed: boolean;
}
@ObjectType()
@Table({ tableName: 'boards' })
export class Board extends Model<Board, BoardCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Board id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Board name' })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  @Field(() => Boolean, { description: 'Is board closed', defaultValue: false })
  closed: boolean;

  @ForeignKey(() => Team)
  @Column({ type: DataType.INTEGER })
  teamId: number;

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.INTEGER })
  workspaceId: number;

  @HasMany(() => BoardList)
  @Field(() => [BoardList], { description: 'Board lists' })
  lists: BoardList[];

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => Workspace)
  workspace: Workspace;
}
