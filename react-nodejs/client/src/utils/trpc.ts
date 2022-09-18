import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../../../server/src/trpc/app-router';

export const trpc = createReactQueryHooks<AppRouter>();
