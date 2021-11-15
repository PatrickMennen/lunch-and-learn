import { PubSub } from 'graphql-subscriptions';
import EventEmitter from 'events';

const emitter = new EventEmitter();
emitter.setMaxListeners(1000);
export const pubSub = new PubSub({ eventEmitter: emitter });
