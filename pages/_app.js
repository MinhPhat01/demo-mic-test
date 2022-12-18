import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { SnackbarProvider } from "notistack";


function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </Layout>

  );
}

export default MyApp;
