import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListOrderByWithRelationInput } from "../../../inputs/TaskListOrderByWithRelationInput";
import { TaskListWhereInput } from "../../../inputs/TaskListWhereInput";
import { TaskListWhereUniqueInput } from "../../../inputs/TaskListWhereUniqueInput";
import { TaskListScalarFieldEnum } from "../../../../enums/TaskListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  where?: TaskListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskListOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskListOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "name" | "teamId"> | undefined;
}
