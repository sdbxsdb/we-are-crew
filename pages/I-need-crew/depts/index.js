import Head from "next/head";
import FilteredDept from "../../../components/FilteredDept"

const INeedCrew = () => {
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
        <h1 className="text-3xl">Which Department are you looking for?</h1>
        
        <div className="flex justify-center w-full">
          <div className="">
            <FilteredDept/>
          </div>
        </div>
      </div>
    </>
  );
};

export default INeedCrew;
