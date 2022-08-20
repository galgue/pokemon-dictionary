import { trpcRouter } from '../../utils/trpc';
import { z } from 'zod';

export const pokemonRouter = trpcRouter()
    .query('get', {
        input: z.object({
            id: z.number(),
        }),
        async resolve({ input, ctx }) {
            return await ctx.prisma.pokemon.findUnique({
                where: { id: input.id },
                include: { abilities: true, species: true, types: true },
            });
        },
    })
    .query('page', {
        input: z.object({
            limit: z.number().min(1).max(25).nullish(),
            offset: z.number().nullish(),
        }),
        async resolve({ input, ctx }) {
            return {
                lastPage:
                    (await ctx.prisma.pokemon.count({
                        skip: (input.offset || 0) + (input.limit || 10),
                        take: 1,
                    })) === 0,
                pokemons: await ctx.prisma.pokemon.findMany({
                    select: { id: true, name: true, image: true },
                    skip: input.offset || 0,
                    take: input.limit || 10,
                }),
            };
        },
    });
