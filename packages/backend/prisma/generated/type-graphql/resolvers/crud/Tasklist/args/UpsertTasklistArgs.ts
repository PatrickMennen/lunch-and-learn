import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListCreateInput } from "../../../inputs/TaskListCreateInput";
import { TaskListUpdateInput } from "../../../inputs/TaskListUpdateInput";
import { TaskListWhereUniqueInput } from "../../../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskListCreateInput, {
    nullable: false
  })
  create!: TaskListCreateInput;

  @TypeGraphQL.Field(_type => TaskListUpdateInput, {
    nullable: false
  })
  update!: TaskListUpdateInput;
}
