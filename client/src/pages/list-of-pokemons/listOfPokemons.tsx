import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trpc } from 'utils/trpc';
import { RightArrow, LeftArrow } from './../../icons';

const Pokemon = ({ name, image }: { name: string; image: string }) => {
    return (
        <div className="w-1/5 flex flex-col items-center">
            <img src={image} alt={name} className="" />
            <h3>{name}</h3>
        </div>
    );
};

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
        <div className="flex flex-row justify-center items-stretch h-full">
            <LeftArrow
                className="w-24"
                onClick={() => setPage((current) => current + 1)}
            />
            <div className="flex flex-wrap flex-row">
                {data.pokemons.map(({ image, name, id }) => (
                    <Pokemon name={name} image={image} key={id} />
                ))}
            </div>
            <RightArrow
                className="w-24"
                onClick={() => setPage((current) => current - 1)}
            />
        </div>
    );
};
