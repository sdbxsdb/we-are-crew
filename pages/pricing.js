import PricingOptions from "../components/PricingOptions"
import Head from "next/head";
import initStripe from 'stripe';




const pricing = ({plans}) => {

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
    <PricingOptions plans={plans}/>
    </>
  )
}

export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const {data: prices} = await stripe.prices.list()

  
  const plans = await Promise.all(prices.map(async (price) => {
    const product = await stripe.products.retrieve(price.product)
    // console.log({product});
    return {
      id: price?.id,
      name: product?.name,
      description: product?.description,
      price: price?.unit_amount,
      interval: price?.recurring?.interval || null,
      currency: price?.currency,
    }
  }))

  // console.log("DATA STRIPE- ", prices);

  return {
    props: { 
      plans
    }
  }
}

export default pricing