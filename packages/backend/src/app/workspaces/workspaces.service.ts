import { Injectable } from '@nestjs/common';
import { Workspace } from './entities/workspaces.entity';
import { CreateWorkspaceInput } from './dto/create-workspace.input';
import { UpdateWorkspaceInput } from './dto/update-workspace.input';

@Injectable()
export class WorkspacesService {
  constructor(private readonly workspaceModel: typeof Workspace) {}

  create(createWorkspaceInput: CreateWorkspaceInput) {
    return this.workspaceModel.create(createWorkspaceInput);
  }

  findAll() {
    return this.workspaceModel.findAll();
  }

  findById(id: number) {
    return this.workspaceModel.findOne({ where: { id } });
  }

  async update(id: number, updateWorkspaceInput: UpdateWorkspaceInput) {
    const workspace = await this.findById(id);

    await workspace.update(updateWorkspaceInput);
    await workspace.save();

    return workspace;
  }

  async remove(id: number) {
    const workspace = await this.findById(id);

    await workspace.destroy();

    return id;
  }
}
