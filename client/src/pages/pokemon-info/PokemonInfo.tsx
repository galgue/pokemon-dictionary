import { useParams } from '@solidjs/router';
import { createResource } from 'solid-js';

export const PokemonInfo = () => {
    const params = useParams();

    // const [userData] = createResource(() => params.id, fetchUser);

    return (
        <div>
            <h1>Pokemon Info: {params.id}</h1>
        </div>
    );
};
