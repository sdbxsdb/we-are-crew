import React from 'react'

const DeptCard = ({dept, imgUrl}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <button className="bg-white w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center rounded border-b-2 border-wearecrewBlue shadow-md hoverScale gap-y-2">
        <h1 className="text-3xl">{dept}</h1>
        <img src={imgUrl} alt={`${dept} img`} width="50" height="50" />
      </button>
    </div>
  )
}

export default DeptCard