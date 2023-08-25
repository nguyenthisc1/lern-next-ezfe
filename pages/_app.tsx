import axiosClient from '@/api/api-client';
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import { createEmotionCache, theme } from '@/utils';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import '../styles/prism.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <SWRConfig
                    value={{
                        fetcher: (url) => axiosClient.get(url),
                        shouldRetryOnError: false,
                    }}
                >
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
