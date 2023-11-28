import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateBoardCardInput } from './create-board-card.input';

@InputType()
export class UpdateBoardCardInput extends PartialType(CreateBoardCardInput) {
  @Field(() => Int, { description: 'Card id' })
  id: number;
}
