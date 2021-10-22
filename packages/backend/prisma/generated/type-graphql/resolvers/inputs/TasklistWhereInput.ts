import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListWhereInput {
  @TypeGraphQL.Field(_type => [TaskListWhereInput], {
    nullable: true
  })
  AND?: TaskListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereInput], {
    nullable: true
  })
  OR?: TaskListWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereInput], {
    nullable: true
  })
  NOT?: TaskListWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  tasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TeamRelationFilter, {
    nullable: true
  })
  Team?: TeamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  teamId?: IntNullableFilter | undefined;
}
