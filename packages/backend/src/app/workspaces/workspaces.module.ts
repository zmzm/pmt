import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { WorkspacesService } from './workspaces.service';
import { WorkspacesResolver } from './workspaces.resolver';
import { Board } from '../boards/entities/board.entity';

@Module({
  providers: [WorkspacesResolver, WorkspacesService],
  imports: [SequelizeModule.forFeature([Board])],
})
export class WorkspacesModule {}
