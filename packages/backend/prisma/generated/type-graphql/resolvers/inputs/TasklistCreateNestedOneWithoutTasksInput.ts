import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateOrConnectWithoutTasksInput } from "../inputs/TaskListCreateOrConnectWithoutTasksInput";
import { TaskListCreateWithoutTasksInput } from "../inputs/TaskListCreateWithoutTasksInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => TaskListCreateWithoutTasksInput, {
    nullable: true
  })
  create?: TaskListCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskListCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskListCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskListWhereUniqueInput | undefined;
}
