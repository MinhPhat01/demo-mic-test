import "../styles/globals.css";
import { AppProps } from "next/app";

import SWR from "contexts/SWR";
import Setting from "contexts/Settings";
import createEmotionCache from "createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import ErrorBoundaryUI from "hocs/ErrorBoundary";
import ComponentThemeProvider from "hocs/ThemeProvider";

import Layout from "components/layout/Layout";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: {
    initData: [];
    fallback: {};
  };
}
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ErrorBoundaryUI>
        <SnackbarProvider>
          <ComponentThemeProvider>
            <SWR fallback={pageProps.fallback}>
              <Setting>
                <Layout>
                  <NextNProgress color="#00A859" />
                  <Component {...pageProps} />
                </Layout>
              </Setting>
            </SWR>
          </ComponentThemeProvider>
        </SnackbarProvider>
      </ErrorBoundaryUI>
    </CacheProvider>
  );
}

export default MyApp;
