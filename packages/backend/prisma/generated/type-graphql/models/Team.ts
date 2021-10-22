import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { TaskList } from "../models/TaskList";
import { TeamCount } from "../resolvers/outputs/TeamCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Team {
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

  tasklists?: TaskList[];

  @TypeGraphQL.Field(_type => TeamCount, {
    nullable: true
  })
  _count?: TeamCount | null;
}
