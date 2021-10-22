import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskListUpdateOneWithoutTasksInput } from "../inputs/TaskListUpdateOneWithoutTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  completed?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskListUpdateOneWithoutTasksInput, {
    nullable: true
  })
  Tasklist?: TaskListUpdateOneWithoutTasksInput | undefined;
}
