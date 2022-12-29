import "../styles/globals.css";
import { AppProps } from "next/app";
import createEmotionCache from "createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";
import ErrorBoundaryUI from "hocs/ErrorBoundary";
import ComponentThemeProvider from "hocs/ThemeProvider";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import Layout from "components/layout/Layout";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

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
    </CacheProvider >
  );
}


export default MyApp;
