import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import Loading from "../components/loading";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error: any, query: any) => {
            console.log(error, query);
            if (query.state.data !== undefined) {
                alert("에러가 났어요!" + error.message);
            }
        },
        onSuccess: (data) => {
            console.log("success : ", data);
        },
    }),
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>...로딩중</div>}>
                <Component {...pageProps} />
            </Suspense>
        </QueryClientProvider>
    );
}

export default MyApp;
