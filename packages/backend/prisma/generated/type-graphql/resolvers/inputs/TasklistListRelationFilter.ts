import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListWhereInput } from "../inputs/TaskListWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListListRelationFilter {
  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  every?: TaskListWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  some?: TaskListWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  none?: TaskListWhereInput | undefined;
}
