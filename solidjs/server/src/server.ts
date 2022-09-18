import Express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import { appRouter } from './trpc/app-router';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = Express();

const port = process.env.port || 3001;

app.use(cors());

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log: ['query'],
    });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// created for each request
const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({ prisma }); // <-- add `prisma` to context

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

app.listen(port, () => {
    console.log(`running on ${port}`);
});
