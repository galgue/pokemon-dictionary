import { DebouncedInput } from 'components/DebouncedInput';
import { RightArrow, LeftArrow, LoadingIcon } from './../../icons';
import { LoadingPokemons } from './LoadingPokemons';
import { Pokemon } from './pokemon';
import { usePokemonTable } from './usePokemonTable';

export const ListOfPokemonsPage = () => {
    const { data, isLoading, isError, pagination, filters } = usePokemonTable();

    const [, setFilterName] = filters.name;

    if (isLoading) {
        return (
            <div className="flex flex-row justify-center items-center h-full">
                <div className="w-5/6 flex flex-wrap flex-row items-center justify-center">
                    <LoadingPokemons />
                </div>
            </div>
        );
    }

    if (isError || !data) {
        return <>error</>;
    }

    return (
        <div className="flex flex-col justify-center items-center h-full pt-10">
            <DebouncedInput
                type="text"
                name="search"
                id="search"
                className="text-poke-blue font-bold px-2 py-1"
                value={'' as string}
                onChange={(value) => setFilterName(value)}
            />
            <div className="flex flex-row justify-center items-center h-full">
                <div className="flex justify-center items-center">
                    <LeftArrow
                        className={`w-24 cursor-pointer ${
                            !pagination.canPrevPage ? 'invisible' : ''
                        }`}
                        onClick={pagination.prevPage}
                    />
                </div>
                <div className="w-5/6 flex flex-wrap flex-row items-center justify-center">
                    {data.map(({ image, name, id }) => (
                        <Pokemon name={name} image={image} key={id} id={id} />
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <RightArrow
                        className={`w-24 cursor-pointer ${
                            !pagination.canNextPage ? 'invisible' : ''
                        }`}
                        onClick={pagination.nextPage}
                    />
                </div>
            </div>
        </div>
    );
};
