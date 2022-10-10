import ShowDemoModal from "../components/ShowDemoModal";
import Head from "next/head";
import Link from "next/link";
import Accordion from "../components/Accordion";
import { useState } from "react";

const About = () => {
  const [showNeedCrew, setShowNeedCrew] = useState(true);
  const [showAmCrew, setShowAmCrew] = useState(false);

  const needCrewHandler = (e) => {
    e.preventDefault();
    setShowNeedCrew(true);
    setShowAmCrew(false);
  };
  const amCrewHandler = (e) => {
    e.preventDefault();
    setShowAmCrew(true);
    setShowNeedCrew(false);
  };

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

      <div className="aboutPage">
        {/* <div
          style={{
            backgroundImage: `url("images/newBannerBlackfaded.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full banner overflow-hidden flex justify-center items-center p-4 md:p-12 text-white relative"
        >
          <h1 className="text-1xl text-center md:text-3xl tracking-wide">
            Any experience. Any department. Anyone.
          </h1>
        </div> */}

        <div className="w-full flex justify-center mt-6 md:mt-12">
          <div className="flex flex-col items-center justify-center max-w-[1200px] gap-x-4 gap-y-4">
            <div className="snap-y snap-mandatory h-[calc(100vh-105px)] overflow-scroll">
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-center ">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex gap-x-12 max-w-[1200px]">
                    <div className="w-1/2">
                      <h1 className="text-4xl">
                        What is{" "}
                        <span className="text-wearecrewBlue">Get Crew</span>{" "}
                        <br /> and why do I need it?
                      </h1>
                    </div>
                    <div className="w-1/2">
                      <p>
                        <span className="text-wearecrewBlue">Get Crew</span> has
                        been designed and built with ALL crew in mind.
                        <br />
                        <br />
                        Gone are the days of dated, regional crew listing pages
                        hidden in the depths of a website.
                        <br />
                        <br />
                        Create a profile and have it readily accessible to any
                        Producer, Production Manager or Production needing crew
                        in the UK or Ireland.
                        <br />
                        <br />
                        The only place for crew.
                        <br />
                        Get Crew.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-center ">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex gap-x-12 max-w-[1200px]">
                    <div className="w-1/2">
                      <h1 className="text-4xl">The solution.</h1>
                    </div>
                    <div className="w-1/2">
                      <p>
                        <span className="text-wearecrewBlue">Get Crew</span> has
                        been designed and built with ALL crew in mind.
                        <br />
                        <br />
                        Gone are the days of dated, regional crew listing pages
                        hidden in the depths of a website.
                        <br />
                        <br />
                        Create a profile and have it readily accessible to any
                        Producer, Production Manager or Production needing crew
                        in the UK or Ireland.
                        <br />
                        <br />
                        The only place for crew.
                        <br />
                        Get Crew.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-start pt-12 overflow-hidden">
                <div className="w-full flex justify-center items-center gap-4 mb-12 ">
                  <div className="w-full max-w-[1200px]">
                    <div className="w-full text-center">
                      <h1 className="text-4xl mb-4">How does it work?</h1>
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col items-center">
                        
                        <div className="w-full flex justify-center gap-x-4">
                          <button
                            onClick={(e) => needCrewHandler(e)}
                            className={`
                              ${
                                showNeedCrew === true
                                  ? "border-wearecrewBlue"
                                  : "border-transparent"
                              }
                                break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px] border-wearecrewBlue shadow-md hoverScale w-full min-w-max md:w-[40%] p-4`}
                                          >
                                            <span className="min-w-max">I need crew</span>
                          </button>

                          <button
                                            onClick={(e) => amCrewHandler(e)}
                                            className={`
                              ${
                                showAmCrew === true
                                  ? "border-wearecrewBlue"
                                  : "border-transparent"
                              }
                              break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px] border-wearecrewBlue shadow-md hoverScale w-full  min-w-max md:w-[40%] p-4`}
                                          >
                            <span className="min-w-max">I am crew</span>
                          </button>
                        </div>

                        <div className="relative h-full w-full">
                          <div
                            className={`
                              ${
                                showNeedCrew === true
                                  ? "opacity-100 translate-x-[0%]"
                                  : "opacity-0 translate-x-[100%]"
                              } transform transition flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-around items-start py-4 absolute mt-12`}>
                            <div className="w-1/2">
                              <h1 className="text-4xl leading-relaxed">
                                The last place you&apos;ll need to look for
                                crew.
                              </h1>
                              <div className="flex gap-4 items-center">
                                <div className="my-8 w-1/2 flex flex-col gap-y-4 text-lg">
                                  <p>
                                    <strong>1.</strong> Pick a department.
                                  </p>
                                  <p>
                                    <strong>2.</strong> Filter by role.
                                  </p>
                                  <p>
                                    <strong>3.</strong> View the profile.
                                  </p>
                                </div>
                                <div className="w-1/2">
                                  <h1 className="text-center text-lg">
                                    Free to search!
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex justify-center mt-4">
                                <Link href="/I-need-crew/depts">
                                  <a className="bg-wearecrewBlue w-full text-center rounded-md shadow-md p-4 text-white">
                                    Get Started
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="w-1/2">
                              <div className="h-[calc(100vh-400px)] overflow-y-scroll">
                                <img src="/images/testIneedCrewImg.png" alt="" width="100%" height="200"/>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`
                  ${
                    showAmCrew === true
                      ? "opacity-100 translate-x-[0%]"
                      : "opacity-0 translate-x-[100%]"
                  } flex gap-x-4 transform transition gap-y-4 flex-col md:flex-row w-full md:justify-around items-start py-4 absolute top-0`}
                          >
                            <div className="w-full md:w-[40%]">
                              <h1 className="text-2xl">I am Crew </h1>
                              <div className="flex gap-4 items-center">
                                <div className="my-2 w-1/2">
                                  <p>
                                    <strong>1.</strong> Pick a department.
                                  </p>
                                  <p>
                                    <strong>2.</strong> Filter by role.
                                  </p>
                                  <p>
                                    <strong>3.</strong> View the profile.
                                  </p>
                                </div>
                                <div className="w-1/2">
                                  <h1 className="text-center text-lg">
                                    Free to search!
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex justify-center mt-4">
                                <Link href="/I-need-crew/depts">
                                  <a className="bg-wearecrewBlue rounded-md shadow-md p-4 text-white">
                                    Get Started
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="bg-white rounded-md shadow-md w-full md:w-[40%]">
                              <h1>Image</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen h-[calc(100vh-105px)] flex items-center justify-center">
                4
              </div>
            </div>

            {/* <div className="px-4 md:px-12 w-full flex flex-col md:flex-row gap-x-4 gap-y-4">
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
            </div> */}
            {/* <div className="px-4 md:px-12 flex flex-col md:flex-row gap-x-4 gap-y-4">
              <Accordion title="Two for the price of one.">
                <p>
                  {" "}
                  If you want to list yourself as an individual and your company
                  or if you&apos;re an Accountant training to be a Stunt Person
                  you can add another profile to your account at no extra cost!
                  <br />
                  <br />
                  Two profiles for the price of one.
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
                  and we&apos;ll talk you through the process.
                  <br />
                  <br />
                </p>
              </Accordion>
              <Accordion title="Not another diary service.">
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
                <p>
                  We actively share the platform and encourage the use of Get
                  Crew amongst Producers, Line Producers, Production Managers
                  and anyone else who needs crew in the UK and Ireland.
                </p>
              </Accordion>
              <Accordion title="Questions?">
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
            </div> */}

            {/* <div className="w-full flex gap-x-4 justify-center mt-12">
              <Link href="/terms-and-conditions">
                <small className="cursor-pointer">Terms & Conditions</small>
              </Link>
              <Link href="/privacy-policy">
                <small className="cursor-pointer">Privacy Policy</small>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
