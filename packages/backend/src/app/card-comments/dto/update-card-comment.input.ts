import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateCardCommentInput } from './create-card-comment.input';

@InputType()
export class UpdateCardCommentInput extends PartialType(
  CreateCardCommentInput
) {
  @Field(() => Int, { description: 'Comment id' })
  id: number;
}
