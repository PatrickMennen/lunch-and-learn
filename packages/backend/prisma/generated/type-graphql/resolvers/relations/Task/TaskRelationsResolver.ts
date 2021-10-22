import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { TaskList } from "../../../models/TaskList";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TaskList, {
    nullable: true
  })
  async Tasklist(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<TaskList | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).Tasklist({});
  }
}
