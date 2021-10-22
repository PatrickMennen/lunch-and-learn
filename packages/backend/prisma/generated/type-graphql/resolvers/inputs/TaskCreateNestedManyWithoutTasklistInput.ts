import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutTasklistInput } from "../inputs/TaskCreateOrConnectWithoutTasklistInput";
import { TaskCreateWithoutTasklistInput } from "../inputs/TaskCreateWithoutTasklistInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateNestedManyWithoutTasklistInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutTasklistInput], {
    nullable: true
  })
  create?: TaskCreateWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutTasklistInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutTasklistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
