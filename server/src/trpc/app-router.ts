import { trpcRouter } from '../utils/trpc';
import { pokemonRouter } from './pokemon';

export const appRouter = trpcRouter().merge('pokemon.', pokemonRouter);

export type AppRouter = typeof appRouter;
