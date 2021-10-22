import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskListOrderByWithAggregationInput } from "../../../inputs/TaskListOrderByWithAggregationInput";
import { TaskListScalarWhereWithAggregatesInput } from "../../../inputs/TaskListScalarWhereWithAggregatesInput";
import { TaskListWhereInput } from "../../../inputs/TaskListWhereInput";
import { TaskListScalarFieldEnum } from "../../../../enums/TaskListScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTaskListArgs {
  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  where?: TaskListWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskListOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TaskListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "name" | "teamId">;

  @TypeGraphQL.Field(_type => TaskListScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TaskListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
