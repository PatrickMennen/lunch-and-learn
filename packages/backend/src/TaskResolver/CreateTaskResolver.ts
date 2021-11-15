import {
  UpdateTaskResolver as GeneratedTaskResolver,
  Team,
  UpdateTaskArgs,
  Task,
  FindManyTaskArgs,
} from '../../prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Subscription, Root, Args, PubSub, PubSubEngine } from 'type-graphql';
import { Context, prisma } from '../index';
import { withFilter } from 'graphql-subscriptions';
import { pubSub } from '../../pubSub';

@TypeGraphQL.Resolver((_of) => Task)
export class CreateTaskResolver {
  resolver: GeneratedTaskResolver;

  constructor() {
    this.resolver = new GeneratedTaskResolver();
  }
  @Subscription({
    subscribe: withFilter(
      () => pubSub.asyncIterator('TASK_UPDATED'),
      async (payload, args: FindManyTaskArgs) => {
        const results = await prisma.task.findMany(args);
        return results.some((t) => t.id === payload.id);
      },
    ),
  })
  updatedTask(@Root() task: Task, @Args() args: FindManyTaskArgs): Task {
    return task;
  }

  @TypeGraphQL.Mutation((_returns) => Task, {
    nullable: false,
  })
  async updateTask(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateTaskArgs,
    @PubSub() pubSub: PubSubEngine,
  ): Promise<Task> {
    const updatedTask = await this.resolver.updateTask(ctx, info, args);
    await pubSub.publish('TASK_UPDATED', updatedTask);
    return updatedTask;
  }
}
