import { LoadingIcon } from 'icons';

const PokemonSkeleton = () => {
    return (
        <div className="w-1/5 flex flex-col items-center min-w-[150px]">
            <LoadingIcon className="w-full h-fit" />
        </div>
    );
};

export const LoadingPokemons = () => (
    <>
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
    </>
);
