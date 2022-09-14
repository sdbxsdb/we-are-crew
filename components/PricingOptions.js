import { useState, useEffect } from "react";
import { useUser } from "../context/user";
import { useRouter } from "next/router";

const PricingOptions = () => {
  const [canViewPricing, setCanViewPricing] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  // console.log(user.data.user);

  useEffect(() => {
    if (user?.data?.user === null) {
      router.push("/");
      console.log("TEST");
      console.log("VIEW PRICING-", canViewPricing);
    } else {
      setCanViewPricing(true);
    }
  });

  return (
    <>
      {canViewPricing && (
        <div className="flex flex-col items-center w-full justify-center md:h-[calc(100vh-296px)] ">
          <div className="w-full banner flex flex-col justify-center items-center p-12 mb-12 text-white">
            <h1 className="text-2xl text-center md:text-3xl">
              Simple plans. Better prices.
            </h1>
            {/* <p>Get yourself out there</p> */}
            <img src="/images/bannerBg4.png" alt="" width="100%" height="100%" className="absolute z-30 opacity-10 -top-[40px] md:-top-[110px]" />
          </div>

          <div className="flex justify-around items-center h-full mt-12 flex-wrap gap-4 w-full px-4 max-w-[1200px]">
            <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
              <h1 className="text-3xl mb-4">One Year Listing</h1>
              <strong className="text-2xl">50p per day</strong>

              <p className="mt-4">
                Profile visable for <strong>356 days</strong> from when you go
                live.
              </p>
              <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">
                Select
              </button>
            </div>
            <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
              <h1 className="text-3xl mb-4">Two Year Listing</h1>
              <strong className="text-2xl">36p per day</strong>

              <p className="mt-4">
                Profile visable for <strong>730 days</strong> from when you go
                live.
              </p>
              <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">
                Select
              </button>
            </div>
            <div className="bg-white flex flex-col text-center items-center rounded-md shadow-md p-4 border-2 border-wearecrewBlue w-[300px]">
              <h1 className="text-3xl mb-4">30 Year Listing</h1>
              <strong className="text-2xl">3p per day</strong>

              <p className="mt-4">
                Profile visable for{" "}
                <strong>
                  30 <cite>years</cite>
                </strong>{" "}
                when you go live.
              </p>
              <button className="border-2 rounded-md shadow-md px-4 py-2 border-wearecrewBlue mt-4 bg-wearecrewBlue text-white hover:text-wearecrewDarkestGrey hover:bg-white transition">
                Select
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingOptions;
