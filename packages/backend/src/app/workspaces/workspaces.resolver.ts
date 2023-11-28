import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { WorkspacesService } from './workspaces.service';
import { Workspace } from './entities/workspaces.entity';
import { CreateWorkspaceInput } from './dto/create-workspace.input';
import { UpdateWorkspaceInput } from './dto/update-workspace.input';

@Resolver(() => Workspace)
export class WorkspacesResolver {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Mutation(() => Workspace)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createWorkspace(
    @Args('createWorkspaceInput') createWorkspaceInput: CreateWorkspaceInput
  ) {
    return this.workspacesService.create(createWorkspaceInput);
  }

  @Query(() => [Workspace], { name: 'boards' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.workspacesService.findAll();
  }

  @Query(() => Workspace, { name: 'board' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workspacesService.findById(id);
  }

  @Mutation(() => Workspace)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateBoard(
    @Args('UpdateWorkspaceInput') updateWorkspaceInput: UpdateWorkspaceInput
  ) {
    return this.workspacesService.update(
      updateWorkspaceInput.id,
      updateWorkspaceInput
    );
  }

  @Mutation(() => Workspace)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeBoard(@Args('id', { type: () => Int }) id: number) {
    return this.workspacesService.remove(id);
  }
}
