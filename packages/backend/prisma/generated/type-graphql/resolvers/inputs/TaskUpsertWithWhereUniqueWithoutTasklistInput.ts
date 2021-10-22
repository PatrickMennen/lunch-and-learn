import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutTasklistInput } from "../inputs/TaskCreateWithoutTasklistInput";
import { TaskUpdateWithoutTasklistInput } from "../inputs/TaskUpdateWithoutTasklistInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutTasklistInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutTasklistInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutTasklistInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutTasklistInput, {
    nullable: false
  })
  create!: TaskCreateWithoutTasklistInput;
}
