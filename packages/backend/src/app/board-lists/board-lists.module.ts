import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BoardCard } from '..//board-cards/entities/board-card.entity';
import { Board } from '..//boards/entities/board.entity';
import { BoardListsService } from './board-lists.service';
import { BoardListsResolver } from './board-lists.resolver';

@Module({
  providers: [BoardListsResolver, BoardListsService],
  imports: [SequelizeModule.forFeature([BoardCard, Board])],
})
export class BoardListsModule {}
