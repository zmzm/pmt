import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Board } from '../boards/entities/board.entity';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesResolver } from './workspaces.resolver';

@Module({
  providers: [WorkspacesResolver, WorkspacesService],
  imports: [SequelizeModule.forFeature([Board])],
})
export class WorkspacesModule {}
