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
            pokemonName: z.string().nullish(),
        }),
        async resolve({ input, ctx }) {
            const numberOfPages = Math.ceil(
                (await ctx.prisma.pokemon.count({
                    where: {
                        name: {
                            contains: input.pokemonName || '',
                        },
                    },
                })) / (input.limit || 10)
            );

            const pokemons = await ctx.prisma.pokemon.findMany({
                select: { id: true, name: true, image: true },
                where: {
                    name: {
                        contains: input.pokemonName || '',
                    },
                },
                skip: input.offset || 0,
                take: input.limit || 10,
            });

            return {
                numberOfPages,
                pokemons,
            };
        },
    });
