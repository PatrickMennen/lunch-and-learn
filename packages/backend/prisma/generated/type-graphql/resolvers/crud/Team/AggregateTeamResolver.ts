import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTeamArgs } from "./args/AggregateTeamArgs";
import { Team } from "../../../models/Team";
import { AggregateTeam } from "../../outputs/AggregateTeam";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Team)
export class AggregateTeamResolver {
  @TypeGraphQL.Query(_returns => AggregateTeam, {
    nullable: false
  })
  async aggregateTeam(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTeamArgs): Promise<AggregateTeam> {
    return getPrismaFromContext(ctx).team.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
