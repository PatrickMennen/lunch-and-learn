import { Ctx, FieldResolver, Int, Resolver, Root } from 'type-graphql';
import { Team } from '../../prisma/generated/type-graphql';
import { Context } from '../index';
import { PrismaClient } from '@prisma/client';

const numberOfTasksForTeamQuery = async (
  prisma: PrismaClient,
  teamId: number,
  completed = false,
) => {
  return await prisma.task.count({
    where: {
      completed,
      AND: {
        Tasklist: {
          teamId,
        },
      },
    },
  });
};

@Resolver((of) => Team)
export class CustomTeamResolver {
  @FieldResolver((type) => Int, { nullable: false })
  async totalNumberOfTasks(@Root() team: Team, @Ctx() { prisma }: Context): Promise<number> {
    return await prisma.task.count({
      where: {
        Tasklist: {
          teamId: team.id,
        },
      },
    });
  }

  @FieldResolver((type) => Int, { nullable: false })
  async totalNumberOfCompletedTasks(
    @Root() team: Team,
    @Ctx() { prisma }: Context,
  ): Promise<number> {
    return await numberOfTasksForTeamQuery(prisma, team.id, true);
  }

  @FieldResolver((type) => Int, { nullable: false })
  async totalNumberOfOpenTasks(@Root() team: Team, @Ctx() { prisma }: Context): Promise<number> {
    return await numberOfTasksForTeamQuery(prisma, team.id);
  }
}
