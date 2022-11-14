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
  // const allTitlesOnly = sortedUsersByTitle.map((user) => user.title);
  const allRolesOnly = users.map((user) => user.roles);
  const allLocationsOnly = users.map((user) => user.canWorkIn);
  const [avail, setAvail] = useState("All Availability");
  const [title, setTitle] = useState([]);
  const [role, setRole] = useState([]);
  const [location, setLocation] = useState([]);
  const [singlePersonResults, setSinglePersonResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [makeFiltersToggleable, setMakeFiltersToggleable] = useState();
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 0 : window.innerWidth
  );

  const [availFilterApplied, setAvailFilterApplied] = useState(false);
  const [roleFilterApplied, setRoleFilterApplied] = useState(false);
  const [locationFilterApplied, setLocationFilterApplied] = useState(false);

  const filteredUsers = foundTitle
    .filter((user) => {
      if (avail === undefined || avail === "All Availability") {
        return true;
      }
      if (avail === "Available") {
        return user.status === "Available";
      }
    })
    // .filter((user) => {
    //   if (title.length === 0) {
    //     return true;
    //   }
    //   if (title.includes(user.title)) {
    //     return true;
    //   }
    //   return false;
    // })
    .filter((user) => {
      if (role.length === 0) {
        return true;
      }
      let includeUserRole = false;
      for (const theRole of role) {
        if (user.roles.includes(theRole)) {
          includeUserRole = true;
        }
      }
      return includeUserRole;
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
    })
    .filter((user) => {
      if (user?.username.toLowerCase().includes(singlePersonResults)) {
        return true;
      }
    });





  

  useEffect(() => {
    if (avail === "Available") {
      setAvailFilterApplied(true);
    } else {
      setAvailFilterApplied(false);
    }
    if (role.length !== 0) {
      setRoleFilterApplied(true);
    } else {
      setRoleFilterApplied(false);
    }
    if (location.length !== 0) {
      setLocationFilterApplied(true);
    } else {
      setLocationFilterApplied(false);
    }
  }, [avail, role, location]);


  const allLocationsInOneArray = [];
  const allRolesInOneArray = [];

  allLocationsOnly.map((locations) => {
    // console.log(locations)
    locations.map((location) => {
      // console.log(location)
      allLocationsInOneArray.push(location);
    });
  });

  allRolesOnly.map((roles) => {
    // console.log(roles)
    roles.map((role) => {
      // console.log(role)
      allRolesInOneArray.push(role);
    });
  });


  // const removedTitleDups = allTitlesOnly.filter(function (elem, pos) {
  //   return allTitlesOnly.indexOf(elem) == pos;
  // });



  const removedLocationDups = allLocationsInOneArray.filter(function (
    elem,
    pos
  ) {
    return allLocationsInOneArray.indexOf(elem) == pos;
  });

  const removedRoleDups = allRolesInOneArray.filter(function (
    elem,
    pos
  ) {
    return allRolesInOneArray.indexOf(elem) == pos;
  });

  const sortedLocationsWithRemovedDups = [...removedLocationDups].sort((a, b) =>
    a > b ? 1 : -1
  );

  const sortedRolesWithRemovedDups = [...removedRoleDups].sort((a, b) =>
    a > b ? 1 : -1
  );


  const filterByAvailability = (e) => {
    setAvail(e.target.value);
  };

  const filterByRole = (e) => {
    if (e.target.checked) {
      setRole((role) => [...role, e.target.value]);
    } else {
      setRole((roles) => {
        return [...roles.filter((role) => e.target.value !== role)];
      });
    }
  };
  const clearTitleFilter = () => {
    setRole([]);
  };

  const filterByLocations = (e) => {
    if (e.target.checked) {
      setLocati123on((location) => [...location, e.target.value]);
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
  };

  const updateDimensions = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      if (width >= 1024) {
        setMakeFiltersToggleable(true);
      }
    }
    // console.log({width})
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    // console.log({width})
    if (width >= 1024) {
      setMakeFiltersToggleable(true);
      return;
    }
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  const showFiltersOnMobileHandler = () => {
    if (width >= 1024) {
      setMakeFiltersToggleable(false);
      return;
    }
    setMakeFiltersToggleable(!makeFiltersToggleable);
  };

  return (
    <>
      <Head>
        <title>I Need Crew | Get Crew</title>
      </Head>

      <div className="px-4 md:px-12 p-8 md:p-12 w-full h-fit flex justify-center">
        <div className="max-w-[1200px] w-full">
          <Link href="/I-need-crew/depts">
            <a className="font-semibold hover:text-wearecrewBlue transition">
              <span className="text-wearecrewBlue">&#x2190;</span> Back to
              Departments
            </a>
          </Link>
          <div className="w-full flex justify-center md:justify-between mt-8">
            <div className="flex flex-col  gap-y-4 items-start justify-between w-full">
              <h1 className="text-4xl">
                <DeptTitle />
              </h1>
              {/* DESKTOP FILTERING RESULTS*/}
              <div className="text-left hidden lg:flex w-full  items-start justify-start gap-8 checkbox_and_radio_container_filter_pills">
                {singlePersonResults.length > 0 && (
                  <div className="flex flex-col justify-start w-1/4">
                    <span className="text-wearecrewOrange mb-1 min-w-max">
                      Individual name filter applied.
                    </span>
                    <div
                      onClick={() => clearSearchField()}
                      className=" neumorphBoxSm pl-8 pr-4 rounded-full relative"
                    >
                      <span className=" text-wearecrewBlue min-w-max">
                        {singlePersonResults}
                      </span>
                      <span className="absolute text-wearecrewBlue font-bold ml-[10px] text-1xl left-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        &#x2715;
                      </span>
                    </div>
                  </div>
                )}
                {availFilterApplied && (
                  <div className="w-1/4 flex flex-col">
                    <span className="text-wearecrewOrange min-w-max">
                      Availability filter applied.
                    </span>
                    <div className="flex w-full justify-start sm:justify-center mt-1">
                      <li className="flex min-w-max items-center justify-start w-full relative rounded-full mr-2 h-auto">
                        <input
                          name="availability"
                          type="checkbox"
                          value="Available"
                          id="AvailableFilter"
                          checked={avail === "Available"}
                          onClick={() => setAvail("All Availability")}
                        />
                        <label
                          htmlFor="AvailableFilter"
                          className="min-w-max neumorphBoxSm rounded-full text-wearecrewBlue"
                        >
                          <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                            &#x2715;
                          </span>
                          Available Now
                        </label>
                      </li>
                    </div>
                  </div>
                )}

                {roleFilterApplied && (
                  <div className="w-1/4 basis-full flex flex-col items-start">
                    <span className="text-wearecrewOrange min-w-max mb-1">
                      Role filter(s) applied:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {role.map((role, i) => (
                        <li
                          key={i}
                          className="flex min-w-max items-center justify-start relative rounded-full h-auto"
                        >
                          <input
                            id={role}
                            type="checkbox"
                            name="role"
                            value={role}
                            onChange={filterByRole}
                            checked={role.includes(role)}
                          />
                          <label
                            htmlFor={role}
                            className="min-w-max!important neumorphBoxSm rounded-full text-wearecrewBlue"
                          >
                            <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                              &#x2715;
                            </span>
                            {role}
                          </label>
                        </li>
                      ))}
                    </div>
                  </div>
                )}
                {locationFilterApplied && (
                  <div className="w-1/4 basis-full flex flex-col items-start ">
                    <span className="text-wearecrewOrange min-w-max mb-1">
                      Location filter(s) applied:
                    </span>
                    <div className="w-full">
                      <div className="flex flex-wrap gap-2">
                        {location.map((loc, i) => (
                          <li
                            key={i}
                            className="flex min-w-max items-center justify-start relative rounded-full h-auto"
                          >
                            <input
                              id={loc}
                              type="checkbox"
                              name="role"
                              value={loc}
                              onChange={filterByLocations}
                              checked={location.includes(loc)}
                            />
                            <label
                              htmlFor={loc}
                              className="min-w-max neumorphBoxSm rounded-full text-wearecrewBlue"
                            >
                              <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                                &#x2715;
                              </span>
                              {loc}
                            </label>
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* END OF // DESKTOP FILTERING RESULTS */}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex w-full lg:max-w-[1200px] flex-col-reverse lg:flex-row gap-x-4  mt-4">
              {filteredUsers && filteredUsers?.length > 0 ? (
                <div className="flex flex-1 rounded-md flex-col gap-y-12 mb-12">
                  {filteredUsers?.map((user, i) => (
                    <div key={i}>
                      {user.paid === true ? (
                        <CrewDetailBox
                          key={user.id}
                          id={user.id}
                          name={user.username}
                          dept={user.dept}
                          roles={user.roles}
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
                          ageRange={user.ageRange}
                          height={user.height}
                          hair={user.hair}
                          eyes={user.eyes}
                          body={user.body}
                          dialects={user.dialects}
                          agentName={user.agentName}
                          agentEmail={user.agentEmail}
                          agentPhone={user.agentPhone}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-1 justify-center my-12 text-center">
                  <h1 className="text-4xl">No crew found!</h1>
                </div>
              )}
              <div className="w-full lg:w-3/12 flex flex-col gap-y-4 ">
                <div className="min-w-[200px] rounded-md px-2 lg:h-fit mb-4 md:mb-0 flex flex-col gap-y-4 md:gap-y-8">
                  <div>
                    <div
                      onClick={showFiltersOnMobileHandler}
                      className="flex items-center justify-center w-full mt-4 lg:mt-0 checkbox_and_radio_container_filter_pills"
                    >
                      <div className="flex items-center justify-center cursor-pointer lg:cursor-default w-full">
                        <div className="w-full">
                          <div className="flex ml-2 lg:ml-0 mb-2  w-full items-center justify-center">
                            <h1 className="text-center mb-1 text-2xl hover:opacity-90 transition">
                              Filter Profiles
                            </h1>
                            <span className="material-icons -mt-1 text-wearecrewBlue block lg:hidden">
                              unfold_more
                            </span>
                          </div>
                          {/* MOBILE FILTERING RESULTS */}
                          <div className="text-left lg:hidden flex flex-col w-full  items-start justify-start gap-4 checkbox_and_radio_container_filter_pills">
                            {singlePersonResults.length > 0 && (
                              <div className="flex flex-col justify-start sm:justify-center w-full">
                                <span className="text-wearecrewOrange mb-1 min-w-max">
                                  Individual name filter applied.
                                </span>
                                <div
                                  onClick={() => clearSearchField()}
                                  className="max-w-min neumorphBoxSm pl-8 pr-4 rounded-full relative"
                                >
                                  <span className=" text-wearecrewBlue ">
                                    {singlePersonResults}
                                  </span>
                                  <span className="absolute text-wearecrewBlue font-bold ml-[10px] text-1xl left-0 cursor-pointer">
                                    &#x2715;
                                  </span>
                                </div>
                              </div>
                            )}
                            {availFilterApplied && (
                              <div className="w-full">
                                <span className="text-wearecrewOrange min-w-max">
                                  Availability filter applied.
                                </span>
                                <div className="flex w-full justify-start sm:justify-center mt-1">
                                  <li className="flex min-w-max items-center justify-start w-full relative rounded-full mr-2 h-auto">
                                    <input
                                      name="availability"
                                      type="checkbox"
                                      value="Available"
                                      id="AvailableFilter"
                                      checked={avail === "Available"}
                                      onClick={() =>
                                        setAvail("All Availability")
                                      }
                                    />
                                    <label
                                      htmlFor="AvailableFilter"
                                      className="min-w-max neumorphBoxSm rounded-full text-wearecrewBlue"
                                    >
                                      <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                                        &#x2715;
                                      </span>
                                      Available Now
                                    </label>
                                  </li>
                                </div>
                              </div>
                            )}

                            {roleFilterApplied && (
                              <div className="w-full basis-full flex flex-col items-start">
                                <span className="text-wearecrewOrange min-w-max mb-1">
                                  Role filter(s) applied:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {role.map((role, i) => (
                                    <li
                                      key={i}
                                      className="flex min-w-max items-center justify-start relative rounded-full h-auto"
                                    >
                                      <input
                                        id={role}
                                        type="checkbox"
                                        name="role"
                                        value={role}
                                        onChange={filterByRole}
                                        checked={role.includes(role)}
                                      />
                                      <label
                                        htmlFor={role}
                                        className="min-w-max!important neumorphBoxSm rounded-full text-wearecrewBlue"
                                      >
                                        <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                                          &#x2715;
                                        </span>
                                        {role}
                                      </label>
                                    </li>
                                  ))}
                                </div>
                              </div>
                            )}
                            {locationFilterApplied && (
                              <div className="w-full basis-full flex flex-col items-start ">
                                <span className="text-wearecrewOrange min-w-max mb-1">
                                  Location filter(s) applied:
                                </span>
                                <div className="w-full">
                                  <div className="flex flex-wrap gap-2">
                                    {location.map((loc, i) => (
                                      <li
                                        key={i}
                                        className="flex min-w-max items-center justify-start relative rounded-full h-auto"
                                      >
                                        <input
                                          id={loc}
                                          type="checkbox"
                                          name="role"
                                          value={loc}
                                          onChange={filterByLocations}
                                          checked={location.includes(loc)}
                                        />
                                        <label
                                          htmlFor={loc}
                                          className="min-w-max neumorphBoxSm rounded-full text-wearecrewBlue"
                                        >
                                          <span className=" text-wearecrewBlue font-bold  text-1xl cursor-pointer mr-2">
                                            &#x2715;
                                          </span>
                                          {loc}
                                        </label>
                                      </li>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          {/* END OF // MOBILE FILTERING RESULTS */}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mt-4 w-full checkbox_and_radio_container_filter">
                      {makeFiltersToggleable && (
                        <div className="flex flex-col gap-y-6 lg:gap-y-4">
                          <div className="relative w-full">
                            <input
                              type="text"
                              value={inputValue}
                              onChange={filterSinglePerson}
                              className=" border-b w-full border-wearecrewBlue rounded-md p-4 outline-0 bg-white shadow-md"
                              placeholder="Search individual names..."
                            />
                            <span
                              onClick={() => clearSearchField()}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer"
                            >
                              &#10006;
                            </span>
                          </div>
                          <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList border-2 border-wearecrewBlue rounded-md shadow-md overflow-hidden">
                            <div className="flex flex-col gap-y-4 py-2 w-full justify-center items-center bg-white">
                              <div className="w-full flex flex-col items-center">
                                <p className=" text-center pb-2 font-bold text-lg w-full">
                                  Filter by Availability
                                </p>
                                <hr className="w-2/3" />
                              </div>
                              <div className="flex flex-col w-full justify-center sm:justify-center px-2">
                                <li className="lg:w-full w-full flex justify-start">
                                  <input
                                    name="availability"
                                    type="radio"
                                    value="All Availability"
                                    id="AllAvail"
                                    checked={avail === "All Availability"}
                                    onChange={(e) => filterByAvailability(e)}
                                  />
                                  <label
                                    htmlFor="AllAvail"
                                    className="font-bold text-left"
                                  >
                                    Show All Availability
                                  </label>
                                </li>
                                <li className="lg:w-full w-full flex justify-start text-wearecrewGreen ">
                                  <input
                                    name="availability"
                                    type="radio"
                                    value="Available"
                                    id="Available"
                                    checked={avail === "Available"}
                                    onChange={(e) => filterByAvailability(e)}
                                  />
                                  <label
                                    htmlFor="Available"
                                    className="font-bold text-left "
                                  >
                                    Available Now
                                  </label>
                                </li>
                              </div>
                            </div>
                          </ul>
                          <div>
                            <ul className="flex flex-wrap md:justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList border-2 border-wearecrewBlue rounded-md shadow-md py-2 bg-white">
                              <div className="w-full flex flex-col items-center">
                                <p className="text-center pb-2 font-bold text-lg w-1/2">
                                  Filter by Role
                                </p>
                                <hr className="w-2/3" />
                              </div>
                              <div className="flex flex-wrap px-2 gap-y-4">
                                <li className="flex  items-start justify-start basis-full md:basis-full">
                                  <input
                                    id="AllRoles"
                                    type="checkbox"
                                    name="role"
                                    value="All"
                                    checked={role.length === 0}
                                  />
                                  <label
                                    htmlFor="AllRoles"
                                    onClick={clearTitleFilter}
                                    className="font-bold"
                                  >
                                    Show All Roles
                                  </label>
                                </li>
                                {sortedRolesWithRemovedDups?.map(
                                  (user, i) =>
                                    sortedUsersByTitle?.length > 0 && (
                                      <li
                                        key={i}
                                        className="flex items-start justify-start basis-full md:basis-1/4 lg:basis-full"
                                      >
                                        <input
                                          id={user}
                                          type="checkbox"
                                          name="role"
                                          value={user}
                                          onChange={filterByRole}
                                          checked={role.includes(user)}
                                        />
                                        <label htmlFor={user}>{user}</label>
                                      </li>
                                    )
                                )}
                              </div>
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
                              <div className="flex flex-wrap px-2 gap-y-4">
                                <li className="flex items-start justify-start basis-full md:basis-full">
                                  <input
                                    id="AllLocations"
                                    type="checkbox"
                                    name="location"
                                    value="All"
                                    checked={location.length === 0}
                                  />
                                  <label
                                    htmlFor="AllLocations"
                                    onClick={clearLocationFilter}
                                    className="font-bold"
                                  >
                                    Show All Locations
                                  </label>
                                </li>
                                {sortedLocationsWithRemovedDups?.map(
                                  (loc, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start justify-start basis-1/2 md:basis-1/4 lg:basis-full"
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
                                  )
                                )}
                              </div>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
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
