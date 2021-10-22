import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutTasklistsInput } from "../inputs/TeamCreateWithoutTasklistsInput";
import { TeamUpdateWithoutTasklistsInput } from "../inputs/TeamUpdateWithoutTasklistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamUpsertWithoutTasklistsInput {
  @TypeGraphQL.Field(_type => TeamUpdateWithoutTasklistsInput, {
    nullable: false
  })
  update!: TeamUpdateWithoutTasklistsInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutTasklistsInput, {
    nullable: false
  })
  create!: TeamCreateWithoutTasklistsInput;
}
