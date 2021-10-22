import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskListScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  teamId?: IntNullableWithAggregatesFilter | undefined;
}
