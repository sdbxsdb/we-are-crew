import ShowDemoModal from "../components/ShowDemoModal";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
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

      <div className="aboutPage relative">

        <div className="w-full flex justify-center mt-6 md:mt-12">
          <div className="flex flex-col items-center justify-center max-w-[1200px] gap-x-4 gap-y-4">
            <div className="snap-y snap-mandatory h-[calc(100vh-105px)] overflow-scroll">
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-center relative">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex gap-x-12 max-w-[1200px]">
                    <div className="w-1/2 flex items-center">
                      <h1 className="text-4xl">
                        What is{" "}
                        <span className="text-wearecrewBlue">Get Crew</span>{" "}
                        <br /> and why is it here?
                      </h1>
                    </div>
                    <div className="w-1/2">
                      <p>
                        <br />
                        As of 2022 the Film, Television and Broadcast industires
                        are some of the most technologically advanced industires
                        in the world.
                        <br />
                        <br />
                        Yet it&apos;s crew members still have to put up with
                        either expensive diary services or dated, regional crew
                        listing pages hidden in the depths of a website that no
                        one will ever see.
                        <br />
                        <br />
                        <span className="text-wearecrewBlue">Get Crew</span> has
                        the soloution.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="scroll-prompt">
                  <div className="scroll-prompt-arrow-container">
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-center relative">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex gap-x-12 max-w-[1200px]">
                    <div className="w-1/2 flex items-center">
                      <h1 className="text-4xl">The solution.</h1>
                    </div>
                    <div className="w-1/2 aboutPageListTicks">
                      <ul>
                        <li>
                          <p>
                            Your profile will be readily accessible to any
                            Production, Producer or PM needing crew in the UK or
                            Ireland.
                          </p>
                        </li>
                        <li>
                          <p>
                            Search for crew by department and then filter by
                            role or availability.
                          </p>
                        </li>
                        <li>
                          <p>No limit the number of crew we list.</p>
                        </li>
                        <li>
                          <p>
                            List yourself as an individual and your company at
                            no extra charge.
                          </p>
                        </li>
                        <li>
                          <p>
                            No relying on someone else answering a phone or
                            replying to email to check your availability.
                          </p>
                        </li>
                        <li>
                          <p>
                            1/10<sup>th</sup> of the cost compared to a
                            traditional diary service’s ££££.
                          </p>
                        </li>
                        <li>
                          <p>
                            No restrictions when it comes to your location, your
                            experience or your department.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="scroll-prompt">
                  <div className="scroll-prompt-arrow-container">
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-start pt-6 overflow-hidden relative">
                <div className="w-full flex justify-center items-center gap-4 mb-12 mt-12">
                  <div className="w-full max-w-[1200px]">
                    <div className="w-full text-left flex items-center justify-between">
                      <h1 className="text-4xl min-w-max">How does it work?</h1>
                      <div className="w-full flex justify-center gap-x-4">
                        <button
                          onClick={(e) => needCrewHandler(e)}
                          className={`
                              ${
                                showNeedCrew === true
                                  ? "border-wearecrewBlue"
                                  : "border-transparent"
                              }
                                break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px]  shadow-md hoverScale w-full min-w-max md:w-[40%] p-4`}
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
                              break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px] shadow-md hoverScale w-full  min-w-max md:w-[40%] p-4`}
                        >
                          <span className="min-w-max">I am crew</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col items-center">
                        <div className="relative h-full w-full">
                          <div
                            className={`
                              ${
                                showNeedCrew === true
                                  ? "opacity-100 translate-x-[0%]"
                                  : "opacity-0 translate-x-[100%]"
                              } transform transition flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-around items-center py-4 absolute mt-12`}
                          >
                            <div className="w-1/2">
                              <h1 className="text-3xl leading-relaxed">
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
                                  <h1 className="text-center text-2xl">
                                    4. Contact!
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex justify-center mt-4">
                                <Link href="/I-need-crew/depts">
                                  <a className="bg-wearecrewBlue w-full text-center rounded-md shadow-md p-4 text-white">
                                    View Crew Listings
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="w-1/2">
                              <div className="h-[calc(100vh-400px)] overflow-y-scroll -mt-6">
                                <img
                                  src="/images/newCrewSearchExample.png"
                                  alt=""
                                  width="100%"
                                  height="200"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className={`
                  ${
                    showAmCrew === true
                      ? "opacity-100 translate-x-[0%]"
                      : "opacity-0 translate-x-[100%]"
                  } flex gap-x-4 transform transition gap-y-4 flex-col md:flex-row w-full md:justify-around items-center py-4 absolute top-0 mt-12`}
                          >
                            <div className="w-1/2">
                              <h1 className="text-3xl leading-relaxed">
                                One place for your professional profile.{" "}
                              </h1>
                              <div className="flex gap-4 items-center justify-between">
                                <div className="my-4 w-full flex flex-col gap-y-4 text-lg">
                                  <p>
                                    <strong>1.</strong> Sign up with your email
                                    or Google account.
                                  </p>
                                  <p>
                                    <strong>2.</strong> Complete your profile.
                                  </p>
                                  <p>
                                    <strong>3.</strong> Select your package.
                                  </p>
                                  <p>
                                    <strong>4.</strong> That&apos;s it! Your
                                    profile will be live for the length of your
                                    term.
                                  </p>
                                </div>
                                <div className="min-w-max">
                                  <ShowDemoModal />
                                </div>
                              </div>
                              <div className="w-full flex justify-center mt-4">
                                <Link href="/I-need-crew/depts">
                                  <a className="bg-wearecrewBlue w-full text-center rounded-md shadow-md p-4 text-white">
                                    Sign Up
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="w-1/2">
                              <div className="h-[calc(100vh-380px)] overflow-y-scroll -mt-4">
                                <img
                                  src="/images/iAmCrew3D.png"
                                  alt=""
                                  width="100%"
                                  height="200"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-prompt">
                  <div className="scroll-prompt-arrow-container">
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                    <div className="scroll-prompt-arrow">
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="snap-start w-screen px-4 h-[calc(100vh-105px)] flex flex-col items-start justify-center relative overflow-hidden">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex gap-x-12 max-w-[1200px]">
                    <div className="w-1/2 flex items-center ">
                      <h1 className="text-4xl">Lets plant some trees!</h1>
                      <img
                        src="/images/pngwing.com.png"
                        alt=""
                        className="absolute bottom-0 w-1/2 -left-1/4 z-01 opacity-30"
                      />
                    </div>
                    <div className="w-1/2">
                      <div>
                        We all know the Film and Television industry isn’t
                        exactly green.
                        <br />
                        Waste food, hundreds of call sheets and sides printed,
                        engines running all day, numerous flights the list goes
                        on.
                        <br />
                        <br />
                        <span className="text-wearecrewBlue">
                          Get Crew
                        </span>{" "}
                        will donate 15% of your payment to{" "}
                        <a
                          href="https://onetreeplanted.org/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-wearecrewGreen"
                        >
                          One Tree Plated
                        </a>{" "}
                        to help combat the Film and Television industries carbon
                        footprint.
                        <br />
                        <br />
                        One Tree Planted plant their trees in North and South
                        America, Asia, Africa, Europe and the Pacific.
                        <br />
                        <br />
                        <strong>$1 = 1 tree.</strong>
                        <br />
                        <br />
                        <strong>To put that into perspective:</strong>
                        <div className="ml-4">
                          <br />- 1 year listing will plant{" "}
                          <strong>23 trees.</strong>
                          <br />- 2 year listing will plant{" "}
                          <strong>33 trees.</strong>
                          <br />- Lifetime (30 years) listing will plant{" "}
                          <strong>51 trees.</strong>
                        </div>
                        <br />
                        <br />
                        Help us to help the world.
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
