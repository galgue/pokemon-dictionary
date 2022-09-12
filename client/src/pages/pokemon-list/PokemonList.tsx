import { createResource, createSignal, For } from 'solid-js';
import { fetchPokemonPage } from '../../api/fetchPokemonPage';
import { DebouncedInput } from '../../components/DebouncedInput';
import { FaSolidArrowLeft, FaSolidArrowRight } from 'solid-icons/fa';
import { Pokemon } from './pokemon';

const listLayout = 'w-5/6 flex flex-wrap flex-row items-center justify-center';
const listContainer = 'flex flex-row justify-center items-center h-full';

export const PokemonList = () => {
    const [input, setInput] = createSignal('');
    const [pageNumber, setPageNumber] = createSignal(0);

    const [page] = createResource(pageNumber, (pageNumberCurrent) =>
        fetchPokemonPage(pageNumberCurrent)
    );

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
                {/* <ul>
                    <For each={page()?.pokemons}>
                        {(pokemon, i) => <li>{pokemon.name}</li>}
                    </For>
                </ul> */}
                <div class="flex justify-center items-center">
                    <FaSolidArrowLeft
                        class="text-poke-light-blue text-4xl cursor-pointer"
                        // class={`w-24 cursor-pointer ${
                        //     !pagination.canPrevPage ? 'invisible' : ''
                        // }`}
                        onClick={() => setPageNumber(pageNumber() - 1)}
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
                        class="text-poke-light-blue text-4xl cursor-pointer"
                        // class={`w-24 cursor-pointer ${
                        //     !pagination.canNextPage ? 'invisible' : ''
                        // }`}
                        onClick={() => setPageNumber(pageNumber() + 1)}
                    />
                </div>
            </div>
        </div>
    );
};
