import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutTasklistInput } from "../inputs/TaskUpdateManyWithoutTasklistInput";
import { TeamUpdateOneWithoutTasklistsInput } from "../inputs/TeamUpdateOneWithoutTasklistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskListUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutTasklistInput, {
    nullable: true
  })
  tasks?: TaskUpdateManyWithoutTasklistInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateOneWithoutTasklistsInput, {
    nullable: true
  })
  Team?: TeamUpdateOneWithoutTasklistsInput | undefined;
}
