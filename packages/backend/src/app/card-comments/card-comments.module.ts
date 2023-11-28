import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';
import { BoardCard } from '../board-cards/entities/board-card.entity';
import { CardCommentsResolver } from './card-comments.resolver';
import { CardCommentsService } from './card-comments.service';

@Module({
  providers: [CardCommentsResolver, CardCommentsService],
  imports: [SequelizeModule.forFeature([User, BoardCard])],
})
export class CardCommentsModule {}
