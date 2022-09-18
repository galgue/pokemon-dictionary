import { useParams } from '@solidjs/router';
import { Suspense, createResource } from 'solid-js';
import { fetchPokemonInfo } from '../../api/fetchPokemonInfo';
import { Loading } from '../../icons';

export const PokemonInfo = () => {
    const params = useParams();

    const [pokemonInfo] = createResource(
        () => Number(params.id),
        fetchPokemonInfo
    );

    return (
        <Suspense
            fallback={
                <div class="h-full w-full flex items-center justify-center">
                    <Loading class="h-3/4 w-auto" />
                </div>
            }
        >
            <div class="h-full w-full flex items-center justify-center">
                <div class="w-1/3">
                    <img
                        src={pokemonInfo()?.image}
                        alt={pokemonInfo()?.name}
                        class="w-full h-fit"
                    />
                </div>
                <div class="rounded-lg border-2 border-solid border-poke-yellow h-1/2 w-1/3 px-10 py-5 flex flex-col gap-2">
                    <div class="text-4xl capitalize font-bold">
                        {pokemonInfo()?.name}
                    </div>
                    <div>
                        <ul>
                            <li>Height: {pokemonInfo()?.height}cm</li>
                            <li>Weight: {pokemonInfo()?.weight}kg</li>
                            <li>species: {pokemonInfo()?.species.name}</li>
                            <li>
                                Abilities:
                                <ul>
                                    {pokemonInfo()?.abilities.map((ability) => (
                                        <li class="pl-8 capitalize">
                                            {ability.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                Types:
                                <ul>
                                    {pokemonInfo()?.types.map((type) => (
                                        <li class="pl-8 capitalize">
                                            {type.name}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};
