import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import UI from "hocs/ErrorBoundary";
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
      <UI>
        <SWR >
          <ComponentThemeProvider>
            <Setting>
              <SnackbarProvider>
                <Layout initData={pageProps.fallback}>
                  <NextNProgress color="#00A859" />
                  <Component {...pageProps} />
                </Layout>
              </SnackbarProvider>
            </Setting>
          </ComponentThemeProvider>
        </SWR >
      </UI>
    </CacheProvider>
  );
}


export default MyApp;
