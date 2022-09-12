import { createSignal } from 'solid-js';
import { DebouncedInput } from '../../components/DebouncedInput';

const listLayout = 'w-5/6 flex flex-wrap flex-row items-center justify-center';
const listContainer = 'flex flex-row justify-center items-center h-full';

export const PokemonList = () => {
    const [input, setInput] = createSignal('');
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
                <div class="flex justify-center items-center">
                    <LeftArrow
                        class={`w-24 cursor-pointer ${
                            !pagination.canPrevPage ? 'invisible' : ''
                        }`}
                        onClick={pagination.prevPage}
                    />
                </div>
                <div class={listLayout}>
                    {data.map(({ image, name, id }) => (
                        <Pokemon name={name} image={image} key={id} id={id} />
                    ))}
                </div>
                <div class="flex justify-center items-center">
                    <RightArrow
                        class={`w-24 cursor-pointer ${
                            !pagination.canNextPage ? 'invisible' : ''
                        }`}
                        onClick={pagination.nextPage}
                    />
                </div>
            </div>
        </div>
    );
};
