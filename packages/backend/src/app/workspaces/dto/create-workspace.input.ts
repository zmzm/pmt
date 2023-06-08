import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkspaceInput {
  @Field(() => String, { description: 'Workspace name' })
  name: string;
}
