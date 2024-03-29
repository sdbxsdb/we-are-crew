import PricingOptions from "../components/PricingOptions";
import Head from "next/head";
import initStripe from "stripe";
import Link from "next/link";
import Footer from "../components/Footer";

const pricing = ({ plans }) => {
  return (
    <>
      <Head>
        <title>Pricing | Get Crew</title>
      </Head>
      <div className="relative ">
        <PricingOptions plans={plans} />
        <div className="w-full flex px-8 pb-20 gap-x-4 text-center justify-center mt-0 md:mt-4">
          <small>By signing up to Get Crew you agree to our terms and conditions and privacy policy linked below.  If you have any questions, please contact us at crew@getcrew.pro.</small>
        </div>
        <Footer/>
      </div>
    </>
  );
};


export const getStaticProps = async () => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

  const { data: prices } = await stripe.prices.list();

  const plans = await Promise.all(
    prices?.map(async (price) => {
      const product = await stripe.products.retrieve(price.product);
      // console.log({product});
      // console.log(product.name + " " + product.active)

      return {
        id: price?.id,
        name: product?.name,
        description: product?.description,
        price: price?.unit_amount,
        interval: price?.recurring?.interval || null,
        currency: price?.currency,
        active: product?.active,
      };
    })
  );


  // console.log("DATA STRIPE- ", prices);

  return {
    props: {
      plans,
    },
    revalidate: 10, // 10 seconds
  };
};

export default pricing;
