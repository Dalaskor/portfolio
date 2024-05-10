import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Action, Prisma } from '@prisma/client';
import { ACTION_NOT_FOUND_ERROR } from './constants/error.const';

@Injectable()
export class ActionService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly actionRepo = this.prisma.action;

  async create(data: Prisma.ActionCreateInput): Promise<Action> {
    return this.actionRepo.create({ data });
  }

  async getList(): Promise<Action[]> {
    return this.actionRepo.findMany();
  }

  async throwErrorIfNotExist(
    where: Prisma.ActionWhereUniqueInput,
  ): Promise<void> {
    const action = await this.actionRepo.findUnique({
      where,
      select: { id: true },
    });
    if (!action) {
      throw new NotFoundException(ACTION_NOT_FOUND_ERROR);
    }
  }

  async update(
    where: Prisma.ActionWhereUniqueInput,
    data: Prisma.ActionUpdateInput,
  ): Promise<Action> {
    await this.throwErrorIfNotExist(where);
    return this.actionRepo.update({ where, data });
  }

  async delete(where: Prisma.ActionWhereUniqueInput): Promise<Action> {
    await this.throwErrorIfNotExist(where);
    return this.actionRepo.delete({ where });
  }
}
