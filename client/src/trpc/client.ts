import type { AppRouter } from '../../../server/src/trpc/app-router';

import { createTRPCClient } from '@trpc/client';
export const trpcClient = createTRPCClient<AppRouter>({
    url: 'http://localhost:3001/trpc',
});
