import Head from "next/head";
import FilteredDept from "../../../components/FilteredDept";
import { supabase } from "../../../utils/supabaseClient";

const INeedCrew = ({ profiles }) => {

  const depts = []

  profiles.map((profile) => {
    depts.push(profile.dept)
    console.log("HELLO-", depts);
  })
  const uniqueDepts = Array.from(new Set(depts));

  console.log('profiles: ', uniqueDepts);


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
            {uniqueDepts.map((dept, i) => (
              <FilteredDept
                key={i}
                dept={dept}
                imgUrl={dept.toLowerCase()}
              />
            ))}
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
