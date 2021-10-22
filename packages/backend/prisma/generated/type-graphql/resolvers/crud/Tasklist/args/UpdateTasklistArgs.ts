import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListUpdateInput } from "../../../inputs/TaskListUpdateInput";
import { TaskListWhereUniqueInput } from "../../../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListUpdateInput, {
    nullable: false
  })
  data!: TaskListUpdateInput;

  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;
}
