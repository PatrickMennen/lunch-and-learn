import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTaskListArgs } from "./args/AggregateTaskListArgs";
import { TaskList } from "../../../models/TaskList";
import { AggregateTaskList } from "../../outputs/AggregateTaskList";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskList)
export class AggregateTaskListResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskList, {
    nullable: false
  })
  async aggregateTaskList(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskListArgs): Promise<AggregateTaskList> {
    return getPrismaFromContext(ctx).taskList.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
