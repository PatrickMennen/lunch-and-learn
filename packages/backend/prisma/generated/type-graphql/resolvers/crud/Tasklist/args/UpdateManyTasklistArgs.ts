import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListUpdateManyMutationInput } from "../../../inputs/TaskListUpdateManyMutationInput";
import { TaskListWhereInput } from "../../../inputs/TaskListWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskListUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  where?: TaskListWhereInput | undefined;
}
