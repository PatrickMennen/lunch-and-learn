import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateOrConnectWithoutTeamInput } from "../inputs/TaskListCreateOrConnectWithoutTeamInput";
import { TaskListCreateWithoutTeamInput } from "../inputs/TaskListCreateWithoutTeamInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateNestedManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [TaskListCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TaskListCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TaskListCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskListWhereUniqueInput[] | undefined;
}
