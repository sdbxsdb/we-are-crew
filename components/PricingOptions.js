import { useState, useEffect } from "react";
import { useUser } from "../context/user";
import { useRouter } from "next/router";
import axios from "axios";
import { setCookie } from "cookies-next";

import { supabase } from "../utils/supabaseClient";
import { loadStripe } from "@stripe/stripe-js";

const PricingOptions = ({ plans, req, res }) => {
  const [canViewPricing, setCanViewPricing] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  // console.log("STRIPE CUSTOMER ID-", user.stripe_customer);

  setCookie("stripe_customer", user.stripe_customer);

  // console.log("USER-", user.paid);

  // useEffect(() => {
  //   if (user?.data?.user === null) {
  //     router.push("/");
  //   } else {
  //     setCanViewPricing(true);
  //   }
  // });

  const processPayment = async (planId) => {
    // const session = await supabase.auth.getSession();
    if (user?.data?.user) {
      const res = await axios.post(`/api/create-stripe-session`, {
        planId: planId,
        // token: session.data.session.access_token,
        // stripeID: user.stripe_customer
      });

      const data = res?.data;
      // console.log("RES STATUTS-", res.status);
      // console.log("RES BODY-", res);
      if (res?.status === 200) {
        location.replace(data.redirectURL);
      }
    } else {
      router.push("/my-crew");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full justify-center mb-12 relative">
        <div
          style={{
            backgroundImage: `url("images/newBannerBlackfaded.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full banner flex flex-col justify-center items-center p-6 md:p-12 mb-8 text-white relative"
        >
          <h1 className=" tracking-wide text-2xl w-full text-center md:text-3xl shadow-black">
            Simple plans. Better prices.
          </h1>
        </div>

        <div className="h-full flex flex-col px-4 z-20">
          <div className="flex flex-col justify-start items-center text-center md:mb-12">
            <img
              src="/images/treeLogoStampGreen.png"
              width="120px"
              alt="One Tree Logo"
            />
            <p>
              <span className="text-wearecrewBlue">Get Crew</span> are proudly
              partnered with{" "}
              <a
                href="https://onetreeplanted.org/
                "
                rel="noreferrer"
                target="_blank"
              >
                One<strong className="text-oneTreeGreen">Tree</strong>Planted.
              </a>
              <br />
              This means 15% of your payment will go directly to plant trees all
              over the world.
              <br />
              <br />
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full px-4 max-w-[1200px]">
            {plans?.map((plan) => (
              <div
                key={plan?.id}
                className={`flex justify-between w-full ${
                  plan?.price === 39900
                    ? "md:absolute justify-around  "
                    : "md:mx-20 md:px-12"
                }`}
              >
                <div
                  className={`bg-white flex flex-col text-center items-center rounded-xl shadow-md p-4 border-wearecrewBlue w-full md:w-[300px] relative overflow-hidden ${
                    plan?.price === 39900 ? "border-4 py-12 z-1000" : "border-2"
                  }`}
                >
                  <h1 className="text-2xl md:text-3xl mb-4 z-50">
                    {plan?.name}
                  </h1>
                  <strong className="mb-2 md:text-2xl">
                    {plan?.description.split(".")[0]}
                  </strong>
                  <small>
                    £{plan?.price / 100}
                    {plan?.price === 26000 ? (
                      <span>
                        {" "}
                        / 2 years <br /> <strong>33 trees planted </strong>{" "}
                        <br /> Profile listed for 2 years
                      </span>
                    ) : plan.price === 18000 ? (
                      <span>
                        {" "}
                        / years <br /> <strong>
                          23 trees planted
                        </strong> <br /> Profile listed for 1 year{" "}
                      </span>
                    ) : (
                      <span>
                        {" "}
                        one off payment <br /> <strong>
                          51 trees planted
                        </strong>{" "}
                        <br /> Profile listed until you retire
                      </span>
                    )}
                  </small>
                  <div className="flex flex-col">
                    {!user?.paid && (
                      <button
                        onClick={() => processPayment(plan?.id)}
                        // type="submit"
                        // role="link"
                        className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey z-2000 hover:bg-white transition"
                      >
                        {user?.data?.user !== null ? "Select" : "Sign Up"}
                      </button>
                    )}
                    {plan?.price === 39900 && (
                      <strong className="text-white bg-wearecrewGreen py-1 px-6 absolute top-[19px] -right-8 transform rotate-45 shadow-md">
                        Best Value
                      </strong>
                    )}
                    {plan?.price === 26000 && (
                      <strong className="text-white bg-wearecrewGreen py-1 px-6 absolute top-4 -right-8 transform rotate-45 shadow-md">
                        28% off  
                      </strong>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {user?.paid && (
            <div className="w-full flex justify-center">
              <div className="shadow-md mt-12 max-w-max rounded-md p-4 bg-wearecrewGreen text-white">
                <span>
                  Your profile has been live since {user?.dateOfPayment}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingOptions;
