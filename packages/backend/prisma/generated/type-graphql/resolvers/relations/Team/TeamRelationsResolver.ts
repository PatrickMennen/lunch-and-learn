import * as TypeGraphQL from "type-graphql";
import { TaskList } from "../../../models/TaskList";
import { Team } from "../../../models/Team";
import { TeamTasklistsArgs } from "./args/TeamTasklistsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class TeamRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TaskList], {
    nullable: false
  })
  async tasklists(@TypeGraphQL.Root() team: Team, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TeamTasklistsArgs): Promise<TaskList[]> {
    return getPrismaFromContext(ctx).team.findUnique({
      where: {
        id: team.id,
      },
    }).tasklists(args);
  }
}
