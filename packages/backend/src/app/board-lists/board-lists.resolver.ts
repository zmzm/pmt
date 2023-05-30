import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardListsService } from './board-lists.service';
import { BoardList } from './entities/board-list.entity';
import { CreateBoardListInput } from './dto/create-board-list.input';
import { UpdateBoardListInput } from './dto/update-board-list.input';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Resolver(() => BoardList)
export class BoardListsResolver {
  constructor(private readonly boardListsService: BoardListsService) {}

  @Mutation(() => BoardList)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createBoardList(
    @Args('createBoardListInput') createBoardListInput: CreateBoardListInput
  ) {
    return this.boardListsService.create(createBoardListInput);
  }

  @Query(() => [BoardList], { name: 'boardLists' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.boardListsService.findAll();
  }

  @Query(() => BoardList, { name: 'boardList' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardListsService.findById(id);
  }

  @Mutation(() => BoardList)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateBoardList(
    @Args('updateBoardListInput') updateBoardListInput: UpdateBoardListInput
  ) {
    return this.boardListsService.update(
      updateBoardListInput.id,
      updateBoardListInput
    );
  }

  @Mutation(() => BoardList)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeBoardList(@Args('id', { type: () => Int }) id: number) {
    return this.boardListsService.remove(id);
  }
}
