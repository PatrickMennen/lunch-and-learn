import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedManyWithoutTasklistInput } from "../inputs/TaskCreateNestedManyWithoutTasklistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateWithoutTeamInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutTasklistInput, {
    nullable: true
  })
  tasks?: TaskCreateNestedManyWithoutTasklistInput | undefined;
}
