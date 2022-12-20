
import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import UI from "components/ErrorBoundary";
import createEmotionCache from "./createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <UI>
      <SWR>
        <CacheProvider value={emotionCache}>
          <ComponentThemeProvider>
            <Setting>
              <SnackbarProvider>
                <Layout>
                  <NextNProgress color="#00A859" />
                  <Component {...pageProps} />
                </Layout>
              </SnackbarProvider>

            </Setting>
          </ComponentThemeProvider>
        </CacheProvider>
      </SWR >
    </UI>
  );
}

export default MyApp;
