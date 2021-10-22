import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateOrConnectWithoutTeamInput } from "../inputs/TaskListCreateOrConnectWithoutTeamInput";
import { TaskListCreateWithoutTeamInput } from "../inputs/TaskListCreateWithoutTeamInput";
import { TaskListScalarWhereInput } from "../inputs/TaskListScalarWhereInput";
import { TaskListUpdateManyWithWhereWithoutTeamInput } from "../inputs/TaskListUpdateManyWithWhereWithoutTeamInput";
import { TaskListUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/TaskListUpdateWithWhereUniqueWithoutTeamInput";
import { TaskListUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/TaskListUpsertWithWhereUniqueWithoutTeamInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpdateManyWithoutTeamInput {
  @TypeGraphQL.Field(_type => [TaskListCreateWithoutTeamInput], {
    nullable: true
  })
  create?: TaskListCreateWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListCreateOrConnectWithoutTeamInput], {
    nullable: true
  })
  connectOrCreate?: TaskListCreateOrConnectWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListUpsertWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  upsert?: TaskListUpsertWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereUniqueInput], {
    nullable: true
  })
  set?: TaskListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskListWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListUpdateWithWhereUniqueWithoutTeamInput], {
    nullable: true
  })
  update?: TaskListUpdateWithWhereUniqueWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListUpdateManyWithWhereWithoutTeamInput], {
    nullable: true
  })
  updateMany?: TaskListUpdateManyWithWhereWithoutTeamInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskListScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskListScalarWhereInput[] | undefined;
}
