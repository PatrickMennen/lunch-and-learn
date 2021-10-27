import {
  CreateTeamArgs,
  CreateTeamResolver as GeneratedCreateTeamResolver,
  Team,
} from '../../prisma/generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { Subscription, Root, Args, PubSub, PubSubEngine } from 'type-graphql';

@TypeGraphQL.Resolver((_of) => Team)
export class CreateTeamResolver {
  resolver: GeneratedCreateTeamResolver;

  constructor() {
    this.resolver = new GeneratedCreateTeamResolver();
  }
  @Subscription({
    topics: 'CREATE_TEAM',
  })
  createdTeam(@Root() team: Team): Team {
    return team;
  }

  @TypeGraphQL.Mutation((_returns) => Team, {
    nullable: false,
  })
  async createTeam(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTeamArgs,
    @PubSub() pubSub: PubSubEngine,
  ): Promise<Team> {
    const createdTeam = await this.resolver.createTeam(ctx, info, args);
    await pubSub.publish('CREATE_TEAM', createdTeam);
    return createdTeam;
  }
}
