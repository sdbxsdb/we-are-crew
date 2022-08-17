import React from 'react'
import { useRouter } from "next/router";


const DeptTitle = () => {
    const router = useRouter();
    console.log(router.query.crewList);
    const deptTitle = router.query.crewList;
  return (
    <>{deptTitle}</>
  )
}

export default DeptTitle