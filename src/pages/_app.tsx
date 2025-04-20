
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from 'next/app';
import ToastContainer from "@/components/ui/ToastContainer";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default MyApp;
