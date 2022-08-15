import React from 'react';
import Link from 'next/link';

const DeptCard = ({dept, imgUrl}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <Link href={`./depts/crew-list/${dept}`}>
        <a className="bg-white w-full sm:min-w-[180px] sm:w-[180px] h-[180px] flex flex-col items-center justify-center rounded border-b-2 border-wearecrewBlue shadow-md hoverScale gap-y-2 ">
            <h1 className="text-5xl sm:text-3xl">{dept}</h1>
            <img src={imgUrl} alt={`${dept} img`} width="50" height="50" />
        </a>
      </Link>
    </div>
  )
}

export default DeptCard
