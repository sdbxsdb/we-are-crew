import "../styles/globals.scss";
import Layout from "../components/Layout";
import UserProvider from "../context/user";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
