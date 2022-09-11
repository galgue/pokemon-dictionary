import { DebouncedInput } from 'components/DebouncedInput';
import { PropsWithChildren } from 'react';
import { RightArrow, LeftArrow, LoadingIcon } from './../../icons';
import { LoadingPokemons } from './LoadingPokemons';
import { Pokemon } from './pokemon';
import { usePokemonTable } from './usePokemonTable';

const listLayout = 'w-5/6 flex flex-wrap flex-row items-center justify-center';
const listContainer = 'flex flex-row justify-center items-center h-full';

export const ListOfPokemonsPage = () => {
    const { data, isLoading, isError, pagination, filters } = usePokemonTable();

    const [, setFilterName] = filters.name;

    if (isLoading) {
        return (
            <div className={listContainer}>
                <div className={listLayout}>
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
                className="text-poke-blue font-bold px-2 py-1 bg-poke-light-blue rounded-md"
                value={'' as string}
                onChange={(value) => setFilterName(value)}
            />
            <div className={listContainer}>
                <div className="flex justify-center items-center">
                    <LeftArrow
                        className={`w-24 cursor-pointer ${
                            !pagination.canPrevPage ? 'invisible' : ''
                        }`}
                        onClick={pagination.prevPage}
                    />
                </div>
                <div className={listLayout}>
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
