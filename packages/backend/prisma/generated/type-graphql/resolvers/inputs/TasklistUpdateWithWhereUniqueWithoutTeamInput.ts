import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListUpdateWithoutTeamInput } from "../inputs/TaskListUpdateWithoutTeamInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpdateWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskListUpdateWithoutTeamInput, {
    nullable: false
  })
  data!: TaskListUpdateWithoutTeamInput;
}
