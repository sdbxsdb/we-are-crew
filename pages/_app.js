import "../styles/globals.scss";
import Layout from "../components/Layout";
import { useContext } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <div className="w-full">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
