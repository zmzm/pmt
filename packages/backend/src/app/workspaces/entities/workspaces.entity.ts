import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Board } from '../../boards/entities/board.entity';

interface WorkspaceCreationAttrs {
  name: string;
}
@ObjectType()
@Table({ tableName: 'workspaces' })
export class Workspace extends Model<Workspace, WorkspaceCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  @Field(() => Int, { description: 'Workspace id' })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field(() => String, { description: 'Workspace name' })
  name: string;

  @HasMany(() => Board)
  @Field(() => [Board], { description: 'Workspace boards' })
  boards: Board[];
}
