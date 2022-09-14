import "../styles/globals.scss";
import Layout from "../components/Layout";
import UserProvider from "../context/user";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     console.log("DARK");
  //   } else {
  //     console.log("LIGHT");
  //   }
  // }, []);

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
