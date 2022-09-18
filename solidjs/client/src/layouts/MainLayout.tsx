import { Link } from '@solidjs/router';
import type { ParentComponent } from 'solid-js';
import { useFavoritePokemon } from '../stores/useFavoritePokemon';
export const MainLayout: ParentComponent = ({ children }) => {
    const { favoritePokemons } = useFavoritePokemon();
    return (
        <div class="flex flex-col w-full h-full">
            <div class="flex-row h-20 bg-poke-red flex justify-center items-center shadow-md">
                <div class="flex-1" />
                <Link
                    href="/"
                    class="cursor-pointer font-bold text-5xl text-poke-yellow hover:text-poke-yellow-dark ml-auto"
                >
                    Pokemon Dictionary
                </Link>
                <div class="flex-1 flex flex-row-reverse">
                    <div class="mr-10">
                        Favorite Pokemons: {favoritePokemons().size}
                    </div>
                </div>
            </div>
            <div class="flex-1">{children}</div>
        </div>
    );
};
