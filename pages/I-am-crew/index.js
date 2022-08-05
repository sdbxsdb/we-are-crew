import { React, useState } from "react";
import Head from "next/head";
import { useUser } from "../../firebase/useUser";
import LimitedTextarea from "../../components/LimitedTextarea";
import DynamicList from "../../components/DynamicList";
import FileUpload from "../../components/FileUpload";

const IAmCrew = () => {
  const { user, logout } = useUser();
  const [selectedFile, setSelectedFile] = useState(null);

  const onInputChangeHandler = (e) => {
    const newVal = e.target.value;
    console.log(e.target.value);
  }

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

      {user && (
        <div className="flex w-full justify-center pt-12">
          <div className="bg-white shadow-md rounded-md min-w-[400px] w-[600px] px-12 py-12">
            <div className="flex justify-center">
              <h1 className="text-3xl">My Crew</h1>
            </div>
            <div className="w-full mt-16">
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
            <div className="">
              <ul className="flex items-center w-full pt-12 flex-col gap-y-8">
                <li className="relative styledList">
                  <input
                    name="name"
                    type="text"
                    defaultValue={user?.name}
                    className="border shadow-md"
                    onChange={onInputChangeHandler}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="name">Name</label>
                </li>
                <li className="flex flex-col styledList">
                  <p className="text-sm text-wearecrewBlue">Department</p>
                  <select name="dept">
                    <option disabled>Choose Deptartment</option>
                    <option value="Assistant Directors">
                      Assistant Directors
                    </option>
                    <option value="Assistant Directors">Camera</option>
                    <option value="Assistant Directors">Grips</option>
                  </select>
                </li>
                <li className="relative styledList">
                  <input
                    name="grade"
                    type="text"
                    defaultValue={user?.grade}
                    className="border shadow-md"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="grade">Grade / Title</label>
                </li>
                <li className="relative styledList">
                  <input
                    name="safetyQualifications"
                    type="text"
                    defaultValue={user?.safetyQualifications}
                    className="border shadow-md"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <small>Put N/A if none</small>
                  <label htmlFor="safetyQualifications">
                    Safety or other Qualifications
                  </label>
                </li>
                <div className="flex flex-col relative mb-4 w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Will work in</p>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex gap-x-4">
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="england"
                        />
                        <label htmlFor="england">England</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="scotland"
                        />
                        <label htmlFor="scotland">Scotland</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="wales"
                        />
                        <label htmlFor="wales">Wales</label>
                      </li>
                    </div>
                    <div className="flex gap-x-4">
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="ireland"
                        />
                        <label htmlFor="ireland">Ireland</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="northernIreland"
                        />
                        <label htmlFor="northernIreland">
                          Northern Ireland
                        </label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="chb chb-3"
                          id="outsideUK"
                        />
                        <label htmlFor="outsideUK">Outside the UK</label>
                      </li>
                    </div>
                  </div>
                </div>
                <li className="relative styledList">
                <p className="text-sm text-wearecrewBlue">Email</p>
                  <input
                    name="email"
                    type="text"
                    value={user?.email}
                    className="border shadow-md opacity-30 cursor-not-allowed"
                    disabled
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>

                </li>
                <div className="">
                  <li className="relative styledList">
                    <input
                      name="phone"
                      type="number"
                      defaultValue={user?.phone}
                      className="border shadow-md"
                      required
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="phone">Phone</label>
                  </li>
                  <span title="" className="tooltip w-full">
                    Area Code?
                  </span>
                </div>
                <DynamicList />
                <li className="relative styledList">
                  <LimitedTextarea limit={240} value="" rows={5} name="bio" />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="bio">Short Bio</label>
                </li>
                <FileUpload />
              </ul>
            </div>

            <div className="flex justify-center w-full mt-12">
              <button className="text-3xl">Save</button>
            </div>
          </div>
        </div>
      )}

      {!user && (
        <div className="flex justify-center">
          <h1 className="text-3xl">Loading...</h1>
        </div>
      )}
    </>
  );
};

export default IAmCrew;
