import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutTasklistInput } from "../inputs/TaskCreateOrConnectWithoutTasklistInput";
import { TaskCreateWithoutTasklistInput } from "../inputs/TaskCreateWithoutTasklistInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutTasklistInput } from "../inputs/TaskUpdateManyWithWhereWithoutTasklistInput";
import { TaskUpdateWithWhereUniqueWithoutTasklistInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutTasklistInput";
import { TaskUpsertWithWhereUniqueWithoutTasklistInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutTasklistInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateManyWithoutTasklistInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutTasklistInput], {
    nullable: true
  })
  create?: TaskCreateWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutTasklistInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutTasklistInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutTasklistInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutTasklistInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
