import { useState, useTransition } from 'react';
import { trpc } from 'utils/trpc';
import { RightArrow, LeftArrow, LoadingIcon } from './../../icons';
import { Pokemon } from './pokemon';

const PokemonSkeleton = () => {
    return (
        <div className="w-1/5 flex flex-col items-center min-w-[150px]">
            <LoadingIcon className="w-full h-fit" />
        </div>
    );
};

export const ListOfPokemonsPage = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, isError } = trpc.useQuery([
        'pokemon.page',
        {
            limit: 10,
            offset: 10 * page,
        },
    ]);

    if (isLoading) {
        return (
            <div className="flex flex-row justify-center items-center h-full">
                <div className="w-5/6 flex flex-wrap flex-row items-center justify-center">
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                    <PokemonSkeleton />
                </div>
            </div>
        );
    }

    if (isError || !data) {
        return <>error</>;
    }

    return (
        <div className="flex flex-row justify-center items-center h-full">
            <div className="flex justify-center items-center">
                <LeftArrow
                    className={`w-24 cursor-pointer ${
                        page === 0 ? 'invisible' : ''
                    }`}
                    onClick={() => setPage((current) => current - 1)}
                />
            </div>
            <div className="w-5/6 flex flex-wrap flex-row items-center justify-center">
                {data.pokemons.map(({ image, name, id }) => (
                    <Pokemon name={name} image={image} key={id} id={id} />
                ))}
            </div>
            <div className="flex justify-center items-center">
                <RightArrow
                    className={`w-24 cursor-pointer ${
                        data.lastPage ? 'invisible' : ''
                    }`}
                    onClick={() => setPage((current) => current + 1)}
                />
            </div>
        </div>
    );
};
