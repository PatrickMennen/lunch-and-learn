import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamAvgOrderByAggregateInput } from "../inputs/TeamAvgOrderByAggregateInput";
import { TeamCountOrderByAggregateInput } from "../inputs/TeamCountOrderByAggregateInput";
import { TeamMaxOrderByAggregateInput } from "../inputs/TeamMaxOrderByAggregateInput";
import { TeamMinOrderByAggregateInput } from "../inputs/TeamMinOrderByAggregateInput";
import { TeamSumOrderByAggregateInput } from "../inputs/TeamSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TeamCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TeamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TeamAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TeamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TeamMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TeamSumOrderByAggregateInput | undefined;
}
