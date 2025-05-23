import React from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import type {AppProps} from 'next/app';
import ToastContainer from "@/components/ui/ToastContainer";
import { ThemeProvider } from '@/contexts/ThemeContext';

const queryClient = new QueryClient();

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Component {...pageProps} />
                <ToastContainer/>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
