import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CardComment } from '../card-comments/entities/card-comment.entity';
import { Role } from '../roles/entities/role.entity';
import { UserRoles } from '../roles/entities/userRoles.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [SequelizeModule.forFeature([CardComment, Role, UserRoles])],
})
export class UsersModule {}
