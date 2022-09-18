import { Loading } from '../../icons';

const PokemonSkeleton = () => {
    return (
        <div class="w-1/5 flex flex-col items-center min-w-[150px]">
            <Loading class="w-full h-fit" />
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
