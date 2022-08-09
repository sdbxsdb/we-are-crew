import React from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";

const crewList = () => {
  return (
    <div className="px-12 pt-12">
      <Link href="/I-need-crew/depts">
        <a className="font-semibold">&#x2190; Back to Departments</a>
      </Link>

      <div className="w-full flex justify-start mt-4">
        <h1 className="text-4xl">Camera</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex w-full lg:max-w-[1200px] flex-col-reverse lg:flex-row gap-x-4 gap-y-4 mt-4">
          <div className="flex flex-1 rounded-md flex-col gap-y-4 lg:overflow-scroll max-h-[calc(100vh-252px)]">
            <CrewDetailBox />
          </div>
          <div className=" w-full lg:w-3/12 shadow-md bg-white border-b-wearecrewBlue rounded-md p-4 lg:h-fit">
            <p className="text-center mb-4 font-semibold text-lg">
              Filter by Role
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Director of Photography</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Camera Operator</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Camera Operator / Steadicam</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Focus Puller</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Loader</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Trainee</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crewList;
