import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import UI from "components/ErrorBoundary";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SWR from "contexts/SWR";
import Setting from "contexts/Settings";

// Client-side cache, shared for the whole session of the user in the browser.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UI>
      <SWR>
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

      </SWR >
    </UI>
  );
}

export default MyApp;
