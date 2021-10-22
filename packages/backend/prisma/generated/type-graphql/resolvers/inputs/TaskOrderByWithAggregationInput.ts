import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskAvgOrderByAggregateInput } from "../inputs/TaskAvgOrderByAggregateInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
import { TaskSumOrderByAggregateInput } from "../inputs/TaskSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskOrderByWithAggregationInput {
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
  label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  completed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tasklistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TaskCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TaskAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TaskMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TaskMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaskSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TaskSumOrderByAggregateInput | undefined;
}
