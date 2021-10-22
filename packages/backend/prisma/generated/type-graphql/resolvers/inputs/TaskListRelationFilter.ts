import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListWhereInput } from "../inputs/TaskListWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListRelationFilter {
  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  is?: TaskListWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereInput, {
    nullable: true
  })
  isNot?: TaskListWhereInput | undefined;
}
