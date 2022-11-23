import React from "react";
import Link from "next/link";
import Head from "next/head";

const YourData = () => {
  return (
    <>
      <Head>
        <title>Your data | Get Crew</title>
      </Head>
      <div className="flex item-center justify-center">
        <div className="flex justify-center w-full max-w-[1200px] items-center py-12 px-4">
          <div className="flex gap-4 flex-col-reverse md:flex-row w-full">
            <div className="w-full mt-12 md:mt-4 flex flex-col items-start justify-center aboutPage flex-1">
              <h1 className="text-3xl md:text-left text-center w-full mb-12">
                What do <span className="text-wearecrewBlue">Get Crew</span> do
                with your data?
              </h1>
              <div className="w-full flex flex-col md:flex-row gap-x-4 gap-y-4">
                <div className="aboutPageListX w-full md:w-1/2 ">
                  <strong>Let&apos;s start with what we don&apos;t do.</strong>
                  <ul className="mt-4">
                    <li>
                      <p>
                        We won&apos;t send any of your data to any 3rd parties.
                        Period.
                      </p>
                    </li>
                    <li>
                      <p>
                        We don&apos;t edit, add to or delete any of your data
                        without your express permission.
                      </p>
                    </li>
                    <li>
                      <p>
                        If you delete your profile we won&apos;t store and of
                        your previously saved data.
                      </p>
                    </li>
                    <li>
                      <p>
                        All of our payments are made via Stripe.  An authorised
                        and regulated payment portal. <br /> Get Crew have zero
                        access to your credit or debit card details.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 aboutPageListTicks">
                  <strong>What we do with your data.</strong>
                  <ul className="mt-4">
                    <li>
                      <p>
                        We store your data in a secure database for the length
                        of your term.
                      </p>
                    </li>
                    <li>
                      <p>
                        We monitor the data you input into your profile to make
                        sure <br /> there are no breaches in our terms and
                        conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        We use your email address to send you updates on the
                        company, <br /> your profile and your payment details
                        including receipts.
                      </p>
                    </li>
                    <li>
                      <p>
                        Once your profile is live any data you input into your
                        profile <br /> will be viewable by anyone visiting the
                        site.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full justify-center text-center mt-12">
                <p>
                  You can view our{" "}
                  <Link href="/terms-and-conditions">
                    <span className="text-wearecrewBlue underline cursor-pointer">
                      Terms and Conditions
                    </span>
                  </Link>
                   and 
                  <Link href="/privacy-policy">
                    <span className="text-wearecrewBlue underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </Link>
                   here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourData;
