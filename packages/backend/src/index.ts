import "reflect-metadata";
import {
  Resolver,
  Query,
  FieldResolver,
  Ctx,
  Root,
  Int,
  buildSchema,
  Mutation,
  PubSub, PubSubEngine,
  Arg
} from "type-graphql";
import {resolvers} from '../prisma/generated/type-graphql';
import {PrismaClient} from '@prisma/client';
import {ApolloServer} from 'apollo-server';
import { Team } from '../prisma/generated/type-graphql/models/Team';

interface Context {
  prisma: PrismaClient;
}

@Resolver(of => Team)
class CustomTeamResolver {
  @FieldResolver(type => Int, { nullable: false })
  async totalNumberOfOpenTasks(@Root() team: Team,
  @Ctx() { prisma }: Context): Promise<number> {

    // Your code here!

    return 123;
  }

  // @Mutation(returns => Team)
  // async changeTeamName(
  //   // @PubSub() pubSub: PubSubEngine,
  //   @Arg("teamId") teamId: number,
  //   @Arg("newName") newName: string,
  //   @Ctx() { prisma }: Context
  // ): Promise<Team> {
  //   const team = await prisma.team.update({
  //     where: { id: teamId},
  //     data: { name: newName}
  //   });
  //   // await pubSub.publish("teamChanged", team);
  //   return team;
  // }
}

const main = async () => {
  const schema = await buildSchema({resolvers:[
    ...resolvers,
    CustomTeamResolver
  ], validate: false});
  const prisma = new PrismaClient();
  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    context: (): Context => ({prisma}),
  });

  const { url } = await server.listen(4000);
  console.log(`Our awesome graphql server is running on port ${url}`);
}

main();
