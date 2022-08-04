import React from "react";
import Head from "next/head";
import { useUser } from "../../firebase/useUser";
import LimitedTextarea from "../../components/LimitedTextarea";
import DynamicList from "../../components/DynamicList";


const IAmCrew = () => {
  const { user, logout } = useUser();

  return (
    <>
      <Head>
        <title>I Am Crew | We Are Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the About page"
        />
      </Head>
      <div className="px-12">
        <div className="flex justify-center">
          <h1>My Crew</h1>
        </div>
        <ul className="flex flex-col gap-y-4">
          <li className="flex flex-col w-1/2">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              value={user?.name}
              className="border shadow-md w-full"
            />
          </li>

          <li className="flex flex-col w-1/2">
            <label htmlFor="dept">Department</label>
            <select name="dept">
              <option value="null" disabled>
                Choose Deptartment
              </option>
              <option value="Assistant Directors">Assistant Directors</option>
              <option value="Assistant Directors">Camera</option>
              <option value="Assistant Directors">Grips</option>
            </select>
          </li>
          <li className="flex flex-col w-1/2">
            <label htmlFor="grade">Grade / Title</label>
            <input
              name="grade"
              type="text"
              value={user?.grade}
              className="border shadow-md w-full"
            />
          </li>
          <li className="flex flex-col w-1/2">
            <label htmlFor="safetyQualifications">Safety Qualifications</label>
            <small>(If applicable)</small>
            <input
              name="safetyQualifications"
              type="text"
              value={user?.safetyQualifications}
              className="border shadow-md w-full"
            />
          </li>
          <li className="flex flex-col w-1/2">
            <p>Will work in</p>
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                id="northernIreland"
                name="northernIreland"
                value="Northern Ireland"
              />
              <label htmlFor="northernIreland">Northern Ireland</label>
            </div>
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                id="southernIreland"
                name="southernIreland"
                value="Southern Ireland"
              />
              <label htmlFor="southernIreland">Southern Ireland</label>
            </div>
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                id="england"
                name="england"
                value="England"
              />
              <label htmlFor="england">England</label>
            </div>
            <div className="flex gap-x-4">
              <input
                type="checkbox"
                id="scotland"
                name="scotland"
                value="Scotland"
              />
              <label htmlFor="sotland">Scotland</label>
            </div>
            <div className="flex gap-x-4">
              <input type="checkbox" id="wales" name="wales" value="Scotland" />
              <label htmlFor="wales">Wales</label>
            </div>
          </li>
          <li className="flex flex-col w-1/2">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              value={user?.email}
              className="border shadow-md w-full"
            />
          </li>
          <li className="flex flex-col w-1/2">
            <label htmlFor="contactDetails">Phone</label>
            <label htmlFor="contactDetails">Phone 1</label>
            <input
              name="contactDetails"
              type="text"
              value={user?.phone1}
              className="border shadow-md w-full"
            />
            <label htmlFor="contactDetails">Phone 2</label>
            <input
              name="contactDetails"
              type="text"
              value={user?.phone2}
              className="border shadow-md w-full"
            />
          </li>
          <DynamicList />

          <li className="flex flex-col w-1/2">
            <label>Short Bio</label>
            <LimitedTextarea limit={240} value="" rows={5}/>
          </li>
        </ul>
      </div>
    </>
  );
};

export default IAmCrew;
