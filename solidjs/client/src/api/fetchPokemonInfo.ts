import { trpcClient } from '../trpc/client';

export const fetchPokemonInfo = async (id: number) =>
    trpcClient.query('pokemon.get', {
        id,
    });
