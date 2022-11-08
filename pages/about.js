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
      </Head>

      <div className="aboutPage relative">
        <div className="w-full flex justify-center mt-6 md:mt-12">
          <div className="flex flex-col items-center justify-center max-w-[1200px] gap-x-4 gap-y-4">
            <div className="md:snap-y md:snap-mandatory md:h-[calc(100vh-105px)] overflow-scroll">
              <div className="snap-start mt-12 md:mt-0 w-screen px-4 md:h-[calc(100vh-105px)] flex flex-col items-start justify-center relative">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex flex-col md:flex-row gap-x-12 max-w-[1200px]">
                    <div className="w-full md:w-1/2 flex items-center">
                      <h1 className="text-4xl mb-4 md:mb-0 w-full">
                        What is{" "}
                        <span className="text-wearecrewBlue">Get Crew</span>{" "}
                        <br /> and why is it here?
                      </h1>
                    </div>
                    <div className="w-full md:w-1/2">
                      <span className="text-lg">
                        The Film, Television and Broadcast industries are some
                        of the most technologically advanced in the world.
                        <br />
                        <br />
                        Yet its crew members still have to put up with either
                        expensive diary services or dated, regional crew listing
                        pages hidden in the depths of a website that no one will
                        ever see.
                        <br />
                        <br />
                        Productions looking for crew. Crew looking for
                        productions.
                        <br />
                        <br />
                        <span className="text-wearecrewBlue">Get Crew</span> has
                        the solution.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block scroll-prompt">
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
              <div className="snap-start mt-12 md:mt-0 w-screen px-4 md:h-[calc(100vh-105px)] flex flex-col items-start justify-center relative">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex w-full flex-col md:flex-row gap-x-12 max-w-[1200px]">
                    <div className="w-full md:w-1/2 flex items-center">
                      <h1 className="text-4xl mb-4 md:mb-0 w-full">
                        The Solution
                      </h1>
                    </div>
                    <div className="w-full md:w-1/2  aboutPageListTicks text-lg">
                      <ul className="w-full">
                        <li>
                          <p>
                            The only platform of its kind spanning the whole of
                            the UK & Ireland.
                          </p>
                        </li>
                        <li>
                          <p>
                            Find crew and list your professional profile in one
                            place.
                          </p>
                        </li>
                        <li>
                          <p>A modern and easy-to-use platform for all.</p>
                        </li>
                        <li>
                          <p>
                            Quickly and easily update your availability,
                            credits, IMDB page, website and more.
                          </p>
                        </li>
                        <li>
                          <p>
                            Refine searches by department, then filter by role,
                            availability and location.
                          </p>
                        </li>
                        <li>
                          <p>
                            No relying on someone answering a phone or replying
                            to an email to check availability.
                          </p>
                        </li>
                        <li>
                          <p>
                            1/10
                            <small>
                              <sup>th</sup>
                            </small>{" "}
                            of the cost of a traditional diary service.
                          </p>
                        </li>
                        <li>
                          <p>
                            No restrictions when it comes to your location,
                            experience, department or role.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block scroll-prompt">
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
              <div className="snap-start w-screen px-4 md:h-[calc(100vh-105px)] flex flex-col items-start justify-start pt-6 overflow-hidden relative">
                <div className="w-full flex justify-center items-center gap-4 mb-12 mt-12">
                  <div className="w-full max-w-[1200px]">
                    <div className="w-full text-left flex flex-col md:flex-row items-center justify-between">
                      <h1 className="text-4xl text-left w-full min-w-max mb-4 md:mb-0">
                        How does it work?
                      </h1>
                      <div className="w-full flex justify-center gap-x-4">
                        <button
                          onClick={(e) => needCrewHandler(e)}
                          className={`
                              ${
                                showNeedCrew === true
                                  ? "border-wearecrewBlue"
                                  : "border-transparent"
                              }
                                break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px] neumorphBoxMd hoverScale w-full min-w-max md:w-[40%] p-4`}
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
                              break-normal largeBtn text-wearecrewDarkestGrey font-anton text-3xl lg:text-4xl text-center uppercase leading-relaxed border-b-[10px] neumorphBoxMd hoverScale w-full  min-w-max md:w-[40%] p-4`}
                        >
                          <span className="min-w-max">I am crew</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col items-center">
                        <div className="relative h-full min-h-[500px] w-full">
                          <div
                            className={`
                              ${
                                showNeedCrew === true
                                  ? "opacity-100 translate-x-[0%]"
                                  : "opacity-0 translate-x-[100%]"
                              } transform transition flex gap-x-4 gap-y-4 flex-col md:flex-row w-full md:justify-around items-center py-4 absolute mt-4 md:mt-12`}
                          >
                            <div className="w-full md:w-1/2">
                              <h1 className="text-3xl leading-relaxed">
                                The last place you&apos;ll need to look for
                                crew.
                              </h1>
                              <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="my-8 w-full md:w-1/2 flex flex-col gap-y-4 text-lg">
                                  <p>
                                    <strong>1.</strong> Pick a department.
                                  </p>
                                  <p>
                                    <strong>2.</strong> Filter by role, region
                                    or availability.
                                  </p>
                                  <p>
                                    <strong>3.</strong> View the profile.
                                  </p>
                                  <p>
                                    <strong>4.</strong> Contact!
                                  </p>
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
                            <div className="hidden md:block w-full md:w-1/2 mt-8 md:mt-0">
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
                  } flex gap-x-4 transform transition gap-y-4 flex-col md:flex-row w-full md:justify-around items-center py-4 absolute top-0 mt-4 md:mt-12`}
                          >
                            <div className="w-full md:w-1/2">
                              <h1 className="text-3xl leading-relaxed">
                                One place for your professional profile.{" "}
                              </h1>
                              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="my-4 w-full flex flex-col gap-y-4 text-lg">
                                  <p>
                                    <strong>1.</strong> Register with your email
                                    or Google account.
                                  </p>
                                  <p>
                                    <strong>2.</strong> Complete your profile.
                                  </p>
                                  <p>
                                    <strong>3.</strong> Sign up and go live.
                                  </p>
                                  <p>
                                    <strong>4.</strong> That&apos;s it! Your
                                    profile will be live.
                                  </p>
                                </div>
                                <div className="min-w-max">
                                  <ShowDemoModal />
                                </div>
                              </div>
                              <div className="w-full flex justify-center mt-4">
                                <Link href="/my-crew">
                                  <a className="bg-wearecrewBlue w-full text-center rounded-md shadow-md p-4 text-white">
                                    Sign Up
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="hidden md:block w-1/2">
                              <div className="h-[calc(100vh-380px)] overflow-y-scroll -mt-4">
                                <img
                                  src="/images/myCrewProfileLong.png"
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
                <div className="hidden md:block scroll-prompt">
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
              <div className="snap-start w-screen px-4 md:h-[calc(100vh-105px)] flex flex-col items-start justify-center relative overflow-hidden pb-8 md:pb-0">
                <div className="w-full flex justify-center gap-4 mb-12">
                  <div className="flex flex-col md:flex-row  gap-x-12 max-w-[1200px]">
                    <div className="w-full md:w-1/2 flex items-center">
                      <h1 className="text-4xl mb-4 md:mb-0">
                        Lets plant some trees!
                      </h1>
                      <img
                        src="/images/pngwing.com.png"
                        alt=""
                        className="absolute bottom-0 w-full md:w-1/2 -left-1/4 z-01 opacity-30"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="text-lg">
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
                        will donate 5% of your payment to{" "}
                        <a
                          href="https://onetreeplanted.org/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline text-wearecrewGreen"
                        >
                          One Tree Plated
                        </a>{" "}
                        to help combat the Film and Television industry&apos;s
                        carbon footprint.
                        <br />
                        <br />
                        One Tree Planted plant their trees in Europe, North and
                        South America, Asia, Africa and the Pacific.
                        <br />
                        <br />
                        <strong>
                          One{" "}
                          <span className="text-wearecrewBlue">Get Crew</span>{" "}
                          sign up = 4 trees planted.
                        </strong>
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
