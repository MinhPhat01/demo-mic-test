import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import ErrorBoundaryUI from "hocs/ErrorBoundary";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "createEmotionCache";

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
