import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class TaskGroupBy {
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
  label!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  completed!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tasklistId!: number | null;

  @TypeGraphQL.Field(_type => TaskCountAggregate, {
    nullable: true
  })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field(_type => TaskAvgAggregate, {
    nullable: true
  })
  _avg!: TaskAvgAggregate | null;

  @TypeGraphQL.Field(_type => TaskSumAggregate, {
    nullable: true
  })
  _sum!: TaskSumAggregate | null;

  @TypeGraphQL.Field(_type => TaskMinAggregate, {
    nullable: true
  })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field(_type => TaskMaxAggregate, {
    nullable: true
  })
  _max!: TaskMaxAggregate | null;
}
