import React from 'react'
import { useRouter } from "next/router";


const DeptTitle = () => {
    const router = useRouter();
    const deptTitle = router?.query?.crewList;

    console.log({deptTitle})
  return (
    <>{deptTitle}</>
  )
}

export default DeptTitle