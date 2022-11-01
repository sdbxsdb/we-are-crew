import { React, useState, useEffect } from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";
import DeptTitle from "../../../../components/DeptTitle";
import { supabase } from "../../../../utils/supabaseClient";
import Head from "next/head";

const CrewList = ({ users }) => {
  // console.log({ users });

  const sortedUsersByTitle = [...users].sort((a, b) =>
    a.title > b.title ? 1 : -1
  );
  const sortedUsersByName = [...users].sort((a, b) =>
    a.username > b.username ? 1 : -1
  );

  // console.log({sortedUsersByLocation})

  const [foundTitle, setFoundTitle] = useState(sortedUsersByName);
  const allTitlesOnly = sortedUsersByTitle.map((user) => user.title);
  const allLocationsOnly = users.map((user) => user.canWorkIn);
  const [avail, setAvail] = useState();
  const [title, setTitle] = useState([]);
  const [location, setLocation] = useState([]);
  const [singlePersonResults, setSinglePersonResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const filteredUsers = foundTitle
    .filter((user) => {
      if (avail === undefined || avail === "All") {
        return true;
      }
      if (avail === "Available") {
        return user.status === "Available";
      }
      if (avail === "Not Available") {
        return user.status === "Not Available";
      }
    })
    .filter((user) => {
      if (title.length === 0) {
        return true;
      }
      if (title.includes(user.title)) {
        return true;
      }
      return false;
    })
    .filter((user) => {
      if (location.length === 0) {
        return true;
      }
      let includeUser = false;
      for (const loc of location) {
        if (user.canWorkIn.includes(loc)) {
          includeUser = true;
        }
      }
      return includeUser;
    }).filter((user) => {
      if (user?.username.toLowerCase().startsWith(singlePersonResults)) {
        return true;
      }
    });







  const allLocationsInOneArray = [];

  allLocationsOnly.map((locations) => {
    // console.log(locations)
    locations.map((location) => {
      // console.log(location)
      allLocationsInOneArray.push(location);
    });
  });

  const removedTitleDups = allTitlesOnly.filter(function (elem, pos) {
    return allTitlesOnly.indexOf(elem) == pos;
  });

  // console.log({ removedTitleDups });

  const removedLocationDups = allLocationsInOneArray.filter(function (
    elem,
    pos
  ) {
    return allLocationsInOneArray.indexOf(elem) == pos;
  });

  const sortedLocationsWithRemovedDups = [...removedLocationDups].sort((a, b) =>
    a > b ? 1 : -1
  );

  const filterByAvailability = (e) => {
    setAvail(e.target.value);
  };

  const filterByTitle = (e) => {
    if (e.target.checked) {
      setTitle((title) => [...title, e.target.value]);
    } else {
      setTitle((titles) => {
        return [...titles.filter((title) => e.target.value !== title)];
      });
    }
  };
  const clearTitleFilter = () => {
    setTitle([]);
  };

  const filterByLocations = (e) => {
    if (e.target.checked) {
      setLocation((location) => [...location, e.target.value]);
    } else {
      setLocation((locations) => {
        return [...locations.filter((location) => e.target.value !== location)];
      });
    }
  };
  const clearLocationFilter = () => {
    setLocation([]);
  };



  const filterSinglePerson = (e) => {
    const searchTerm = e.target.value;
    setInputValue(searchTerm);

    if (searchTerm !== "") {
      setSinglePersonResults(searchTerm.toLowerCase());
    } else {
      setSinglePersonResults([]);
      // If the text field is empty, show all users
    }
  };


  const clearSearchField = () => {
    setInputValue("");
    setSinglePersonResults([]);
  }






  return (
    <>
      <Head>
        <title>I Need Crew | Get Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>

      <div className="px-4 md:px-12 p-8 md:p-12 w-full h-fit flex justify-center">
        <div className="max-w-[1200px] w-full">
          <Link href="/I-need-crew/depts">
            <a className="font-semibold hover:text-wearecrewBlue transition">
              <span className="text-wearecrewBlue">&#x2190;</span> Back to
              Departments
            </a>
          </Link>
          <div className="w-full flex justify-center md:justify-between mt-4">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-4xl">
                <DeptTitle />
              </h1>
              <div className="relative w-full sm:w-max px-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={filterSinglePerson}
                  className="bg-white border-b w-full sm:w-[284px] border-wearecrewBlue rounded-md p-4 outline-0"
                  placeholder="Search individual names..."
                />
                <span
                  onClick={() => clearSearchField()}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
                >
                  &#10006;
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex w-full lg:max-w-[1200px] flex-col-reverse lg:flex-row gap-x-4 gap-y-4 mt-4">
              {filteredUsers && filteredUsers?.length > 0 ? (
                <div className="flex flex-1 rounded-md flex-col gap-y-4 mb-12">
                  {filteredUsers?.map((user, i) => (
                    <div key={i}>
                      {user.paid === true ? (
                        <CrewDetailBox
                          key={user.id}
                          id={user.id}
                          name={user.username}
                          dept={user.dept}
                          title={user.title}
                          canStepUp={user.canStepUp}
                          imgURL={user.imgURL}
                          phone={user.phone}
                          email={user.email}
                          website={user.website}
                          status={user.status}
                          willWorkIn={user.canWorkIn}
                          qualis={user.qualis}
                          imdb={user.imdb}
                          credits={user.credits}
                          bio={user.bio}
                          cvURL={user.cvURL}
                          willBeAvailOn={user.willBeAvailOn}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 w-full text-center">
                  <h1>No user found!</h1>
                </div>
              )}
              <div className="w-full lg:w-3/12 flex flex-col gap-y-4 checkbox_and_radio_container_filter">
                <div className="min-w-[200px] rounded-md px-2 lg:h-fit mb-4 md:mb-0 flex flex-col gap-y-4 md:gap-y-8">
                  <div>
                    <h1 className="text-center mb-1 text-3xl">
                      Filter Profiles
                    </h1>

                    <ul className="flex mt-4 flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList border-2 border-wearecrewBlue rounded-md shadow-md overflow-hidden">
                      <div
                        className="flex flex-col gap-y-4 py-2 w-full justify-center items-center bg-white"
                        onChange={filterByAvailability}
                      >
                        <div className="w-full flex flex-col items-center">
                          <p className=" text-center pb-2 font-bold text-lg w-full">
                            Filter by Availability
                          </p>
                          <hr className="w-2/3" />
                        </div>

                        <div className="flex">
                          <li className="lg:w-full max-w-3/12">
                            <input
                              name="availability"
                              type="radio"
                              value="All"
                              id="All"
                              defaultChecked
                            />
                            <label htmlFor="All" className="font-bold">
                              Show All Availability
                            </label>
                          </li>
                          <li className="lg:w-full max-w-3/12 flex justify-start text-wearecrewGreen">
                            <input
                              name="availability"
                              type="radio"
                              value="Available"
                              id="Available"
                            />
                            <label htmlFor="Available" className="font-bold">
                              Available Now
                            </label>
                          </li>
                        </div>
                        {/* <li className="lg:w-full max-w-3/12 flex justify-start text-wearecrewRed">
                          <input
                            name="availability"
                            type="radio"
                            value="Not Available"
                            id="Not Available"
                          />
                          <label htmlFor="Not Available">Not Available</label>
                        </li> */}
                      </div>
                    </ul>
                  </div>

                  <div>
                    <ul className="flex flex-wrap md:justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList border-2 border-wearecrewBlue rounded-md shadow-md py-2 bg-white">
                      <div className="w-full flex flex-col items-center">
                        <p className="text-center pb-2 font-bold text-lg w-1/2">
                          Filter by Role
                        </p>
                        <hr className="w-2/3" />
                      </div>

                      <li className="lg:w-full w-full md:max-w-3/12">
                        <input
                          id="All"
                          type="checkbox"
                          name="role"
                          value="All"
                          checked={title.length === 0}
                        />
                        <label
                          htmlFor="All"
                          onClick={clearTitleFilter}
                          className="font-bold"
                        >
                          Show All Roles
                        </label>
                      </li>
                      {removedTitleDups?.map(
                        (user, i) =>
                          sortedUsersByTitle?.length > 0 && (
                            <li
                              key={i}
                              className="lg:w-full max-w-3/12 flex justify-start"
                            >
                              <input
                                id={user}
                                type="checkbox"
                                name="role"
                                value={user}
                                onChange={filterByTitle}
                                checked={title.includes(user)}
                              />
                              <label htmlFor={user}>{user}</label>
                            </li>
                          )
                      )}
                    </ul>
                  </div>

                  <div>
                    <ul className="flex flex-wrap md:justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList border-2 border-wearecrewBlue rounded-md shadow-md py-2 bg-white">
                      <div className="w-full flex flex-col items-center">
                        <p className="text-center pb-2 font-bold text-lg w-full">
                          Filter by Location
                        </p>
                        <hr className="w-2/3" />
                      </div>

                      <li className="lg:w-full w-full md:max-w-3/12">
                        <input
                          id="All"
                          type="checkbox"
                          name="location"
                          value="All"
                          checked={location.length === 0}
                        />
                        <label
                          htmlFor="All"
                          onClick={clearLocationFilter}
                          className="font-bold"
                        >
                          Show All Locations
                        </label>
                      </li>
                      {sortedLocationsWithRemovedDups?.map((loc, i) => (
                        <li
                          key={i}
                          className="lg:w-full max-w-3/12 flex justify-start"
                        >
                          <input
                            id={loc}
                            type="checkbox"
                            name="location"
                            value={loc}
                            onChange={filterByLocations}
                            checked={location.includes(loc)}
                          />
                          <label htmlFor={loc}>{loc}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewList;

export const getStaticProps = async (context) => {
  if (context) {
    const dept = context?.params?.crewList;

    const data = await supabase.from("profiles").select("*").eq("dept", dept);

    // console.log("CREW DATA-", context.params.crewList);
    // console.log("PROFILES_", data.data.map((item) => item.imgURL));
    // console.log("DATA-", data.data);

    return {
      props: {
        users: data?.data,
      },
      revalidate: 10, // In seconds
    };
  }
};

export async function getStaticPaths() {
  const { data: profiles } = await supabase.from("profiles").select("dept");

  const depts = [];

  profiles?.forEach((profile) => {
    depts.push(profile.dept);
  });
  const uniqueDepts = Array.from(new Set(depts));

  const paths = uniqueDepts?.map((dept) => {
    return {
      params: {
        crewList: dept,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
