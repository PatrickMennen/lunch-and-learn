import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListCreateNestedManyWithoutTeamInput } from "../inputs/TaskListCreateNestedManyWithoutTeamInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TaskListCreateNestedManyWithoutTeamInput, {
    nullable: true
  })
  tasklists?: TaskListCreateNestedManyWithoutTeamInput | undefined;
}
