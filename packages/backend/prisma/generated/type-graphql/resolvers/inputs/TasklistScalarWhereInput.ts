import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListScalarWhereInput {
  @TypeGraphQL.Field(_type => [TaskListScalarWhereInput], {
    nullable: true
  })
  AND?: TaskListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarWhereInput], {
    nullable: true
  })
  OR?: TaskListScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarWhereInput], {
    nullable: true
  })
  NOT?: TaskListScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  teamId?: IntNullableFilter | undefined;
}
