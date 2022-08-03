import "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="bg-wearecrewLightGrey">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
