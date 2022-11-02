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
          className="w-full banner flex flex-col justify-center items-center h-auto py-4 md:py-8 mb-8 text-white relative"
        >
          <h1 className="tracking-wide text-2xl w-full text-center md:text-3xl shadow-black">
            One simple plan. 
            <br />
            One great price.
          </h1>
        </div>

        <div className="h-full flex flex-col px-4 z-20">
          <div className="flex text-lg flex-col justify-start items-center text-center">
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
              This means 5% of your payment will go directly to plant trees all
              over the world.
              <br />
              <br />
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-center gap-4 w-full px-4 max-w-[1200px] text-lg">
            {plans?.map(
              (plan) =>
                plan.active && (
                  <div key={plan?.id} className="flex justify-center w-full">
                    <div className=" flex flex-col text-center items-center rounded-xl  p-4  w-full md:w-[300px] relative overflow-hidden neumorphBoxLg transform hover:scale-102 transition cursor-pointer border-b-2 border-wearecrewBlue"
                    onClick={() => processPayment(plan?.id)}
                    >
                      <h1 className="text-2xl md:text-3xl mb-4 z-50">
                        {plan?.name}
                      </h1>
                      <strong className="mb-2 md:text-2xl">
                        {plan?.description?.split(".")[0]}
                      </strong>
                      <small>£{plan?.price / 100} p/a</small>
                      <div className="flex flex-col">
                        {!user?.paid && (
                          <button
                            onClick={() => processPayment(plan?.id)}
                            className="rounded-md neumorphBoxSm px-4 py-2 mt-4  neumorphBoxSm z-2000 hover:text-wearecrewBlue transition"
                          >
                            {user?.data?.user !== null ? "Select" : "Sign Up"}
                          </button>
                        )}
                        <strong className="text-white  bg-wearecrewGreen py-1 px-12 absolute top-2 -right-12 transform z-40 rotate-45 shadow-md text-center">
                          4 Trees <br/>  Planted!
                        </strong>
                      </div>
                    </div>
                  </div>
                )
            )}
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
