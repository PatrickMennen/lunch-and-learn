import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Team: crudResolvers.TeamCrudResolver,
  TaskList: crudResolvers.TaskListCrudResolver,
  Task: crudResolvers.TaskCrudResolver
};
const actionResolversMap = {
  Team: {
    team: actionResolvers.FindUniqueTeamResolver,
    findFirstTeam: actionResolvers.FindFirstTeamResolver,
    teams: actionResolvers.FindManyTeamResolver,
    createTeam: actionResolvers.CreateTeamResolver,
    deleteTeam: actionResolvers.DeleteTeamResolver,
    updateTeam: actionResolvers.UpdateTeamResolver,
    deleteManyTeam: actionResolvers.DeleteManyTeamResolver,
    updateManyTeam: actionResolvers.UpdateManyTeamResolver,
    upsertTeam: actionResolvers.UpsertTeamResolver,
    aggregateTeam: actionResolvers.AggregateTeamResolver,
    groupByTeam: actionResolvers.GroupByTeamResolver
  },
  TaskList: {
    taskList: actionResolvers.FindUniqueTaskListResolver,
    findFirstTaskList: actionResolvers.FindFirstTaskListResolver,
    taskLists: actionResolvers.FindManyTaskListResolver,
    createTaskList: actionResolvers.CreateTaskListResolver,
    deleteTaskList: actionResolvers.DeleteTaskListResolver,
    updateTaskList: actionResolvers.UpdateTaskListResolver,
    deleteManyTaskList: actionResolvers.DeleteManyTaskListResolver,
    updateManyTaskList: actionResolvers.UpdateManyTaskListResolver,
    upsertTaskList: actionResolvers.UpsertTaskListResolver,
    aggregateTaskList: actionResolvers.AggregateTaskListResolver,
    groupByTaskList: actionResolvers.GroupByTaskListResolver
  },
  Task: {
    task: actionResolvers.FindUniqueTaskResolver,
    findFirstTask: actionResolvers.FindFirstTaskResolver,
    tasks: actionResolvers.FindManyTaskResolver,
    createTask: actionResolvers.CreateTaskResolver,
    deleteTask: actionResolvers.DeleteTaskResolver,
    updateTask: actionResolvers.UpdateTaskResolver,
    deleteManyTask: actionResolvers.DeleteManyTaskResolver,
    updateManyTask: actionResolvers.UpdateManyTaskResolver,
    upsertTask: actionResolvers.UpsertTaskResolver,
    aggregateTask: actionResolvers.AggregateTaskResolver,
    groupByTask: actionResolvers.GroupByTaskResolver
  }
};
const crudResolversInfo = {
  Team: ["team", "findFirstTeam", "teams", "createTeam", "deleteTeam", "updateTeam", "deleteManyTeam", "updateManyTeam", "upsertTeam", "aggregateTeam", "groupByTeam"],
  TaskList: ["taskList", "findFirstTaskList", "taskLists", "createTaskList", "deleteTaskList", "updateTaskList", "deleteManyTaskList", "updateManyTaskList", "upsertTaskList", "aggregateTaskList", "groupByTaskList"],
  Task: ["task", "findFirstTask", "tasks", "createTask", "deleteTask", "updateTask", "deleteManyTask", "updateManyTask", "upsertTask", "aggregateTask", "groupByTask"]
};
const argsInfo = {
  FindUniqueTeamArgs: ["where"],
  FindFirstTeamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTeamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTeamArgs: ["data"],
  DeleteTeamArgs: ["where"],
  UpdateTeamArgs: ["data", "where"],
  DeleteManyTeamArgs: ["where"],
  UpdateManyTeamArgs: ["data", "where"],
  UpsertTeamArgs: ["where", "create", "update"],
  AggregateTeamArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTeamArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTaskListArgs: ["where"],
  FindFirstTaskListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTaskListArgs: ["data"],
  DeleteTaskListArgs: ["where"],
  UpdateTaskListArgs: ["data", "where"],
  DeleteManyTaskListArgs: ["where"],
  UpdateManyTaskListArgs: ["data", "where"],
  UpsertTaskListArgs: ["where", "create", "update"],
  AggregateTaskListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTaskListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTaskArgs: ["where"],
  FindFirstTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTaskArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTaskArgs: ["data"],
  DeleteTaskArgs: ["where"],
  UpdateTaskArgs: ["data", "where"],
  DeleteManyTaskArgs: ["where"],
  UpdateManyTaskArgs: ["data", "where"],
  UpsertTaskArgs: ["where", "create", "update"],
  AggregateTaskArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTaskArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Team: relationResolvers.TeamRelationsResolver,
  TaskList: relationResolvers.TaskListRelationsResolver,
  Task: relationResolvers.TaskRelationsResolver
};
const relationResolversInfo = {
  Team: ["tasklists"],
  TaskList: ["tasks", "Team"],
  Task: ["Tasklist"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Team: ["id", "createdAt", "name"],
  TaskList: ["id", "createdAt", "name", "teamId"],
  Task: ["id", "createdAt", "label", "completed", "tasklistId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateTeam: ["_count", "_avg", "_sum", "_min", "_max"],
  TeamGroupBy: ["id", "createdAt", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTaskList: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskListGroupBy: ["id", "createdAt", "name", "teamId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTask: ["_count", "_avg", "_sum", "_min", "_max"],
  TaskGroupBy: ["id", "createdAt", "label", "completed", "tasklistId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TeamCount: ["tasklists"],
  TeamCountAggregate: ["id", "createdAt", "name", "_all"],
  TeamAvgAggregate: ["id"],
  TeamSumAggregate: ["id"],
  TeamMinAggregate: ["id", "createdAt", "name"],
  TeamMaxAggregate: ["id", "createdAt", "name"],
  TaskListCount: ["tasks"],
  TaskListCountAggregate: ["id", "createdAt", "name", "teamId", "_all"],
  TaskListAvgAggregate: ["id", "teamId"],
  TaskListSumAggregate: ["id", "teamId"],
  TaskListMinAggregate: ["id", "createdAt", "name", "teamId"],
  TaskListMaxAggregate: ["id", "createdAt", "name", "teamId"],
  TaskCountAggregate: ["id", "createdAt", "label", "completed", "tasklistId", "_all"],
  TaskAvgAggregate: ["id", "tasklistId"],
  TaskSumAggregate: ["id", "tasklistId"],
  TaskMinAggregate: ["id", "createdAt", "label", "completed", "tasklistId"],
  TaskMaxAggregate: ["id", "createdAt", "label", "completed", "tasklistId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  TeamWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "tasklists"],
  TeamOrderByWithRelationInput: ["id", "createdAt", "name", "tasklists"],
  TeamWhereUniqueInput: ["id", "name"],
  TeamOrderByWithAggregationInput: ["id", "createdAt", "name", "_count", "_avg", "_max", "_min", "_sum"],
  TeamScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name"],
  TaskListWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "tasks", "Team", "teamId"],
  TaskListOrderByWithRelationInput: ["id", "createdAt", "name", "tasks", "Team", "teamId"],
  TaskListWhereUniqueInput: ["id"],
  TaskListOrderByWithAggregationInput: ["id", "createdAt", "name", "teamId", "_count", "_avg", "_max", "_min", "_sum"],
  TaskListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "teamId"],
  TaskWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "label", "completed", "Tasklist", "tasklistId"],
  TaskOrderByWithRelationInput: ["id", "createdAt", "label", "completed", "Tasklist", "tasklistId"],
  TaskWhereUniqueInput: ["id"],
  TaskOrderByWithAggregationInput: ["id", "createdAt", "label", "completed", "tasklistId", "_count", "_avg", "_max", "_min", "_sum"],
  TaskScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "label", "completed", "tasklistId"],
  TeamCreateInput: ["createdAt", "name", "tasklists"],
  TeamUpdateInput: ["createdAt", "name", "tasklists"],
  TeamUpdateManyMutationInput: ["createdAt", "name"],
  TaskListCreateInput: ["createdAt", "name", "tasks", "Team"],
  TaskListUpdateInput: ["createdAt", "name", "tasks", "Team"],
  TaskListUpdateManyMutationInput: ["createdAt", "name"],
  TaskCreateInput: ["createdAt", "label", "completed", "Tasklist"],
  TaskUpdateInput: ["createdAt", "label", "completed", "Tasklist"],
  TaskUpdateManyMutationInput: ["createdAt", "label", "completed"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  TaskListListRelationFilter: ["every", "some", "none"],
  TaskListOrderByRelationAggregateInput: ["_count"],
  TeamCountOrderByAggregateInput: ["id", "createdAt", "name"],
  TeamAvgOrderByAggregateInput: ["id"],
  TeamMaxOrderByAggregateInput: ["id", "createdAt", "name"],
  TeamMinOrderByAggregateInput: ["id", "createdAt", "name"],
  TeamSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  TaskListRelationFilter: ["is", "isNot"],
  TeamRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TaskOrderByRelationAggregateInput: ["_count"],
  TaskListCountOrderByAggregateInput: ["id", "createdAt", "name", "teamId"],
  TaskListAvgOrderByAggregateInput: ["id", "teamId"],
  TaskListMaxOrderByAggregateInput: ["id", "createdAt", "name", "teamId"],
  TaskListMinOrderByAggregateInput: ["id", "createdAt", "name", "teamId"],
  TaskListSumOrderByAggregateInput: ["id", "teamId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  TaskCountOrderByAggregateInput: ["id", "createdAt", "label", "completed", "tasklistId"],
  TaskAvgOrderByAggregateInput: ["id", "tasklistId"],
  TaskMaxOrderByAggregateInput: ["id", "createdAt", "label", "completed", "tasklistId"],
  TaskMinOrderByAggregateInput: ["id", "createdAt", "label", "completed", "tasklistId"],
  TaskSumOrderByAggregateInput: ["id", "tasklistId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  TaskListCreateNestedManyWithoutTeamInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  TaskListUpdateManyWithoutTeamInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TaskCreateNestedManyWithoutTasklistInput: ["create", "connectOrCreate", "connect"],
  TeamCreateNestedOneWithoutTasklistsInput: ["create", "connectOrCreate", "connect"],
  TaskUpdateManyWithoutTasklistInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  TeamUpdateOneWithoutTasklistsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  TaskListCreateNestedOneWithoutTasksInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  TaskListUpdateOneWithoutTasksInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  TaskListCreateWithoutTeamInput: ["createdAt", "name", "tasks"],
  TaskListCreateOrConnectWithoutTeamInput: ["where", "create"],
  TaskListUpsertWithWhereUniqueWithoutTeamInput: ["where", "update", "create"],
  TaskListUpdateWithWhereUniqueWithoutTeamInput: ["where", "data"],
  TaskListUpdateManyWithWhereWithoutTeamInput: ["where", "data"],
  TaskListScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "name", "teamId"],
  TaskCreateWithoutTasklistInput: ["createdAt", "label", "completed"],
  TaskCreateOrConnectWithoutTasklistInput: ["where", "create"],
  TeamCreateWithoutTasklistsInput: ["createdAt", "name"],
  TeamCreateOrConnectWithoutTasklistsInput: ["where", "create"],
  TaskUpsertWithWhereUniqueWithoutTasklistInput: ["where", "update", "create"],
  TaskUpdateWithWhereUniqueWithoutTasklistInput: ["where", "data"],
  TaskUpdateManyWithWhereWithoutTasklistInput: ["where", "data"],
  TaskScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "label", "completed", "tasklistId"],
  TeamUpsertWithoutTasklistsInput: ["update", "create"],
  TeamUpdateWithoutTasklistsInput: ["createdAt", "name"],
  TaskListCreateWithoutTasksInput: ["createdAt", "name", "Team"],
  TaskListCreateOrConnectWithoutTasksInput: ["where", "create"],
  TaskListUpsertWithoutTasksInput: ["update", "create"],
  TaskListUpdateWithoutTasksInput: ["createdAt", "name", "Team"],
  TaskListUpdateWithoutTeamInput: ["createdAt", "name", "tasks"],
  TaskUpdateWithoutTasklistInput: ["createdAt", "label", "completed"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

