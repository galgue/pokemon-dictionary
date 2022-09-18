import { Routes, Route } from '@solidjs/router';
import { MainLayout } from '../layouts/MainLayout';
import { PokemonInfo } from './pokemon-info/PokemonInfo';
import { PokemonList } from './pokemon-list/PokemonList';

export const Main = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/:id" element={<PokemonInfo />} />
            </Routes>
        </MainLayout>
    );
};
