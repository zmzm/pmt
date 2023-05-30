import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardCardsService } from './board-cards.service';
import { BoardCard } from './entities/board-card.entity';
import { CreateBoardCardInput } from './dto/create-board-card.input';
import { UpdateBoardCardInput } from './dto/update-board-card.input';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Resolver(() => BoardCard)
export class BoardCardsResolver {
  constructor(private readonly boardCardsService: BoardCardsService) {}

  @Mutation(() => BoardCard)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createBoardCard(
    @Args('createBoardCardInput') createBoardCardInput: CreateBoardCardInput
  ) {
    return this.boardCardsService.create(createBoardCardInput);
  }

  @Query(() => [BoardCard], { name: 'boardCards' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.boardCardsService.findAll();
  }

  @Query(() => BoardCard, { name: 'boardCard' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardCardsService.findById(id);
  }

  @Mutation(() => BoardCard)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateBoardCard(
    @Args('updateBoardCardInput') updateBoardCardInput: UpdateBoardCardInput
  ) {
    return this.boardCardsService.update(
      updateBoardCardInput.id,
      updateBoardCardInput
    );
  }

  @Mutation(() => BoardCard)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeBoardCard(@Args('id', { type: () => Int }) id: number) {
    return this.boardCardsService.remove(id);
  }
}
