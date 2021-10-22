import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListWhereInput } from "../../../inputs/TaskListWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  where?: TaskListWhereInput | undefined;
}
