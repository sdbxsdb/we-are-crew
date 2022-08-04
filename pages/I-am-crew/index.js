import { React, useState } from "react";
import Head from "next/head";
import { useUser } from "../../firebase/useUser";
import LimitedTextarea from "../../components/LimitedTextarea";
import DynamicList from "../../components/DynamicList";
import FileUpload from "../../components/FileUpload";

const IAmCrew = () => {
  const { user, logout } = useUser();
  const [selectedFile, setSelectedFile] = useState(null);

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
      <div className="px-12 py-20">
        <div className="flex justify-center">
          <h1>My Crew</h1>
        </div>

        <div className="flex">
          <ul className="flex w-1/2 flex-col gap-y-4">
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
              <label htmlFor="safetyQualifications">
                Safety Qualifications
              </label>
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
                <input
                  type="checkbox"
                  id="wales"
                  name="wales"
                  value="Scotland"
                />
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
            <p>Upload CV</p>
            <FileUpload />
            <li className="flex flex-col w-1/2">
              <label>Short Bio</label>
              <LimitedTextarea limit={240} value="" rows={5} />
            </li>
          </ul>
          <div className="w-1/2">
            <p className="text-center">Status</p>

            <div className="flex justify-center">
              <div className="radio_container">
                <div id="notAvail">
                  <input type="radio" name="radio" id="one" />
                  <label htmlFor="one">Not Available</label>
                </div>
                <div id="semiAvail">
                  <input type="radio" name="radio" id="two" />
                  <label htmlFor="two">On Dailies</label>
                </div>
                <div id="avail">
                  <input type="radio" name="radio" id="three" />
                  <label htmlFor="three">Available</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-12">
          <button className="text-3xl">Save</button>
        </div>
      </div>
    </>
  );
};

export default IAmCrew;
