import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Roles } from '../auth/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RolesGuard)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findById(id);
  }

  @Mutation(() => User)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RolesGuard)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
