import React from 'react'
import CrewDetailBox from '../../../../components/CrewDetailBox';

const crewList = () => {
  return (
    <div className="flex px-12 gap-x-4 pt-12">
      <div className="w-2/3 flex flex-col gap-y-4 overflow-scroll max-h-[calc(100vh-200px)]">
        <CrewDetailBox/>
      </div>
      
      <div className="w-1/3 shadow-md bg-white border-b-wearecrewBlue rounded-md p-4 h-full">
        <p className="text-center mb-4 font-semibold text-lg">Filter by Role</p>
        <ul className="flex flex-col gap-y-4 filterByList">
          <li><button className="w-full">Director of Photography</button></li>
          <li><button className="w-full">Camera Operator</button></li>
          <li><button className="w-full">Camera Operator / Steadicam</button></li>
          <li><button className="w-full">Focus Puller</button></li>
          <li><button className="w-full">Loader</button></li>
          <li><button className="w-full">Trainee</button></li>
        </ul>
      </div>

    </div>
  )
}

export default crewList