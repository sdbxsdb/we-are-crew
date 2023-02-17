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



  const deptsWithOnePaidAnd = deptsWithAtLeastOnePaid?.map((dept) => {
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
        
        <div className=" flex justify-center w-full px-4 md:px-12 py-12">
          <div className="max-w-[1200px] w-full ">
            <h1 className="text-3xl text md:text-left text-center">
              Which department?
            </h1>
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="w-full flex justify-center mt-4 md:mt-12 mb-4">
                  {/* REINSTATE THIS WHEN GOING LIVE */}
                  <div className="relative w-full sm:w-max">
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
                  </div>
                  {/* ^^^// REINSTATE THIS WHEN GOING LIVE */}
                </div>


                {/* REINSTATE THIS WHEN GOING LIVE  */}
                {foundDept && foundDept?.length > 0 ? (
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
                )}
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
