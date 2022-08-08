import React from 'react'
import CrewDetailBox from '../../../../components/CrewDetailBox';

const crewList = () => {
  return (
    <div className="flex px-12 gap-x-4 pt-12">
      <div className="w-2/3 borderRed flex flex-col gap-y-4">
        <CrewDetailBox/>
      </div>
      
      <div className="w-1/3 shadow-md bg-white border-b-wearecrewBlue rounded-md p-4">
        <p className="text-center mb-4 font-semibold text-lg">Filter by Role</p>
        <ul className="flex flex-col gap-y-4 filterByList">
          <li>Director of Photography</li>
          <li>Camera Operator</li>
          <li>Camera Operator Steadicam</li>
          <li>Focus Puller</li>
          <li>Loader</li>
          <li>Trainee</li>
        </ul>
      </div>

    </div>
  )
}

export default crewList