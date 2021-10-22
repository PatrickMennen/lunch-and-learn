import "reflect-metadata";
import {
  buildSchema,
} from "type-graphql";
import {resolvers} from '../prisma/generated/type-graphql';
import {PrismaClient} from '@prisma/client';
import {ApolloServer} from 'apollo-server';
import {CustomTeamResolver} from "./TeamResolver";

export interface Context {
  prisma: PrismaClient;
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
