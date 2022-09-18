import { type } from 'os';
import create from 'zustand';

type Pokemon = {
    id: number;
    name: string;
    url: string;
};

type FavoritePokemonStore = {
    pokemons: Set<number>;
    addFavorite: (pokemonId: number) => void;
    removeFavorite: (pokemonId: number) => void;
};

export const useFavoritePokemons = create<FavoritePokemonStore>((set) => ({
    pokemons: new Set(),
    addFavorite: (pokemonId: number) =>
        set((state) => ({
            pokemons: new Set(state.pokemons).add(pokemonId),
        })),
    removeFavorite: (pokemonId: Pokemon['id']) =>
        set((state) => {
            const newPokemons = new Set(state.pokemons);
            newPokemons.delete(pokemonId);
            return {
                pokemons: newPokemons,
            };
        }),
    reset: () => set(() => ({ pokemons: new Set() })),
}));
