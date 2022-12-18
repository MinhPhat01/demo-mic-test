import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { SnackbarProvider } from "notistack";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SnackbarProvider>
        <NextNProgress color="#00A859" />
        <Component {...pageProps} />
      </SnackbarProvider>
    </Layout>
  );
}

export default MyApp;
