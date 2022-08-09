import React from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";

const crewList = () => {
  return (
    <div className="px-12 pt-12">
      <Link href="/I-need-crew/depts">
        <a className="font-semibold">&#x2190; Back to Departments</a>
      </Link>
      <div className="w-full flex justify-start  mt-4">
        <h1 className="text-4xl">Camera</h1>
      </div>
      <div className="flex gap-x-4 mt-4">
        <div className="w-2/3 flex rounded-md flex-col gap-y-4 overflow-scroll max-h-[calc(100vh-252px)]">
          <CrewDetailBox />
        </div>

        <div className="w-1/3 shadow-md bg-white border-b-wearecrewBlue rounded-md p-4 h-full">
          <p className="text-center mb-4 font-semibold text-lg">
            Filter by Role
          </p>
          <ul className="flex flex-col gap-y-4 filterByList">
            <li>
              <button className="w-full">Director of Photography</button>
            </li>
            <li>
              <button className="w-full">Camera Operator</button>
            </li>
            <li>
              <button className="w-full">Camera Operator / Steadicam</button>
            </li>
            <li>
              <button className="w-full">Focus Puller</button>
            </li>
            <li>
              <button className="w-full">Loader</button>
            </li>
            <li>
              <button className="w-full">Trainee</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default crewList;
