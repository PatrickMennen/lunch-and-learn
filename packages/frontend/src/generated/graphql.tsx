import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
};

export type AggregateTaskList = {
  __typename?: 'AggregateTaskList';
  _avg?: Maybe<TaskListAvgAggregate>;
  _count?: Maybe<TaskListCountAggregate>;
  _max?: Maybe<TaskListMaxAggregate>;
  _min?: Maybe<TaskListMinAggregate>;
  _sum?: Maybe<TaskListSumAggregate>;
};

export type AggregateTeam = {
  __typename?: 'AggregateTeam';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  createTaskList: TaskList;
  createTeam: Team;
  deleteManyTask: AffectedRowsOutput;
  deleteManyTaskList: AffectedRowsOutput;
  deleteManyTeam: AffectedRowsOutput;
  deleteTask?: Maybe<Task>;
  deleteTaskList?: Maybe<TaskList>;
  deleteTeam?: Maybe<Team>;
  updateManyTask: AffectedRowsOutput;
  updateManyTaskList: AffectedRowsOutput;
  updateManyTeam: AffectedRowsOutput;
  updateTask?: Maybe<Task>;
  updateTaskList?: Maybe<TaskList>;
  updateTeam?: Maybe<Team>;
  upsertTask: Task;
  upsertTaskList: TaskList;
  upsertTeam: Team;
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateTaskListArgs = {
  data: TaskListCreateInput;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationDeleteManyTaskArgs = {
  where?: Maybe<TaskWhereInput>;
};


export type MutationDeleteManyTaskListArgs = {
  where?: Maybe<TaskListWhereInput>;
};


export type MutationDeleteManyTeamArgs = {
  where?: Maybe<TeamWhereInput>;
};


export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteTaskListArgs = {
  where: TaskListWhereUniqueInput;
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: Maybe<TaskWhereInput>;
};


export type MutationUpdateManyTaskListArgs = {
  data: TaskListUpdateManyMutationInput;
  where?: Maybe<TaskListWhereInput>;
};


export type MutationUpdateManyTeamArgs = {
  data: TeamUpdateManyMutationInput;
  where?: Maybe<TeamWhereInput>;
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateTaskListArgs = {
  data: TaskListUpdateInput;
  where: TaskListWhereUniqueInput;
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpsertTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertTaskListArgs = {
  create: TaskListCreateInput;
  update: TaskListUpdateInput;
  where: TaskListWhereUniqueInput;
};


export type MutationUpsertTeamArgs = {
  create: TeamCreateInput;
  update: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTask: AggregateTask;
  aggregateTaskList: AggregateTaskList;
  aggregateTeam: AggregateTeam;
  findFirstTask?: Maybe<Task>;
  findFirstTaskList?: Maybe<TaskList>;
  findFirstTeam?: Maybe<Team>;
  groupByTask: Array<TaskGroupBy>;
  groupByTaskList: Array<TaskListGroupBy>;
  groupByTeam: Array<TeamGroupBy>;
  task?: Maybe<Task>;
  taskList?: Maybe<TaskList>;
  taskLists: Array<TaskList>;
  tasks: Array<Task>;
  team?: Maybe<Team>;
  teams: Array<Team>;
};


export type QueryAggregateTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryAggregateTaskListArgs = {
  cursor?: Maybe<TaskListWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskListOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskListWhereInput>;
};


export type QueryAggregateTeamArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  orderBy?: Maybe<Array<TeamOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryFindFirstTaskListArgs = {
  cursor?: Maybe<TaskListWhereUniqueInput>;
  distinct?: Maybe<Array<TaskListScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskListOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskListWhereInput>;
};


export type QueryFindFirstTeamArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
  orderBy?: Maybe<Array<TeamOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having?: Maybe<TaskScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TaskOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryGroupByTaskListArgs = {
  by: Array<TaskListScalarFieldEnum>;
  having?: Maybe<TaskListScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TaskListOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskListWhereInput>;
};


export type QueryGroupByTeamArgs = {
  by: Array<TeamScalarFieldEnum>;
  having?: Maybe<TeamScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TeamOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTaskListArgs = {
  where: TaskListWhereUniqueInput;
};


export type QueryTaskListsArgs = {
  cursor?: Maybe<TaskListWhereUniqueInput>;
  distinct?: Maybe<Array<TaskListScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskListOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskListWhereInput>;
};


export type QueryTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  cursor?: Maybe<TeamWhereUniqueInput>;
  distinct?: Maybe<Array<TeamScalarFieldEnum>>;
  orderBy?: Maybe<Array<TeamOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TeamWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  Tasklist?: Maybe<TaskList>;
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  label: Scalars['String'];
  tasklistId?: Maybe<Scalars['Int']>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  tasklistId?: Maybe<Scalars['Float']>;
};

export type TaskAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int'];
  completed: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  label: Scalars['Int'];
  tasklistId: Scalars['Int'];
};

export type TaskCountOrderByAggregateInput = {
  completed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskCreateInput = {
  Tasklist?: Maybe<TaskListCreateNestedOneWithoutTasksInput>;
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
};

export type TaskCreateNestedManyWithoutTasklistInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutTasklistInput>>;
  create?: Maybe<Array<TaskCreateWithoutTasklistInput>>;
};

export type TaskCreateOrConnectWithoutTasklistInput = {
  create: TaskCreateWithoutTasklistInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutTasklistInput = {
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  label: Scalars['String'];
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  label: Scalars['String'];
  tasklistId?: Maybe<Scalars['Int']>;
};

export type TaskList = {
  __typename?: 'TaskList';
  Team?: Maybe<Team>;
  _count?: Maybe<TaskListCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  tasks: Array<Task>;
  teamId?: Maybe<Scalars['Int']>;
};


export type TaskListTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};

export type TaskListAvgAggregate = {
  __typename?: 'TaskListAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

export type TaskListAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListCount = {
  __typename?: 'TaskListCount';
  tasks: Scalars['Int'];
};

export type TaskListCountAggregate = {
  __typename?: 'TaskListCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  teamId: Scalars['Int'];
};

export type TaskListCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListCreateInput = {
  Team?: Maybe<TeamCreateNestedOneWithoutTasklistsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tasks?: Maybe<TaskCreateNestedManyWithoutTasklistInput>;
};

export type TaskListCreateNestedManyWithoutTeamInput = {
  connect?: Maybe<Array<TaskListWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskListCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TaskListCreateWithoutTeamInput>>;
};

export type TaskListCreateNestedOneWithoutTasksInput = {
  connect?: Maybe<TaskListWhereUniqueInput>;
  connectOrCreate?: Maybe<TaskListCreateOrConnectWithoutTasksInput>;
  create?: Maybe<TaskListCreateWithoutTasksInput>;
};

export type TaskListCreateOrConnectWithoutTasksInput = {
  create: TaskListCreateWithoutTasksInput;
  where: TaskListWhereUniqueInput;
};

export type TaskListCreateOrConnectWithoutTeamInput = {
  create: TaskListCreateWithoutTeamInput;
  where: TaskListWhereUniqueInput;
};

export type TaskListCreateWithoutTasksInput = {
  Team?: Maybe<TeamCreateNestedOneWithoutTasklistsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type TaskListCreateWithoutTeamInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tasks?: Maybe<TaskCreateNestedManyWithoutTasklistInput>;
};

export type TaskListGroupBy = {
  __typename?: 'TaskListGroupBy';
  _avg?: Maybe<TaskListAvgAggregate>;
  _count?: Maybe<TaskListCountAggregate>;
  _max?: Maybe<TaskListMaxAggregate>;
  _min?: Maybe<TaskListMinAggregate>;
  _sum?: Maybe<TaskListSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  teamId?: Maybe<Scalars['Int']>;
};

export type TaskListListRelationFilter = {
  every?: Maybe<TaskListWhereInput>;
  none?: Maybe<TaskListWhereInput>;
  some?: Maybe<TaskListWhereInput>;
};

export type TaskListMaxAggregate = {
  __typename?: 'TaskListMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type TaskListMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListMinAggregate = {
  __typename?: 'TaskListMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type TaskListMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TaskListOrderByWithAggregationInput = {
  _avg?: Maybe<TaskListAvgOrderByAggregateInput>;
  _count?: Maybe<TaskListCountOrderByAggregateInput>;
  _max?: Maybe<TaskListMaxOrderByAggregateInput>;
  _min?: Maybe<TaskListMinOrderByAggregateInput>;
  _sum?: Maybe<TaskListSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListOrderByWithRelationInput = {
  Team?: Maybe<TeamOrderByWithRelationInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  tasks?: Maybe<TaskOrderByRelationAggregateInput>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListRelationFilter = {
  is?: Maybe<TaskListWhereInput>;
  isNot?: Maybe<TaskListWhereInput>;
};

export enum TaskListScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  TeamId = 'teamId'
}

export type TaskListScalarWhereInput = {
  AND?: Maybe<Array<TaskListScalarWhereInput>>;
  NOT?: Maybe<Array<TaskListScalarWhereInput>>;
  OR?: Maybe<Array<TaskListScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  teamId?: Maybe<IntNullableFilter>;
};

export type TaskListScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TaskListScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TaskListScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TaskListScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  teamId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type TaskListSumAggregate = {
  __typename?: 'TaskListSumAggregate';
  id?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type TaskListSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  teamId?: Maybe<SortOrder>;
};

export type TaskListUpdateInput = {
  Team?: Maybe<TeamUpdateOneWithoutTasklistsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutTasklistInput>;
};

export type TaskListUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaskListUpdateManyWithWhereWithoutTeamInput = {
  data: TaskListUpdateManyMutationInput;
  where: TaskListScalarWhereInput;
};

export type TaskListUpdateManyWithoutTeamInput = {
  connect?: Maybe<Array<TaskListWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskListCreateOrConnectWithoutTeamInput>>;
  create?: Maybe<Array<TaskListCreateWithoutTeamInput>>;
  delete?: Maybe<Array<TaskListWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskListScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskListWhereUniqueInput>>;
  set?: Maybe<Array<TaskListWhereUniqueInput>>;
  update?: Maybe<Array<TaskListUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: Maybe<Array<TaskListUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: Maybe<Array<TaskListUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TaskListUpdateOneWithoutTasksInput = {
  connect?: Maybe<TaskListWhereUniqueInput>;
  connectOrCreate?: Maybe<TaskListCreateOrConnectWithoutTasksInput>;
  create?: Maybe<TaskListCreateWithoutTasksInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TaskListUpdateWithoutTasksInput>;
  upsert?: Maybe<TaskListUpsertWithoutTasksInput>;
};

export type TaskListUpdateWithWhereUniqueWithoutTeamInput = {
  data: TaskListUpdateWithoutTeamInput;
  where: TaskListWhereUniqueInput;
};

export type TaskListUpdateWithoutTasksInput = {
  Team?: Maybe<TeamUpdateOneWithoutTasklistsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaskListUpdateWithoutTeamInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tasks?: Maybe<TaskUpdateManyWithoutTasklistInput>;
};

export type TaskListUpsertWithWhereUniqueWithoutTeamInput = {
  create: TaskListCreateWithoutTeamInput;
  update: TaskListUpdateWithoutTeamInput;
  where: TaskListWhereUniqueInput;
};

export type TaskListUpsertWithoutTasksInput = {
  create: TaskListCreateWithoutTasksInput;
  update: TaskListUpdateWithoutTasksInput;
};

export type TaskListWhereInput = {
  AND?: Maybe<Array<TaskListWhereInput>>;
  NOT?: Maybe<Array<TaskListWhereInput>>;
  OR?: Maybe<Array<TaskListWhereInput>>;
  Team?: Maybe<TeamRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  tasks?: Maybe<TaskListRelationFilter>;
  teamId?: Maybe<IntNullableFilter>;
};

export type TaskListWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  tasklistId?: Maybe<Scalars['Int']>;
};

export type TaskMaxOrderByAggregateInput = {
  completed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  completed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  tasklistId?: Maybe<Scalars['Int']>;
};

export type TaskMinOrderByAggregateInput = {
  completed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: Maybe<TaskAvgOrderByAggregateInput>;
  _count?: Maybe<TaskCountOrderByAggregateInput>;
  _max?: Maybe<TaskMaxOrderByAggregateInput>;
  _min?: Maybe<TaskMinOrderByAggregateInput>;
  _sum?: Maybe<TaskSumOrderByAggregateInput>;
  completed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  Tasklist?: Maybe<TaskListOrderByWithRelationInput>;
  completed?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export enum TaskScalarFieldEnum {
  Completed = 'completed',
  CreatedAt = 'createdAt',
  Id = 'id',
  Label = 'label',
  TasklistId = 'tasklistId'
}

export type TaskScalarWhereInput = {
  AND?: Maybe<Array<TaskScalarWhereInput>>;
  NOT?: Maybe<Array<TaskScalarWhereInput>>;
  OR?: Maybe<Array<TaskScalarWhereInput>>;
  completed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  label?: Maybe<StringFilter>;
  tasklistId?: Maybe<IntNullableFilter>;
};

export type TaskScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TaskScalarWhereWithAggregatesInput>>;
  completed?: Maybe<BoolWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  label?: Maybe<StringWithAggregatesFilter>;
  tasklistId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  id?: Maybe<Scalars['Int']>;
  tasklistId?: Maybe<Scalars['Int']>;
};

export type TaskSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  tasklistId?: Maybe<SortOrder>;
};

export type TaskUpdateInput = {
  Tasklist?: Maybe<TaskListUpdateOneWithoutTasksInput>;
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaskUpdateManyMutationInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutTasklistInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutTasklistInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutTasklistInput>>;
  create?: Maybe<Array<TaskCreateWithoutTasklistInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutTasklistInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutTasklistInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutTasklistInput>>;
};

export type TaskUpdateWithWhereUniqueWithoutTasklistInput = {
  data: TaskUpdateWithoutTasklistInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutTasklistInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  label?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutTasklistInput = {
  create: TaskCreateWithoutTasklistInput;
  update: TaskUpdateWithoutTasklistInput;
  where: TaskWhereUniqueInput;
};

export type TaskWhereInput = {
  AND?: Maybe<Array<TaskWhereInput>>;
  NOT?: Maybe<Array<TaskWhereInput>>;
  OR?: Maybe<Array<TaskWhereInput>>;
  Tasklist?: Maybe<TaskListRelationFilter>;
  completed?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  label?: Maybe<StringFilter>;
  tasklistId?: Maybe<IntNullableFilter>;
};

export type TaskWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Team = {
  __typename?: 'Team';
  _count?: Maybe<TeamCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  tasklists: Array<TaskList>;
  totalNumberOfOpenTasks: Scalars['Int'];
};


export type TeamTasklistsArgs = {
  cursor?: Maybe<TaskListWhereUniqueInput>;
  distinct?: Maybe<Array<TaskListScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskListOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskListWhereInput>;
};

export type TeamAvgAggregate = {
  __typename?: 'TeamAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TeamAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  tasklists: Scalars['Int'];
};

export type TeamCountAggregate = {
  __typename?: 'TeamCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TeamCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TeamCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  tasklists?: Maybe<TaskListCreateNestedManyWithoutTeamInput>;
};

export type TeamCreateNestedOneWithoutTasklistsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTasklistsInput>;
  create?: Maybe<TeamCreateWithoutTasklistsInput>;
};

export type TeamCreateOrConnectWithoutTasklistsInput = {
  create: TeamCreateWithoutTasklistsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutTasklistsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  _avg?: Maybe<TeamAvgAggregate>;
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  _sum?: Maybe<TeamSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TeamMaxAggregate = {
  __typename?: 'TeamMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TeamMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TeamMinAggregate = {
  __typename?: 'TeamMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TeamMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TeamOrderByWithAggregationInput = {
  _avg?: Maybe<TeamAvgOrderByAggregateInput>;
  _count?: Maybe<TeamCountOrderByAggregateInput>;
  _max?: Maybe<TeamMaxOrderByAggregateInput>;
  _min?: Maybe<TeamMinOrderByAggregateInput>;
  _sum?: Maybe<TeamSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  tasklists?: Maybe<TaskListOrderByRelationAggregateInput>;
};

export type TeamRelationFilter = {
  is?: Maybe<TeamWhereInput>;
  isNot?: Maybe<TeamWhereInput>;
};

export enum TeamScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name'
}

export type TeamScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TeamScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TeamScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TeamScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type TeamSumAggregate = {
  __typename?: 'TeamSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TeamSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type TeamUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tasklists?: Maybe<TaskListUpdateManyWithoutTeamInput>;
};

export type TeamUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamUpdateOneWithoutTasklistsInput = {
  connect?: Maybe<TeamWhereUniqueInput>;
  connectOrCreate?: Maybe<TeamCreateOrConnectWithoutTasklistsInput>;
  create?: Maybe<TeamCreateWithoutTasklistsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TeamUpdateWithoutTasklistsInput>;
  upsert?: Maybe<TeamUpsertWithoutTasklistsInput>;
};

export type TeamUpdateWithoutTasklistsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutTasklistsInput = {
  create: TeamCreateWithoutTasklistsInput;
  update: TeamUpdateWithoutTasklistsInput;
};

export type TeamWhereInput = {
  AND?: Maybe<Array<TeamWhereInput>>;
  NOT?: Maybe<Array<TeamWhereInput>>;
  OR?: Maybe<Array<TeamWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  tasklists?: Maybe<TaskListListRelationFilter>;
};

export type TeamWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateTeamMutationVariables = Exact<{
  teamName: Scalars['String'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', id: number, name: string } };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: number, name: string, totalNumberOfOpenTasks: number }> };


export const CreateTeamDocument = gql`
    mutation createTeam($teamName: String!) {
  createTeam(data: {name: $teamName}) {
    id
    name
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      teamName: // value for 'teamName'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const GetAllTeamsDocument = gql`
    query getAllTeams {
  teams {
    id
    name
    totalNumberOfOpenTasks
  }
}
    `;

/**
 * __useGetAllTeamsQuery__
 *
 * To run a query within a React component, call `useGetAllTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
      }
export function useGetAllTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export type GetAllTeamsQueryHookResult = ReturnType<typeof useGetAllTeamsQuery>;
export type GetAllTeamsLazyQueryHookResult = ReturnType<typeof useGetAllTeamsLazyQuery>;
export type GetAllTeamsQueryResult = Apollo.QueryResult<GetAllTeamsQuery, GetAllTeamsQueryVariables>;