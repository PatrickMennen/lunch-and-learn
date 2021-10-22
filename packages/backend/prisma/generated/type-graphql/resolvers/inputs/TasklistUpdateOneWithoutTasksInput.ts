import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateOrConnectWithoutTasksInput } from "../inputs/TaskListCreateOrConnectWithoutTasksInput";
import { TaskListCreateWithoutTasksInput } from "../inputs/TaskListCreateWithoutTasksInput";
import { TaskListUpdateWithoutTasksInput } from "../inputs/TaskListUpdateWithoutTasksInput";
import { TaskListUpsertWithoutTasksInput } from "../inputs/TaskListUpsertWithoutTasksInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpdateOneWithoutTasksInput {
  @TypeGraphQL.Field(_type => TaskListCreateWithoutTasksInput, {
    nullable: true
  })
  create?: TaskListCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskListCreateOrConnectWithoutTasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskListCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskListUpsertWithoutTasksInput, {
    nullable: true
  })
  upsert?: TaskListUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskListWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TaskListUpdateWithoutTasksInput, {
    nullable: true
  })
  update?: TaskListUpdateWithoutTasksInput | undefined;
}
