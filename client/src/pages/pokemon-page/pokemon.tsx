import { useParams } from 'react-router-dom';
import { trpc } from 'utils/trpc';

export const PokemonPage = () => {
    let { id } = useParams();

    const { data, isLoading, isError } = trpc.useQuery([
        'pokemon.get',
        {
            id: Number(id),
        },
    ]);

    if (isLoading) {
        return <>loding</>;
    }

    if (isError || !data) {
        return <>error</>;
    }

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-1/3">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-fit"
                />
            </div>
            <div className="rounded-lg border-2 border-solid border-poke-yellow h-1/2 w-1/3 px-10 py-5 flex flex-col gap-2">
                <div className="text-4xl capitalize font-bold">{data.name}</div>
                <div>
                    <ul>
                        <li>Height: {data.height}cm</li>
                        <li>Weight: {data.weight}kg</li>
                        <li>species: {data.species.name}</li>
                        <li>
                            Abilities:
                            <ul>
                                {data.abilities.map((ability) => (
                                    <li className="pl-8 capitalize">
                                        {ability.name}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            Types:
                            <ul>
                                {data.types.map((type) => (
                                    <li className="pl-8 capitalize">
                                        {type.name}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
