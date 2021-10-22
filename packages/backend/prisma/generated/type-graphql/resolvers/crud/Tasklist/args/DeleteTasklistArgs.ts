import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListWhereUniqueInput } from "../../../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;
}
