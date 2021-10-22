import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListAvgOrderByAggregateInput } from "../inputs/TaskListAvgOrderByAggregateInput";
import { TaskListCountOrderByAggregateInput } from "../inputs/TaskListCountOrderByAggregateInput";
import { TaskListMaxOrderByAggregateInput } from "../inputs/TaskListMaxOrderByAggregateInput";
import { TaskListMinOrderByAggregateInput } from "../inputs/TaskListMinOrderByAggregateInput";
import { TaskListSumOrderByAggregateInput } from "../inputs/TaskListSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  teamId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskListCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskListCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskListAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskListAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskListMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskListMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskListMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskListMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskListSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskListSumOrderByAggregateInput | undefined;
}
