import { useState, useEffect } from "react";
import { useUser } from "../context/user";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from 'cookies'
import { supabase } from "../utils/supabaseClient";
import { loadStripe } from "@stripe/stripe-js";

const PricingOptions = ({ plans }) => {
  const [canViewPricing, setCanViewPricing] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  // console.log("STRIPE CUSTOMER ID-", user.stripe_customer);

  const cookies = new Cookies(req, res)

  // Set a cookie
  cookies.set('stripe_customer', user.stripe_customer, {
    httpOnly: true // true by default
})

  useEffect(() => {
    if (user?.data?.user === null) {
      router.push("/");
    } else {
      setCanViewPricing(true);
    }
  });

  const processPayment = async (planId) => {
    // const session = await supabase.auth.getSession();
    const res = await axios.post(`/api/create-stripe-session`, {
      planId: planId,
      // token: session.data.session.access_token,
      // stripeID: user.stripe_customer
    });

    const data = res?.data;
    // console.log("RES STATUTS-", res.status);
    // console.log("RES BODY-", res);
    if (res.status === 200) {
      location.replace(data.redirectURL);
    }

  };

  return (
    <>
      {canViewPricing && (
        <div className="flex flex-col items-center w-full justify-center mb-12 relative">
          <div className="w-full banner flex flex-col justify-center items-center p-12 mb-8 text-white relative">
            <h1 className="text-2xl text-center md:text-3xl">
              Simple plans. Better prices. Help the world.
            </h1>
            {/* <p>Get yourself out there</p> */}
            <img
              src="/images/bannerBg4.png"
              alt=""
              width="100%"
              className="absolute z-0 opacity-10 -top-[40px] md:-top-[110px]"
            />
          </div>

          <div className="h-full flex flex-col px-4 z-20">
            <div className="flex flex-col justify-start items-center text-center mb-12">
              <img
                src="/images/treeLogoStampGreen.png"
                width="150px"
                alt="One Tree Logo"
              />
              <p>
                Get Crew are proudly partnered with{" "}
                <a
                  href="https://onetreeplanted.org/
                "
                  rel="noreferrer"
                  target="_blank"
                >
                  One<strong className="text-oneTreeGreen">Tree</strong>Planted.
                </a>
                <br />
                15% of your payment will go directly to plant trees all over the
                world.
                <br />
                <br />
              </p>
              <strong>To put that into perspective:</strong>
              <div className="flex md:flex-row flex-col items-center gap-x-4">
                <p>
                  1 year listing will plant{" "}
                  <strong className="">23 trees.</strong>
                </p>
                <p>
                  2 year listing will plant{" "}
                  <strong className="">33 trees.</strong>
                </p>
                <p>
                  Liftime (30 years) listing will plant{" "}
                  <strong>51 trees.</strong>
                </p>
              </div>

              <p className="mt-4">Help us to help the world.</p>
            </div>
            <div className="flex justify-around items-center flex-wrap gap-4 w-full px-4 max-w-[1200px]">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-full md:w-[300px]"
                >
                  <h1 className="text-3xl mb-4">{plan.name}</h1>
                  <strong className="text-2xl">{plan.description.split('.')[0]}.</strong>
                  <small>
                    £{plan.price / 100}
                    {plan.price === 26000
                      ? " / 2 years"
                      : plan.price === 18000
                      ? " / year"
                      : " one off payment"}
                  </small>
                  <button
                    onClick={() => processPayment(plan.id)}
                    // type="submit"
                    // role="link"
                    className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition"
                  >
                    Select
                  </button>
                  {plan.price === 39900 && (
                    <strong className="text-wearecrewGreen">Best Value</strong>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingOptions;
