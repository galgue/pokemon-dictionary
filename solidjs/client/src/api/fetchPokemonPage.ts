import { trpcClient } from '../trpc/client';

export const fetchPokemonPage = async (page: number, filter?: string) =>
    trpcClient.query('pokemon.page', {
        offset: 10 * page,
        limit: 10,
        pokemonName: filter,
    });
