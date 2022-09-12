import { createSignal } from 'solid-js';
import { CgSearchLoading as LoadingIcon } from 'solid-icons/cg';
import { Link } from '@solidjs/router';

export const Pokemon = ({
    name,
    image,
    id,
}: {
    name: string;
    image: string;
    id: number;
}) => {
    const [isLoaded, setIsLoaded] = createSignal(false);

    return (
        <Link
            href={`/${id}`}
            class="w-1/5 flex flex-col items-center min-w-[150px]"
        >
            {!isLoaded && <LoadingIcon class="w-full h-fit animate-pulse" />}
            <img
                src={image}
                alt={name}
                class={`w-full ${
                    isLoaded() ? '' : 'invisible h-0'
                } hover:animate-bounce`}
                onLoad={() => setIsLoaded(true)}
            />
            <div class="flex flex-row capitalize font-semibold -mt-5 text-lg gap-2">
                <div>{name}</div>
            </div>
        </Link>
    );
};
