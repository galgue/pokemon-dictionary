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
        <div className="h-full w-full flex items-center justify-center p-40">
            <div className="w-1/3">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-fit"
                />
            </div>
            <div className="flex-1 rounded-lg border-2 border-solid border-poke-yellow h-full p-5">
                <div className="text-4xl capitalize font-bold">{data.name}</div>
                <div>
                    <ul>
                        <li>Height: {data.height}cm</li>
                        <li>Weight: {data.weight}kg</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
