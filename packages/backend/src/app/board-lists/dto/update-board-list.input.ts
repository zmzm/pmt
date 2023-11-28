import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateBoardListInput } from './create-board-list.input';

@InputType()
export class UpdateBoardListInput extends PartialType(CreateBoardListInput) {
  @Field(() => Int, { description: 'Board list id' })
  id: number;
}
