import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamAvgAggregate } from "../outputs/TeamAvgAggregate";
import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";
import { TeamSumAggregate } from "../outputs/TeamSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TeamGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TeamCountAggregate, {
    nullable: true
  })
  _count!: TeamCountAggregate | null;

  @TypeGraphQL.Field(_type => TeamAvgAggregate, {
    nullable: true
  })
  _avg!: TeamAvgAggregate | null;

  @TypeGraphQL.Field(_type => TeamSumAggregate, {
    nullable: true
  })
  _sum!: TeamSumAggregate | null;

  @TypeGraphQL.Field(_type => TeamMinAggregate, {
    nullable: true
  })
  _min!: TeamMinAggregate | null;

  @TypeGraphQL.Field(_type => TeamMaxAggregate, {
    nullable: true
  })
  _max!: TeamMaxAggregate | null;
}
