import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="mt-[60px] h-[calc(100vh-60px)]">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
