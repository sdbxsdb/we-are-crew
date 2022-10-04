import { React, useState } from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";
import DeptTitle from "../../../../components/DeptTitle";
import { supabase } from "../../../../utils/supabaseClient";
import Head from "next/head";

const CrewList = ({ users }) => {
  const sortedUsersByTitle = [...users].sort((a, b) =>
    a.title > b.title ? 1 : -1
  );
  const sortedUsersByName = [...users].sort((a, b) =>
    a.username > b.username ? 1 : -1
  );

  const [foundTitle, setFoundTitle] = useState(sortedUsersByName);
  const allTitlesOnly = sortedUsersByTitle.map((user) => user.title);

  const removedTitleDups = allTitlesOnly.filter(function (elem, pos) {
    return allTitlesOnly.indexOf(elem) == pos;
  });

  const filterByTitle = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    if (searchTerm !== "") {
      const results = sortedUsersByName.filter((user) => {
        return user.title.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTitle(results);
    } else {
      setFoundTitle(sortedUsersByName);
      // If the text field is empty, show all users
    }
  };

  const clearTitleFilter = () => {
    setFoundTitle(sortedUsersByName);
  };

  const filterByAvailability = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    if (searchTerm !== "") {
      const results = sortedUsersByName.filter((user) => {
        return user.status.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundTitle(results);
    } else {
      setFoundTitle(sortedUsersByName);
      // If the text field is empty, show all users
    }
  };

  const clearAvailabilityFilter = () => {
    setFoundTitle(sortedUsersByName);
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
              {foundTitle && foundTitle?.length > 0 ? (
                <div className="flex flex-1 rounded-md flex-col gap-y-4 mb-12">
                  {foundTitle?.map((user, i) => (
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
              <div className="w-full lg:w-3/12 flex flex-col gap-y-4">
                {/* <div className="  shadow-md bg-white rounded-md p-4 lg:h-fit mb-4 md:mb-0">
                  <p className="text-center mb-4 font-semibold text-lg">
                    Filter by Availability
                  </p>
                  <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
                    <li className="lg:w-full max-w-3/12">
                      <button className="w-full" onClick={clearAvailabilityFilter}>
                        All
                      </button>
                    </li>
                    <li className="lg:w-full max-w-3/12 text-wearecrewGreen">
                      <button className="w-full" value={"Available"} onClick={filterByAvailability}>
                        Available
                      </button>
                    </li>
                    <li className="lg:w-full max-w-3/12 text-wearecrewOrange">
                      <button className="w-full" value={"On Dailies"} onClick={filterByAvailability}>
                        On Dailies
                      </button>
                    </li>
                    <li className="lg:w-full max-w-3/12 text-wearecrewRed">
                      <button className="w-full" value={"Not Available"} onClick={filterByAvailability}>
                        Not Available
                      </button>
                    </li>
                    
                  </ul>
                </div> */}
                <div className="min-w-[200px]  shadow-md bg-white rounded-md p-4 lg:h-fit mb-4 md:mb-0">
                  <p className="text-center mb-4 font-semibold text-lg">
                    Filter by Role
                  </p>
                  <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
                    <li className="lg:w-full max-w-3/12">
                      <button className="w-full" onClick={clearTitleFilter}>
                        All
                      </button>
                    </li>
                    {removedTitleDups?.map(
                      (user, i) =>
                        sortedUsersByTitle?.length > 0 && (
                          <li key={i} className="lg:w-full max-w-3/12">
                            <button
                              className="w-full"
                              value={user}
                              onClick={filterByTitle}
                            >
                              {user}
                            </button>
                          </li>
                        )
                    )}
                  </ul>
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
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const dept = context?.params?.crewList;

  const data = await supabase.from("profiles").select("*").eq("dept", dept);

  // console.log("CREW DATA-", context.params.crewList);
  // console.log("PROFILES_", data.data.map((item) => item.imgURL));

  return {
    props: {
      users: data.data,
    },
  };
};
