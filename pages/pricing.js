import PricingOptions from "../components/PricingOptions"
import Head from "next/head";


const pricing = () => {

  return (
    <>
    <Head>
        <title>Pricing | Get Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>
    <PricingOptions/>
    </>
  )
}

export default pricing