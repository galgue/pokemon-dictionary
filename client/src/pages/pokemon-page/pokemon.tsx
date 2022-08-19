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
        <div>
            <h1>{data.name}</h1>
            {data.image && <img src={data.image} alt={data.name} />}
        </div>
    );
};
