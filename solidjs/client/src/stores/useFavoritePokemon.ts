import { createSignal } from 'solid-js';

const [favoritePokemons, setFavoritePokemons] = createSignal(new Set<number>());

export const useFavoritePokemon = () => {
    return {
        favoritePokemons,
        toggleFavoritePokemon: (id: number) => {
            const newSet = new Set(favoritePokemons());
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            setFavoritePokemons(newSet);
        },
    };
};
