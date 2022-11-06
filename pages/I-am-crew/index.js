import Account from "../../components/Account";
import Head from "next/head";



const IAmCrew = () => {

  return (
    <>
      <Head>
        <title>I Am Crew | Get Crew</title>
        <meta name="keywords" content="I Am Crew" />
        <meta
          name="description"
          content="Your Get Crew profile page.  You can easily list your availability, credits, website, IMDB, upload your CV and more."
        />
      </Head>

      <Account/>

    </>
  );
};

export default IAmCrew;
