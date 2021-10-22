import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListScalarWhereInput } from "../inputs/TaskListScalarWhereInput";
import { TaskListUpdateManyMutationInput } from "../inputs/TaskListUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpdateManyWithWhereWithoutTeamInput {
  @TypeGraphQL.Field(_type => TaskListScalarWhereInput, {
    nullable: false
  })
  where!: TaskListScalarWhereInput;

  @TypeGraphQL.Field(_type => TaskListUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskListUpdateManyMutationInput;
}
