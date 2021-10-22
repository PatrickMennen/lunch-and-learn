import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListListRelationFilter } from "../inputs/TaskListListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamWhereInput {
  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  AND?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  OR?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamWhereInput], {
    nullable: true
  })
  NOT?: TeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListListRelationFilter, {
    nullable: true
  })
  tasklists?: TaskListListRelationFilter | undefined;
}
