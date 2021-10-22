import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskListAvgAggregate } from "../outputs/TaskListAvgAggregate";
import { TaskListCountAggregate } from "../outputs/TaskListCountAggregate";
import { TaskListMaxAggregate } from "../outputs/TaskListMaxAggregate";
import { TaskListMinAggregate } from "../outputs/TaskListMinAggregate";
import { TaskListSumAggregate } from "../outputs/TaskListSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTaskList {
  @TypeGraphQL.Field(_type => TaskListCountAggregate, {
    nullable: true
  })
  _count!: TaskListCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskListAvgAggregate, {
    nullable: true
  })
  _avg!: TaskListAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskListSumAggregate, {
    nullable: true
  })
  _sum!: TaskListSumAggregate | null;

  @TypeGraphQL.Field(_type => TaskListMinAggregate, {
    nullable: true
  })
  _min!: TaskListMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskListMaxAggregate, {
    nullable: true
  })
  _max!: TaskListMaxAggregate | null;
}
