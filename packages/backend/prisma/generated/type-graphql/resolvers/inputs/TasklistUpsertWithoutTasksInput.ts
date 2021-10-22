import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateWithoutTasksInput } from "../inputs/TaskListCreateWithoutTasksInput";
import { TaskListUpdateWithoutTasksInput } from "../inputs/TaskListUpdateWithoutTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpsertWithoutTasksInput {
  @TypeGraphQL.Field(_type => TaskListUpdateWithoutTasksInput, {
    nullable: false
  })
  update!: TaskListUpdateWithoutTasksInput;

  @TypeGraphQL.Field(_type => TaskListCreateWithoutTasksInput, {
    nullable: false
  })
  create!: TaskListCreateWithoutTasksInput;
}
