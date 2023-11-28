import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { CardCommentsService } from './card-comments.service';
import { CardComment } from './entities/card-comment.entity';
import { CreateCardCommentInput } from './dto/create-card-comment.input';
import { UpdateCardCommentInput } from './dto/update-card-comment.input';

@Resolver(() => CardComment)
export class CardCommentsResolver {
  constructor(private readonly cardCommentsService: CardCommentsService) {}

  @Mutation(() => CardComment)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createCardComment(
    @Args('createCardCommentInput')
    createCardCommentInput: CreateCardCommentInput
  ) {
    return this.cardCommentsService.create(createCardCommentInput);
  }

  @Query(() => [CardComment], { name: 'cardComments' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.cardCommentsService.findAll();
  }

  @Query(() => CardComment, { name: 'cardComment' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cardCommentsService.findById(id);
  }

  @Mutation(() => CardComment)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateCardComment(
    @Args('updateCardCommentInput')
    updateCardCommentInput: UpdateCardCommentInput
  ) {
    return this.cardCommentsService.update(
      updateCardCommentInput.id,
      updateCardCommentInput
    );
  }

  @Mutation(() => CardComment)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeCardComment(@Args('id', { type: () => Int }) id: number) {
    return this.cardCommentsService.remove(id);
  }
}
