import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutTasklistsInput } from "../inputs/TeamCreateWithoutTasklistsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamCreateOrConnectWithoutTasklistsInput {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutTasklistsInput, {
    nullable: false
  })
  create!: TeamCreateWithoutTasklistsInput;
}
