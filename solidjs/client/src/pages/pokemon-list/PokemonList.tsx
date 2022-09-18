import { For, Suspense } from 'solid-js';
import { DebouncedInput } from '../../components/DebouncedInput';
import { FaSolidArrowLeft, FaSolidArrowRight } from 'solid-icons/fa';
import { Pokemon } from './pokemon';
import { createPokemonTable } from './createPokemonTable';
import { LoadingPokemons } from './LoadingPokemons';

const listLayout = 'w-5/6 flex flex-wrap flex-row items-center justify-center';
const listContainer = 'flex flex-row justify-center items-center h-full';

export const PokemonList = () => {
    const {
        nextPage,
        page,
        previousPage,
        setInput,
        canNextPage,
        canPreviousPage,
    } = createPokemonTable();

    return (
        <div class="flex flex-col justify-center items-center h-full pt-10">
            <DebouncedInput
                type="text"
                name="search"
                id="search"
                class="text-poke-blue font-bold px-2 py-1 bg-poke-light-blue rounded-md"
                value={'' as string}
                onChange={(value) => setInput(value)}
            />
            <div class={listContainer}>
                <Suspense fallback={LoadingPokemons()}>
                    <div class="flex justify-center items-center">
                        <FaSolidArrowLeft
                            class={`text-poke-light-blue text-4xl w-24 cursor-pointer ${
                                !canPreviousPage() ? 'invisible' : ''
                            }`}
                            onClick={() => previousPage()}
                        />
                    </div>
                    <div class={listLayout}>
                        <For each={page()?.pokemons}>
                            {(pokemon) => (
                                <Pokemon
                                    id={pokemon.id}
                                    image={pokemon.image}
                                    name={pokemon.name}
                                />
                            )}
                        </For>
                    </div>
                    <div class="flex justify-center items-center">
                        <FaSolidArrowRight
                            class={`text-poke-light-blue text-4xl w-24 cursor-pointer ${
                                !canNextPage() ? 'invisible' : ''
                            }`}
                            onClick={() => nextPage()}
                        />
                    </div>
                </Suspense>
            </div>
        </div>
    );
};
