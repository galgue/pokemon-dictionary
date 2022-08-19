import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trpc } from 'utils/trpc';

export const ListOfPokemonsPage = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, isError } = trpc.useQuery([
        'pokemon.page',
        {
            limit: 10,
            offset: 10 * page,
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
            <div>
                <button
                    onClick={() => setPage((currentPage) => currentPage + 1)}
                    disabled={data.lastPage}
                >
                    next
                </button>
                <button
                    onClick={() => setPage((currentPage) => currentPage - 1)}
                    disabled={page === 0}
                >
                    prev
                </button>
            </div>
            <div className="flex flex-wrap flex-row">
                {data.pokemons.map(({ image, name, id }) => (
                    <div>
                        <h1>{name}</h1>
                        {image && (
                            <Link to={`/${id}`}>
                                <img src={image} alt={name} className="" />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
