import * as TypeGraphQL from "type-graphql";

export enum TeamScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name"
}
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
  name: "TeamScalarFieldEnum",
  description: undefined,
});
