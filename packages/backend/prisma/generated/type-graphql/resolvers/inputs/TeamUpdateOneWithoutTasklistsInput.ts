import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutTasklistsInput } from "../inputs/TeamCreateOrConnectWithoutTasklistsInput";
import { TeamCreateWithoutTasklistsInput } from "../inputs/TeamCreateWithoutTasklistsInput";
import { TeamUpdateWithoutTasklistsInput } from "../inputs/TeamUpdateWithoutTasklistsInput";
import { TeamUpsertWithoutTasklistsInput } from "../inputs/TeamUpsertWithoutTasklistsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TeamUpdateOneWithoutTasklistsInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutTasklistsInput, {
    nullable: true
  })
  create?: TeamCreateWithoutTasklistsInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutTasklistsInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutTasklistsInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpsertWithoutTasklistsInput, {
    nullable: true
  })
  upsert?: TeamUpsertWithoutTasklistsInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutTasklistsInput, {
    nullable: true
  })
  update?: TeamUpdateWithoutTasklistsInput | undefined;
}
