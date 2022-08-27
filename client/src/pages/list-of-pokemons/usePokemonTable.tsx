import {
    createColumnHelper,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    PaginationState,
    ColumnFiltersState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { trpc } from 'utils/trpc';

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

const columnHelper = createColumnHelper<Pokemon>();

const columns = [
    columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
        enableColumnFilter: true,
    }),
    columnHelper.accessor('image', {
        cell: (info) => info.getValue(),
    }),
];

export const usePokemonTable = () => {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    );

    const [filtersState, setFilters] = useState<ColumnFiltersState>([]);

    const filters = useMemo(
        () =>
            new Map<string, string>(
                filtersState.map((filter) => [
                    filter.id,
                    filter.value as string,
                ])
            ),
        [filtersState]
    );

    const { data, isLoading, isError } = trpc.useQuery(
        [
            'pokemon.page',
            {
                limit: pageSize,
                offset: pageIndex * pageSize,
                pokemonName: filters.get('name'),
            },
        ],
        {
            keepPreviousData: true,
            onSuccess(data) {
                if (data.numberOfPages - 1 < pageIndex) {
                    setPagination(({ pageSize }) => ({
                        pageSize,
                        pageIndex: 0,
                    }));
                }
            },
        }
    );

    const table = useReactTable({
        columns,
        data: data?.pokemons || [],
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        pageCount: data?.numberOfPages ?? -1,
        state: {
            pagination,
            columnFilters: filtersState,
        },
        onPaginationChange: setPagination,
        onColumnFiltersChange: setFilters,
        manualPagination: true,
    });

    const filterName: [string, (value: string) => void] = [
        table.getColumn('name').getFilterValue() as string,
        (value: string) => table.getColumn('name').setFilterValue(value),
    ];

    return {
        data: data?.pokemons,
        isLoading,
        isError,
        pagination: {
            canNextPage: table.getCanNextPage(),
            canPrevPage: table.getCanPreviousPage(),
            nextPage: table.nextPage,
            prevPage: table.previousPage,
        },
        filters: {
            name: filterName,
        },
    };
};
