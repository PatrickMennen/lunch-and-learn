import * as TypeGraphQL from "type-graphql";

export enum TaskListScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  teamId = "teamId"
}
TypeGraphQL.registerEnumType(TaskListScalarFieldEnum, {
  name: "TaskListScalarFieldEnum",
  description: undefined,
});
