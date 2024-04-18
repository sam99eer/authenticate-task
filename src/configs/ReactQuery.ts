import { QueryClient, QueryClientConfig } from 'react-query';

export const queryClientProps: QueryClientConfig = {
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: 300000,
        },
        mutations: {
            retry: 0,
        },
    },
};

export const queryClient = new QueryClient(queryClientProps);
