import Head from "next/head";
import { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabaseClient";
import Link from "next/link";

const INeedCrew = ({ depts }) => {
  // console.log({ depts });

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const sortedDepts = [...depts].sort((a, b) => (a > b ? 1 : -1));


  const [foundDept, setFoundDept] = useState(sortedDepts);
  const filter = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm !== "") {
      const results = sortedDepts.filter((dept) => {
        return dept?.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundDept(results);
    } else {
      setFoundDept(sortedDepts);
      // If the text field is empty, show all users
    }
  };

  console.log("TEST-", foundDept);

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
      <div className=" flex justify-center w-full px-4 md:px-12 py-12">
        <div className="max-w-[1200px] w-full ">
          <h1 className="text-3xl">Which department?</h1>
          <div className="flex justify-center w-full">
            <div className="w-full">
              <div className="w-full flex justify-center mt-12 mb-4">
                <input
                  type="text"
                  onChange={filter}
                  className="bg-white border-b w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
                  placeholder="Search Departments..."
                />
              </div>
              {foundDept && foundDept.length > 0 ? (
                <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {foundDept.map((dept, i) => (
                    dept !== "" ? 
                    <div
                      key={i}
                      className="w-full flex items-center justify-center"
                    >
                      <Link href={`./depts/crew-list/${dept}`}>
                        <a className="bg-white w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center text-center rounded border-b-2 border-wearecrewBlue shadow-md hoverScale gap-y-2 p-2">
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
                    : ""
                  ))}
                </div>
              ) : (
                <div className="mt-4 w-full text-center">
                  <h1>No department found!</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedCrew;

export const getStaticProps = async () => {
  const { data: profiles } = await supabase.from("profiles").select("dept");

  // console.log("PROFILES)-", profiles);

  const depts = [];

  profiles.forEach((profile) => {
    depts.push(profile?.dept);
  });
  const uniqueDepts = Array.from(new Set(depts));

  return {
    props: {
      depts: uniqueDepts,
    },
  };
};
