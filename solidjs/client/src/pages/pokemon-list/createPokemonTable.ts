import { createResource, createSignal } from 'solid-js';
import { fetchPokemonPage } from '../../api/fetchPokemonPage';

export const createPokemonTable = () => {
    const [input, setInput] = createSignal('');
    const [pageNumber, setPageNumber] = createSignal(0);

    const [page] = createResource(
        () => ({ pageNumberCurrent: pageNumber(), inputCurrent: input() }),
        ({ pageNumberCurrent, inputCurrent }) =>
            fetchPokemonPage(pageNumberCurrent, inputCurrent).then((res) => {
                if (res.numberOfPages < pageNumberCurrent + 1) {
                    setPageNumber(0);
                }
                return res;
            })
    );

    return {
        input,
        setInput,
        pageNumber,
        nextPage: () => setPageNumber(pageNumber() + 1),
        previousPage: () => setPageNumber(pageNumber() - 1),
        page,
        canNextPage: () => pageNumber() + 1 < (page()?.numberOfPages || 0),
        canPreviousPage: () => pageNumber() > 0,
    };
};
