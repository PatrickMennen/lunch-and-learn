import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '../prisma/generated/type-graphql';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import { CustomTeamResolver } from './TeamResolver';
import { CreateTeamResolver } from './TeamResolver/CustomCreateTeamResolver';
import express from 'express';
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { pubSub } from '../pubSub';
import { CreateTaskResolver } from './TaskResolver/CreateTaskResolver';

export interface Context {
  prisma: PrismaClient;
}
export const prisma = new PrismaClient();

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: [...resolvers, CreateTeamResolver, CustomTeamResolver, CreateTaskResolver],
    validate: false,
    pubSub,
  });

  const subScriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: '/',
    },
  );

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subScriptionServer.close();
            },
          };
        },
      },
    ],
    context: (): Context => ({ prisma }),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/' });

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(
    `Our awesome graphql server is running on port http://localhost:4000${server.graphqlPath}`,
  );
};

main();
