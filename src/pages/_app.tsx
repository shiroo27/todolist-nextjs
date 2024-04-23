import React from 'react';
import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) =>
    <Component {...pageProps} />