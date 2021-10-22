import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateWithoutTeamInput } from "../inputs/TaskListCreateWithoutTeamInput";
import { TaskListWhereUniqueInput } from "../inputs/TaskListWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateOrConnectWithoutTeamInput {
  @TypeGraphQL.Field(_type => TaskListWhereUniqueInput, {
    nullable: false
  })
  where!: TaskListWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskListCreateWithoutTeamInput, {
    nullable: false
  })
  create!: TaskListCreateWithoutTeamInput;
}
