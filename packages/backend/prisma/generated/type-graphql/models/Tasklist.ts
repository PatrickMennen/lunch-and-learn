import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";
import { Team } from "../models/Team";
import { TaskListCount } from "../resolvers/outputs/TaskListCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TaskList {
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

  tasks?: Task[];

  Team?: Team | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  teamId?: number | null;

  @TypeGraphQL.Field(_type => TaskListCount, {
    nullable: true
  })
  _count?: TaskListCount | null;
}
