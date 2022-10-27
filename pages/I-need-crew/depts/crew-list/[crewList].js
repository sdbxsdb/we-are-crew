import { React, useState, useEffect } from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";
import DeptTitle from "../../../../components/DeptTitle";
import { supabase } from "../../../../utils/supabaseClient";
import Head from "next/head";

const CrewList = ({ users }) => {
  console.log({ users });

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
      for ( const loc of location ) {
        if (user.canWorkIn.includes(loc)) {
          includeUser = true
        }
      }
      return includeUser;

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

  console.log({ removedTitleDups });

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
    setLocation([])
  };

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
            <a className="font-semibold">&#x2190; Back to Departments</a>
          </Link>
          <div className="w-full flex justify-center md:justify-start mt-4">
            <h1 className="text-4xl">
              <DeptTitle />
            </h1>
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
              <div className="w-full lg:w-3/12 flex flex-col gap-y-4 radio_container_filter">
                <div className="min-w-[200px] shadow-md bg-white rounded-md p-4 lg:h-fit mb-4 md:mb-0 flex flex-col gap-y-8">
                  <div>
                    <p className="text-center mb-4 font-semibold text-lg">
                      Filter Profiles
                    </p>
                    <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
                      <div className="" onChange={filterByAvailability}>
                        <li className="lg:w-full max-w-3/12">
                          <input
                            name="availability"
                            type="radio"
                            value="All"
                            id="All"
                            defaultChecked
                          />
                          <label htmlFor="All">All</label>
                        </li>
                        <li className="lg:w-full max-w-3/12 text-wearecrewGreen">
                          <input
                            name="availability"
                            type="radio"
                            value="Available"
                            id="Available"
                          />
                          <label htmlFor="Available">Available</label>
                        </li>
                        <li className="lg:w-full max-w-3/12 text-wearecrewRed">
                          <input
                            name="availability"
                            type="radio"
                            value="Not Available"
                            id="Not Available"
                          />
                          <label htmlFor="Not Available">Not Available</label>
                        </li>
                      </div>
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
                      <li className="lg:w-full max-w-3/12">
                        <input
                          id="All"
                          type="checkbox"
                          name="role"
                          value="All"
                          checked={title.length === 0}
                        />
                        <label htmlFor="All" onClick={clearTitleFilter}>All</label>
                      </li>
                      {removedTitleDups?.map(
                        (user, i) =>
                          sortedUsersByTitle?.length > 0 && (
                            <li key={i} className="lg:w-full max-w-3/12">
                              <input
                                id={user}
                                type="checkbox"
                                name="role"
                                value={user}
                                onChange={filterByTitle}
                                checked={title.includes( user )}
                              />
                              <label htmlFor={user}>{user}</label>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                  <hr />
                  <div>
                    <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
                      <li className="lg:w-full max-w-3/12">
                        <input
                          id="All"
                          type="checkbox"
                          name="location"
                          value="All"
                          checked={location.length === 0}
                        />
                        <label htmlFor="All" onClick={clearLocationFilter}>All</label>
                      </li>
                      {sortedLocationsWithRemovedDups?.map((loc, i) => (
                        <li key={i} className="lg:w-full max-w-3/12">
                          <input
                            id={loc}
                            type="checkbox"
                            name="location"
                            value={loc}
                            onChange={filterByLocations}
                            checked={ location.includes(loc)}
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
