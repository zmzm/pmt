import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Resolver(() => Board)
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  @Mutation(() => Board)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createBoard(@Args('createBoardInput') createBoardInput: CreateBoardInput) {
    return this.boardsService.create(createBoardInput);
  }

  @Query(() => [Board], { name: 'boards' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.boardsService.findAll();
  }

  @Query(() => Board, { name: 'board' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.boardsService.findById(id);
  }

  @Mutation(() => Board)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateBoard(@Args('updateBoardInput') updateBoardInput: UpdateBoardInput) {
    return this.boardsService.update(updateBoardInput.id, updateBoardInput);
  }

  @Mutation(() => Board)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeBoard(@Args('id', { type: () => Int }) id: number) {
    return this.boardsService.remove(id);
  }
}
