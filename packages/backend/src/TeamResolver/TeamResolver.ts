import {Ctx, FieldResolver, Int, Resolver, Root} from "type-graphql";
import {Team} from "../../prisma/generated/type-graphql";
import {Context} from "../index";

@Resolver(of => Team)
export class CustomTeamResolver {
  @FieldResolver(type => Int, { nullable: false })
  async totalNumberOfOpenTasks(@Root() team: Team,
                               @Ctx() { prisma }: Context): Promise<number> {
    return await prisma.task.count({
      where:{
        completed: false,
        AND: {
          Tasklist: {
            teamId: team.id
          }
        }
      },
    })
  }
}
