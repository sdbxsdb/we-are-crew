import Head from "next/head";
import { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabaseClient";
import DeptCard from "../../../components/DeptCard";

const INeedCrew = ({ profiles }) => {
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const depts = [];

  profiles.map((profile) => {
    depts.push(profile.dept);
  });
  const uniqueDepts = Array.from(new Set(depts));



  const [foundDept, setFoundDept] = useState(uniqueDepts);
  // console.log("FD-", foundDept);



  const filter = (e) => {
    const searchTerm = e.target.value;
    console.log("SEARCH-", searchTerm);

    if (searchTerm !== "") {
      const results = uniqueDepts.filter((dept) => {
        return dept.toLowerCase().startsWith(searchTerm.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundDept(results);
      console.log(foundDept);
    } else {
      setFoundDept(uniqueDepts);
      // If the text field is empty, show all users
    }
  };

  return (
    <>
      <Head>
        <title>I Need Crew | We Are Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>
      <div className="px-4 md:px-12 py-12">
        <h1 className="text-3xl">For which department do you need crew?</h1>

        <div className="flex justify-center w-full">
          <div className="">
            <input
              type="text"
              onChange={filter}
              className="bg-white border-b w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
              placeholder="Search Departments..."
            />

            {foundDept && foundDept.length > 0 ? (
              <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {foundDept.map((dept, i) => (
                  <DeptCard  key={i}
                  dept={dept}
                  imgUrl={`../../../images/icons/` + slugify(dept) + ".png"} />
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
    </>
  );
};

export default INeedCrew;

export const getStaticProps = async () => {
  const { data: profiles } = await supabase.from("profiles").select("dept");

  return {
    props: {
      profiles,
    },
  };
};
