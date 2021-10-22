import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateNestedOneWithoutTasksInput } from "../inputs/TaskListCreateNestedOneWithoutTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  completed?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskListCreateNestedOneWithoutTasksInput, {
    nullable: true
  })
  Tasklist?: TaskListCreateNestedOneWithoutTasksInput | undefined;
}
