import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateWithoutTasksInput } from "../inputs/TaskListCreateWithoutTasksInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskListCreateWithoutTasksInput, {
    nullable: false
  })
  create!: TaskListCreateWithoutTasksInput;
}
