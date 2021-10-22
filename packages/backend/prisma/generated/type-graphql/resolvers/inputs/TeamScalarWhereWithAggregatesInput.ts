import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TeamScalarWhereWithAggregatesInput[] | undefined;

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
}
