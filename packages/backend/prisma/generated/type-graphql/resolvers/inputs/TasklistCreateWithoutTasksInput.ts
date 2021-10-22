import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedOneWithoutTasklistsInput } from "../inputs/TeamCreateNestedOneWithoutTasklistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListCreateWithoutTasksInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutTasklistsInput, {
    nullable: true
  })
  Team?: TeamCreateNestedOneWithoutTasklistsInput | undefined;
}
