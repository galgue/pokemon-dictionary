import { Routes, Route } from '@solidjs/router';
import { PokemonInfo } from './pokemon-info/PokemonInfo';
import { PokemonList } from './pokemon-list/PokemonList';

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonInfo />} />
        </Routes>
    );
};
