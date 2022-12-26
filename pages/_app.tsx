import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import App, { AppContext, AppProps } from "next/app";
import Layout from "components/layout/Layout";
import UI from "components/ErrorBoundary";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";
import { transformUrl } from "libs/transformUrl";
import { SETTING_API } from "apis";
import prefetchData from "libs/prefetchData";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "createEmotionCache";

type TProps = Pick<AppProps, "Component" | "pageProps"> & {
  initData: HOME_PAGE_COMMON
}

const clientSideEmotionCache = createEmotionCache();

// function MyApp({ Component, pageProps, initData }: TProps) {
function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, initData } = props;
  return (
    <CacheProvider value={emotionCache}>
      <UI>
        <SWR>
          <ComponentThemeProvider>
            <Setting>
              <SnackbarProvider>
                <Layout initData={initData}>
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

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context)

  const urls = [transformUrl(SETTING_API, {})]
  const { resList, fallback } = await prefetchData(urls, {})
  return {
    ...ctx, initData: resList
  }

}


export default MyApp;
