import { createSignal, Switch, Match } from 'solid-js';
import { Link } from '@solidjs/router';
import { HeartFullIcon, HeartNotFullIcon, Loading } from '../../icons';
import { useFavoritePokemon } from '../../stores/useFavoritePokemon';

const Like = ({ id }: { id: number }) => {
    const { favoritePokemons, toggleFavoritePokemon } = useFavoritePokemon();

    return (
        <Switch>
            <Match when={favoritePokemons().has(id)}>
                <HeartFullIcon
                    class="fill-poke-red w-5"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleFavoritePokemon(id);
                    }}
                />{' '}
            </Match>
            <Match when={!favoritePokemons().has(id)}>
                <HeartNotFullIcon
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleFavoritePokemon(id);
                    }}
                    class="fill-poke-red w-5"
                />
            </Match>
        </Switch>
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
    const [isLoaded, setIsLoaded] = createSignal(false);

    return (
        <Link
            href={`/${id}`}
            class="w-1/5 flex flex-col items-center min-w-[150px]"
        >
            {!isLoaded() && <Loading class="w-full h-fit animate-pulse" />}
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
                <Like id={id} />
            </div>
        </Link>
    );
};
