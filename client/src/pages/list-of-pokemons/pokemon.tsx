import { LoadingIcon } from 'icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="capitalize font-semibold -mt-5 text-lg">{name}</div>
        </Link>
    );
};
