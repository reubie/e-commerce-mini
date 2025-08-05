import { QueryClient } from '@tanstack/react-query';

// Query client config
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Retry failed requests 2 times
      retry: 2,
      // Cache for 5 minutes
      staleTime: 5 * 60 * 1000,
      // Keep in cache for 10 minutes
      gcTime: 10 * 60 * 1000,
      // Refetch on window focus
      refetchOnWindowFocus: false,
    },
    mutations: {
      // Retry mutations once
      retry: 1,
    },
  },
}); 