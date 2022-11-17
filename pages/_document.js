import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <>
            <meta
              name="title"
              content="Get Crew | UK & Ireland - The Only Place for Crew"
            />
            <meta
              name="description"
              content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
            />
            {/* 
<!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.getcrew.pro/" />
            <meta
              property="og:title"
              content="Get Crew | UK & Ireland - The Only Place for Crew"
            />
            <meta
              property="og:description"
              content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
            />
            <meta property="og:image" content="/images/gcFbLogoNewAllWhite.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.getcrew.pro/" />
            <meta
              property="twitter:title"
              content="Get Crew | UK & Ireland - The Only Place for Crew"
            />
            <meta
              property="twitter:description"
              content="A dedicated website for crew to showcase their professional credentials and for productions to find crew."
            />
            <meta property="twitter:image" content="/images/gcFbLogoNewAllWhite.png" />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="mobilenav-root"></div>
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
