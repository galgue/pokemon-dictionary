import { PokemonPage } from 'pages/pokemon-page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { trpc } from './utils/trpc';
import { ListOfPokemonsPage } from 'pages/list-of-pokemons';
import { Main } from 'layouts/Main';

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            url: 'http://localhost:3001/trpc',
        })
    );
    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Main>
                    <Routes>
                        <Route path="/:id" element={<PokemonPage />} />
                        <Route path="/" element={<ListOfPokemonsPage />} />
                    </Routes>
                </Main>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
