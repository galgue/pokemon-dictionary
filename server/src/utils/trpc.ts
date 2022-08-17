import * as trpc from '@trpc/server';
import type { Context } from '../server';

export const trpcRouter = () => trpc.router<Context>();
