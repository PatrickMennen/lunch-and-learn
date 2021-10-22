import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListCreateInput } from "../../../inputs/TaskListCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListCreateInput, {
    nullable: false
  })
  data!: TaskListCreateInput;
}
