import { HeartFullIcon, HeartNotFullIcon, LoadingIcon } from 'icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavoritePokemons } from 'store/FavoritePokemons';

const Like = ({ id }: { id: number }) => {
    const { addFavorite, pokemons, removeFavorite } = useFavoritePokemons();

    if (pokemons.has(id)) {
        return (
            <HeartFullIcon
                className="fill-poke-red w-5"
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    removeFavorite(id);
                }}
            />
        );
    }
    return (
        <HeartNotFullIcon
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addFavorite(id);
            }}
            className="fill-poke-red w-5"
        />
    );
};

export const Pokemon = ({
    name,
    image,
    id,
}: {
    name: string;
    image: string;
    id: number;
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Link
            to={`/${id}`}
            className="w-1/5 flex flex-col items-center min-w-[150px]"
        >
            {!isLoaded && (
                <LoadingIcon className="w-full h-fit animate-pulse" />
            )}
            <img
                src={image}
                alt={name}
                className={`w-full ${
                    isLoaded ? '' : 'invisible h-0'
                } hover:animate-bounce`}
                onLoad={() => setIsLoaded(true)}
            />
            <div className="flex flex-row capitalize font-semibold -mt-5 text-lg gap-2">
                <div>{name}</div>
                <Like id={id} />
            </div>
        </Link>
    );
};
