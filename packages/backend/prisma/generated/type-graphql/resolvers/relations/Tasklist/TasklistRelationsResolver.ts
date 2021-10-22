import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { TaskList } from "../../../models/TaskList";
import { Team } from "../../../models/Team";
import { TaskListTasksArgs } from "./args/TaskListTasksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskList)
export class TaskListRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Root() taskList: TaskList, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskListTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).taskList.findUnique({
      where: {
        id: taskList.id,
      },
    }).tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => Team, {
    nullable: true
  })
  async Team(@TypeGraphQL.Root() taskList: TaskList, @TypeGraphQL.Ctx() ctx: any): Promise<Team | null> {
    return getPrismaFromContext(ctx).taskList.findUnique({
      where: {
        id: taskList.id,
      },
    }).Team({});
  }
}
