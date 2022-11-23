import Head from "next/head";
import { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabaseClient";
import Link from "next/link";
import deptsPlaceHolders from "../../../depts.json";
import CrewDetailModal from "../../../components/CrewDetailModal";

const INeedCrew = ({ depts, deptsWithAtLeastOnePaid }) => {
  // console.log({ depts });
  // console.log({ deptsWithAtLeastOnePaid });

  const [inputValue, setInputValue] = useState("");

  //REMOVE THIS WHEN GOING LIVE
  const [showSiteNotLiveModal, setShowSiteNotLiveModal] = useState(false);
  const [showDemoProfile, setShowDemoProfile] = useState(false);
  //^^^ REMOVE THIS WHEN GOING LIVE


  const deptsWithOnePaidAnd = deptsWithAtLeastOnePaid.map((dept) => {
    return dept.dept;
  });

  const uniquedeptsWithOnePaidAnd = Array.from(new Set(deptsWithOnePaidAnd));

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const sortedDepts = [...uniquedeptsWithOnePaidAnd]
    .sort((a, b) => (a > b ? 1 : -1))
    .filter((dept) => dept !== null);

  // console.log({sortedDepts});

  const [foundDept, setFoundDept] = useState(sortedDepts);
  // THIS WILL BE USED AGAIN WHEN GOING LIVE
  const filterDept = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    if (searchTerm !== "") {
      const results = sortedDepts?.filter((dept) => {
        return dept?.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundDept(results);
      // console.log({foundDept});
    } else {
      setFoundDept(sortedDepts);
      // If the text field is empty, show all users
    }
  };
  // ^^^ THIS WILL BE USED AGAIN WHEN GOING LIVE



  //REMOVE THIS WHEN GOING LIVE
  const placeHolderDeptsOnly = []
  const [foundPlaceholderDept, setFoundPlaceholderDept] = useState(placeHolderDeptsOnly);

  deptsPlaceHolders.map((placeholderDept) => {
    const placeHolderDeptArray = placeholderDept.dept
    placeHolderDeptsOnly.push(placeHolderDeptArray)
  })
  //^^^REMOVE THIS WHEN GOING LIVE



  //REMOVE THIS WHEN GOING LIVE
  const filterPlaceholderDepts = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    if (searchTerm !== "") {
      const results = placeHolderDeptsOnly?.filter((placeHolderDept) => {
        // console.log({searchTerm});
        return placeHolderDept?.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundPlaceholderDept(results);
      // console.log({results});
    } else {
      setFoundPlaceholderDept(placeHolderDeptsOnly);
      // If the text field is empty, show all users
    }
    
  };
  //^^^REMOVE THIS WHEN GOING LIVE


  // THIS WILL BE USED AGAIN WHEN GOING LIVE
  const clearSearchField = () => {
    setInputValue("");
    setFoundDept(sortedDepts);
  };
  // ^^^ THIS WILL BE USED AGAIN WHEN GOING LIVE



  const clearPlaceHolderSearchField = () => {
    setInputValue("");
    setFoundPlaceholderDept(placeHolderDeptsOnly);
  };

  const stylingLarge = {
    backgroundImage:
      "url('https://www.looper.com/img/gallery/the-untold-truth-of-marty-mcfly/intro-1597857837.jpg')",
    minWidth: "100px",
    minHeight: "100px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const siteNotLiveHandler = () => {
    setShowSiteNotLiveModal(true);
    setShowDemoProfile(false);
  };

  const closeSiteNotLiveHandler = () => {
    setShowSiteNotLiveModal(false);
    setShowDemoProfile(false);
  };

  const showDemoProfileHandler = () => {
    setShowDemoProfile(true);
  };

  return (
    <>
      <Head>
        <title>I Need Crew | Get Crew</title>
      </Head>
      <div className="relative">
        {/* REMOVE THIS WHEN GOING LIVE */}
        {showSiteNotLiveModal && (
          <>
            <div
              onClick={closeSiteNotLiveHandler}
              className="fixed top-0 left-0 flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-auto z-2000 bg-wearecrewDarkestGrey/80"
            ></div>

            <div className="flex items-end flex-col z-3000 overflow-scroll max-h-[calc(100vh-150px)] w-[95%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-around m-auto">
                <div className="flex flex-col gap-y-4  max-w-[900px]">
                  {showDemoProfile === true ? null : (
                    <div className="bg-wearecrewLightGrey w-full flex flex-col items-center justify-center rounded-md p-4 relative">
                      <button
                        onClick={closeSiteNotLiveHandler}
                        className="h-[40px] w-[40px] flex justify-end items-center px-2 absolute bg-wearecrewLightGrey rounded-full top-0 right-0"
                      >
                        <svg
                          className="transition fill-current hover:text-wearecrewDarkBlue"
                          width="30px"
                          height="30px"
                          x="0px"
                          y="0px"
                          viewBox="0 0 252 252"
                        >
                          <g>
                            <path
                              d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
                  c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"
                            />
                            <path
                              d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
                  c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
                  c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
                  s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
                  C168.127,96.601,168.127,90.902,164.612,87.388z"
                            />
                          </g>
                        </svg>
                      </button>
                      <div>
                        <h1 className="text-6xl text-center mb-4">
                          Jan 1st 2023
                        </h1>
                        <p className="text-lg text-center">
                          Your full professional profile will be listed here
                          when
                          <span className="text-wearecrewBlue"> Get Crew </span>
                          goes live on January 1st 2023.
                         <br/>
                          <div className="my-8 gap-y-4 flex flex-col justify-center items-center">

                              <Link href="/my-crew">
                                <button className="neumorphBoxSm rounded-md p-2 border-b border-wearecrewBlue max-w-max hover:text-wearecrewBlue transition">
                                  Sign Up Here
                                </button>
                              </Link>

                            <span>Don&apos;t forget to use your early bird discount code!</span>
                          </div>
                        </p>
                      </div>
                      <button className="neumorphBoxSm p-4 rounded-md">
                        <h1
                          onClick={() => showDemoProfileHandler(true)}
                          className="text-wearecrewBlue transition  text-center text-2xl hover:opacity-70 "
                        >
                          View an example profile
                        </h1>
                      </button>
                    </div>
                  )}

                  {showDemoProfile && (
                    <div className="flex gap-x-4 bg-wearecrewLightGrey max-w-[900px] rounded-md border-b border-wearecrewBlue p-4 relative">
                        <div className="flex gap-x-4 relative">
                        <button
                          onClick={closeSiteNotLiveHandler}
                          className="h-[40px] w-[40px] flex justify-end items-center px-2 absolute bg-wearecrewLightGrey rounded-full -top-4 -right-4"
                        >
                          <svg
                            className="transition fill-current hover:text-wearecrewDarkBlue"
                            width="30px"
                            height="30px"
                            x="0px"
                            y="0px"
                            viewBox="0 0 252 252"
                          >
                            <g>
                              <path
                                d="M126,0C56.523,0,0,56.523,0,126s56.523,126,126,126s126-56.523,126-126S195.477,0,126,0z M126,234
                  c-59.551,0-108-48.449-108-108S66.449,18,126,18s108,48.449,108,108S185.551,234,126,234z"
                              />
                              <path
                                d="M164.612,87.388c-3.515-3.515-9.213-3.515-12.728,0L126,113.272l-25.885-25.885c-3.515-3.515-9.213-3.515-12.728,0
                  c-3.515,3.515-3.515,9.213,0,12.728L113.272,126l-25.885,25.885c-3.515,3.515-3.515,9.213,0,12.728
                  c1.757,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636L126,138.728l25.885,25.885c1.757,1.757,4.061,2.636,6.364,2.636
                  s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L138.728,126l25.885-25.885
                  C168.127,96.601,168.127,90.902,164.612,87.388z"
                              />
                            </g>
                          </svg>
                        </button>
                      <div className="w-full flex flex-1 flex-col gap-x-4 gap-y-4 items-start mb-4">
                        <div className="w-full flex flex-col md:flex-row justify-between">
                          <div className="flex gap-x-4 items-center mb-4">
                            <div
                              style={stylingLarge}
                              className="rounded-full overflow-hidden w-[100px] h-[100px] flex flex-col items-center justify-center shadow-md mb-2"
                            ></div>
                            <div className="">
                              <div className="">
                                <h1 className="text-3xl border-b-2 pb-2 mb-2 max-w-max border-wearecrewBlue">
                                  Marty McFly
                                </h1>
                              </div>

                              <div className="flex flex-col md:flex-row gap-x-4 flex-wrap">
                                Hover Boarder{" "}
                                <span className="text-wearecrewBlue">-</span>{" "}
                                Time Traveller
                              </div>
                            </div>
                          </div>
                          <div className="md:w-[240px] md:ml-2 flex flex-col items-center md:items-end md:pt-10 md:mb-4">
                            <strong className={`md:mt-4 text-3xl  min-w-max`}>
                              Available
                            </strong>
                          </div>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row w-full gap-x-4 gap-y-4">
                          <div className="flex flex-1 flex-col gap-y-6 py-4">
                            <div className="flex items-center gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                phone_iphone
                              </span>
                              <a
                                href={`tel:0044 123 456 78`}
                                className="underline"
                              >
                                0044 123 456 78
                              </a>
                              <button className="text-wearecrewDarkGrey">
                                <cite>Copy Phone</cite>
                              </button>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                mail
                              </span>
                              <a
                                href={`mailto:email@email.com?subject=I found your profile on Get Crew and want to check your availability!`}
                                className="underline"
                              >
                                marty@mcfly.com
                              </a>
                              <button className="text-wearecrewDarkGrey">
                                <cite>Copy Email</cite>
                              </button>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                public
                              </span>
                              <a
                                href="https://backtothefuture.com"
                                target="_blank"
                                rel="noreferrer"
                                className="underline"
                              >
                                https://backtothefuture.com
                              </a>
                              <button className="text-wearecrewDarkGrey">
                                <cite>Copy Website</cite>
                              </button>
                            </div>
                            <div className="flex items-center gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                public
                              </span>
                              <a
                                href="https://www.imdb.com/name/nm0000150/"
                                target="_blank"
                                rel="noreferrer"
                                className="underline"
                              >
                                https://www.imdb.com/name/nm0000150/
                              </a>
                              <button className="text-wearecrewDarkGrey">
                                <cite>Copy IMDB</cite>
                              </button>
                            </div>
                            <div className="flex items-start gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                where_to_vote
                              </span>
                              <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                                <div>
                                  <p className="min-w-max">Belfast</p>
                                </div>
                                <div>
                                  <p className="min-w-max">Dublin</p>
                                </div>
                                <div>
                                  <p className="min-w-max">Glasgow</p>
                                </div>
                                <div>
                                  <p className="min-w-max">Liverpool</p>
                                </div>
                                <div>
                                  <p className="min-w-max">London</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start gap-x-4">
                              <span className="material-icons text-wearecrewBlue">
                                military_tech
                              </span>
                              <div>
                                <div className="flex items-center mb-4">
                                  <div className="flex justify-center items-center">
                                    <p className="text-base">
                                      <cite>
                                        Mission Could Be A Bit Tricky{" "}
                                      </cite>
                                    </p>
                                    <span className="text-wearecrewBlue">
                                        |  
                                    </span>
                                    <p className="text-base">Focus Puller</p>
                                  </div>
                                </div>
                                <div className="flex items-center mb-4">
                                  <div className="flex justify-center items-center">
                                    <p className="text-base">
                                      <cite>Jurassic Universe</cite>
                                    </p>
                                    <span className="text-wearecrewBlue">
                                        |  
                                    </span>
                                    <p className="text-base">Focus Puller</p>
                                  </div>
                                </div>
                                <div className="flex items-center mb-4">
                                  <div className="flex justify-center items-center">
                                    <p className="text-base">
                                      <cite>Fast and Furios 324</cite>
                                    </p>
                                    <span className="text-wearecrewBlue">
                                        |  
                                    </span>
                                    <p className="text-base">Central Loader</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-x-4 -mt-4">
                              <span className="material-icons text-wearecrewBlue">
                                school
                              </span>

                              <div>
                                <p className="">
                                  Safety Training, First Aid, IMAX
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-x-4 -mt-2">
                              <span className="material-icons text-wearecrewBlue">
                                emoji_people
                              </span>
                              <p>
                                Martin Seamus ’Marty’ McFly, Sr. is the main
                                protagonist of the Back to the Future franchise.
                                He is the world’s second time traveler (after
                                Einstein), the first to travel to the past, and
                                the first human to travel through time. He was
                                also a high school student at Hill Valley High
                                School in 1985. He’s also a good Focus Puller.
                              </p>
                            </div>
                          </div>
                          <div className="w-full flex justify-center md:w-3/12 ">
                            <div className="w-full flex flex-col gap-y-4">
                              <a
                                href="tel:0044123456789"
                                className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center w-full  text-white"
                              >
                                <h1 className="text-3xl">Call</h1>
                              </a>
                              <a
                                href={`mailto:email@email.com?subject=I found your profile on Get Crew!`}
                                className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center w-full  text-white"
                              >
                                <h1 className="text-3xl">Email</h1>
                              </a>
                              <a
                                href="http://backtothefuture.com"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center text-white"
                              >
                                <h1 className="text-3xl">Website</h1>
                              </a>

                              <a
                                download
                                href=""
                                className="border-2 text-center border-wearecrewBlue p-2 rounded shadow-md"
                              >
                                <h1 className="text-lg">
                                  Download Personal CV
                                </h1>
                              </a>

                              <button className="border-2 flex gap-x-2 justify-center border-wearecrewBlue p-2 rounded shadow-md">
                                <span className="material-icons">
                                  ios_share
                                </span>
                                <h1 className="text-lg">Share Profile</h1>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {/* ^^^ // REMOVE THIS WHEN GOING LIVE */}
        <div className=" flex justify-center w-full px-4 md:px-12 py-12">
          <div className="max-w-[1200px] w-full ">
            <h1 className="text-3xl text md:text-left text-center">
              Which department?
            </h1>
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="w-full flex justify-center mt-4 md:mt-12 mb-4">
                  {/* REINSTATE THIS WHEN GOING LIVE */}
                  {/* <div className="relative w-full sm:w-max">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={filterDept}
                      className="neumorphBoxMd border-b w-full sm:w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
                      placeholder="Search Departments..."
                    />

                    <span
                      onClick={() => clearSearchField()}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
                    >
                      &#10006;
                    </span>
                  </div> */}
                  {/* ^^^// REINSTATE THIS WHEN GOING LIVE */}
                  {/* REMOVE THIS WHEN GOING LIVE */}
                  <div className="relative w-full sm:w-max">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={filterPlaceholderDepts}
                      className="neumorphBoxMd border-b w-full sm:w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
                      placeholder="Search Departments..."
                    />

                    <span
                      onClick={() => clearPlaceHolderSearchField()}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
                    >
                      &#10006;
                    </span>
                  </div>
                {/* ^^^ REMOVE THIS WHEN GOING LIVE */}
                </div>
                {/* REMOVE THIS WHEN GOING LIVE  */}
                <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
                  {foundPlaceholderDept.map((deptPlaceHolder, i) => (
                    <div
                      onClick={siteNotLiveHandler}
                      key={i}
                      className="w-full flex items-center justify-center"
                    >
                      <div className="cursor-pointer w-full flex justify-center items-center">
                        <a className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded  border-b-2 border-wearecrewBlue hoverScale gap-y-2 p-2">
                          <h1 className="text-5xl sm:text-3xl">
                            {deptPlaceHolder}
                          </h1>
                          <img
                            src={
                              `../../../images/icons/` +
                              slugify(deptPlaceHolder) +
                              ".png"
                            }
                            alt={`${deptPlaceHolder} img`}
                            width="50"
                            height="50"
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                {/* ^^^ // REMOVE THIS WHEN GOING LIVE  */}

                {/* REINSTATE THIS WHEN GOING LIVE  */}
                {/* {foundDept && foundDept?.length > 0 ? (
                  <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8">
                    {foundDept?.map((dept, i) => (
                      <div
                        key={i}
                        className="w-full flex items-center justify-center"
                      >
                        <Link href={`./depts/crew-list/${dept}`}>
                          <a className="neumorphBoxMd w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded  border-b-2 border-wearecrewBlue hoverScale gap-y-2 p-2">
                            <h1 className="text-5xl sm:text-3xl">{dept}</h1>
                            <img
                              src={
                                `../../../images/icons/` + slugify(dept) + ".png"
                              }
                              alt={`${dept} img`}
                              width="50"
                              height="50"
                            />
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 w-full text-center">
                    <h1>No department found!</h1>
                  </div>
                )} */}
                {/* ^^^ REINSTATE THIS WHEN GOING LIVE  */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedCrew;

export const getStaticProps = async () => {
  const { data: profiles } = await supabase
    .from("profiles")
    .select("dept, roles, paid");

  const depts = [];
  const deptsWithAtLeastOnePaid = [];

  profiles?.forEach((profile) => {
    depts?.push(profile?.dept);
    profile?.paid === true
      ? deptsWithAtLeastOnePaid.push({
          dept: profile?.dept,
          paid: profile?.paid,
        })
      : null;
  });
  const uniqueDepts = Array.from(new Set(depts));

  return {
    props: {
      depts: uniqueDepts,
      deptsWithAtLeastOnePaid: deptsWithAtLeastOnePaid,
    },
    revalidate: 10, // 10 seconds
  };
};
