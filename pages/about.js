import ShowDemoModal from "../components/ShowDemoModal";
import Head from "next/head";
import Link from "next/link";
import Accordion from "../components/Accordion";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Get Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>

      <div className="aboutPage pb-12">
        <div
          style={{
            backgroundImage: `url("images/newBannerBlackfaded.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full banner overflow-hidden flex justify-center items-center p-4 md:p-12 mb-6 md:mb-12 text-white relative"
        >
          <h1 className="text-1xl text-center md:text-3xl tracking-wide">
            Any experience. Any department. Anyone.
          </h1>
          {/* <img
            src="/images/bannerBg4.png"
            alt=""
            width="100%"
            height="100%"
            className="absolute z-30 opacity-10 -top-[40px] md:-top-[110px]"
          /> */}
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center max-w-[1200px] gap-x-4 gap-y-4">
            <div className="px-4 md:px-12 w-full flex flex-col md:flex-row gap-x-4 gap-y-4">
              <Accordion title="Keeping it Green">
                <p>
                  We all know the Film and Television industry isn’t exactly
                  green.
                  <br />
                  Waste food, hundreds of call sheets and sides printed, engines
                  running all day, numerous flights the list goes on.
                  <br />
                  <br />
                  Get Crew will donate 15% of your payment to{" "}
                  <a
                    href="https://onetreeplanted.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-wearecrewBlue"
                  >
                    One Tree Plated
                  </a>{" "}
                  to help combat the Film and Television industries carbon
                  footprint.
                  <br />
                  One Tree Planted plant their trees in North and South America,
                  Asia, Africa, Europe and the Pacific.
                  <br />
                  <br />
                  <strong>$1 = 1 tree.</strong>
                  <br />
                  <br />
                  <strong>To put that into perspective:</strong>
                  <br />- 1 year listing will plant <strong>23 trees.</strong>
                  <br />- 2 year listing will plant <strong>33 trees.</strong>
                  <br />- Lifetime (30 years) listing will plant{" "}
                  <strong>51 trees.</strong>
                  <br />
                  <br />
                  Help us to help the world.
                </p>
              </Accordion>
              <Accordion title="What is Get Crew?">
                <h1 className="text-2xl">What is Get Crew?</h1>
                <p>
                  Get Crew has been designed and built with ALL crew in mind.
                  <br />
                  <br />
                  Gone are the days of dated, regional crew listing pages hidden
                  in the depths of a website.
                  <br />
                  <br />
                  Create a profile and have it readily accessible to any
                  Producer, Production Manager or Production needing crew in the
                  UK or Ireland.
                  <br />
                  <br />
                  The only place for crew.
                  <br />
                  Get Crew.
                </p>
              </Accordion>
            </div>
            <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4">
              <Accordion title="Multiple profiles for the price of one.">
                <h1 className="text-2xl mb-2">
                  Multiple profiles for the price of one.
                </h1>
                <p>
                  {" "}
                  If you want to list yourself as an individual and your company
                  or if you&apos;re an Accountant training to be a Stunt Person
                  and we&apos;ll add another profile to your account at no extra
                  cost!
                  <br />
                  <br />
                  Just get in touch at
                  <a
                    className=" text-wearecrewBlue"
                    href="mailto:crew@getcrew.pro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    crew@getcrew.pro{" "}
                  </a>
                  .
                  <br />
                  <br />
                </p>
              </Accordion>
              <Accordion title="Not another diary service.">
                <h1 className="text-2xl mb-2">Not another diary service.</h1>
                <ul>
                  <li>
                    <p>
                      All your information including availability, CV, credits
                      and more easily viewed and shareable.
                    </p>
                  </li>
                  <li>
                    <p>No limit the number of crew we list.</p>
                  </li>
                  <li>
                    <p>
                      List yourself as an individual and your company at no
                      extra charge.
                    </p>
                  </li>
                  <li>
                    <p>
                      No relying on someone else answering a phone or replying
                      to email to check your availability.
                    </p>
                  </li>
                  <li>
                    <p>
                      1/10<sup>th</sup> of the cost compared to a traditional
                      diary service’s ££££.
                    </p>
                  </li>
                  <li>
                    <p>
                      No restrictions when it comes to your location, your
                      experience or your department.
                    </p>
                  </li>
                </ul>
              </Accordion>
            </div>
            <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4">
              <Accordion title="How does it work?">
                <h1 className="text-2xl mb-2">How does it work?</h1>
                <ul>
                  <li>
                    <h1>1.</h1>
                    <span>
                      Sign up with your email address or Google account to
                      create your profile.
                    </span>
                  </li>
                  <li>
                    <h1>2.</h1>
                    <span>
                      Save your profile and when it&apos; complete, pay via
                      secure Stripe Payment (you’ll need a credit or debit
                      card).
                    </span>
                  </li>
                  <li>
                    <h1>3.</h1>
                    <span>
                      That’s it! Your profile will then be live and ready to be
                      viewed and shared across the biggest productions crewing
                      up across the UK and Ireland.
                    </span>
                  </li>
                  <ShowDemoModal />
                </ul>
              </Accordion>
              <Accordion title="Extremely Affordable?">
                <h1 className="text-2xl mb-2">Extremely Affordable?</h1>

                <p>Yes, extremely. We have 3 options:</p>
                <ul className="my-4 flex flex-col gap-y-4">
                  <li>
                    <strong>- 1 Year Listing</strong>{" "}
                    <p className="ml-6">
                      50p per day <small>- (£180)</small>
                    </p>
                  </li>
                  <li>
                    <strong>- 2 Year Listing</strong>{" "}
                    <p className="ml-6">
                      35p per day <small>- (£260)</small>
                    </p>
                  </li>
                  <li>
                    <strong>- Lifetime (30 Year) Listing</strong>{" "}
                    <p className="ml-6">
                      3p per day<small> - (£399)</small>
                    </p>
                  </li>
                </ul>

                <p>
                  One price for every grade. No hidden charges and your listing
                  will be visible to productions for the length of your term.
                </p>
              </Accordion>
            </div>
            <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4">
              <Accordion title="We Share.">
                <h1 className="text-2xl mb-2">We Share.</h1>
                <p>
                  We actively share the platform and encourage the use of Get
                  Crew amongst Producers, Line Producers, Production Managers
                  and anyone else who needs crew in the UK and Ireland.
                </p>
              </Accordion>
              <Accordion title="Questions?">
                <h1 className="text-2xl mb-2">Questions?</h1>
                <p>
                  If you’ve any questions about any aspect of Get Crew just send
                  us an email to{" "}
                  <a
                    href="mailto:crew@wearecrew.com"
                    className="text-wearecrewBlue"
                  >
                    crew@getcrew.pro
                  </a>
                </p>
              </Accordion>
            </div>
            <div className="w-full flex gap-x-4 justify-center mt-4">
              <Link href="/terms-and-conditions">
                <small className="cursor-pointer">Terms & Conditions</small>
              </Link>
              <Link href="/privacy-policy">
                <small className="cursor-pointer">Privacy Policy</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
