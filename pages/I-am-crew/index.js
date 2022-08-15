import { React, useState } from "react";
import Head from "next/head";
import { useUser } from "../../firebase/useUser";
import LimitedTextarea from "../../components/LimitedTextarea";
import DynamicList from "../../components/DynamicList";
import FileUpload from "../../components/FileUpload";

const IAmCrew = () => {
  const { user, logout } = useUser();

  const onInputChangeHandler = (e) => {
    const newVal = e.target.value;
    console.log(e.target.value);
  };

  return (
    <>
      <Head>
        <title>I Need Crew | We Are Crew</title>
        <meta name="keywords" content="I Need Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the My Crew page"
        />
      </Head>

      {user && (
        <div className=" w-full flex justify-center py-12">
          <div className="bg-white shadow-md rounded-md w-11/12 md:min-w-[400px] md:w-[600px] px-12 py-12">
            <div className="flex justify-center">
              <h1 className="text-3xl">My Crew</h1>
            </div>
            <div className="w-full mt-16">
              <p className="text-center">Status</p>
              <div className="flex justify-center">
                <div className="radio_container h-full gap-x-8 md:rounded-full px-4 py-2 text-sm sm:text-lg">
                  <div id="notAvail">
                    <input type="radio" name="radio" id="one" />
                    <label htmlFor="one" className="min-w-max">
                      Not Available
                    </label>
                  </div>
                  <div id="semiAvail">
                    <input type="radio" name="radio" id="two" />
                    <label htmlFor="two" className="min-w-max">
                      On Dailies
                    </label>
                  </div>
                  <div id="avail">
                    <input type="radio" name="radio" id="three" />
                    <label htmlFor="three" className="min-w-max">
                      Available
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="flex items-center w-full pt-12 flex-col gap-y-8">
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="name"
                    type="text"
                    defaultValue={user?.name}
                    className="border shadow-md w-full"
                    onChange={onInputChangeHandler}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="name">Name</label>
                </li>
                <li className="flex flex-col styledList w-full md:w-[420px]">
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
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="grade"
                    type="text"
                    defaultValue={user?.grade}
                    className="border shadow-md w-full"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="grade">Grade / Title</label>
                </li>
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="safetyQualifications"
                    type="text"
                    defaultValue={user?.safetyQualifications}
                    className="border shadow-md w-full"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <small className="text-wearecrewDarkGrey">
                    Use hypen bewteen each item.  Leave empty if N/A.
                  </small>
                  <label htmlFor="safetyQualifications">
                    Safety or other Qualifications
                  </label>
                </li>
                <div className="flex flex-col relative mb-4 w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Will work in</p>
                  <div className="flex flex-wrap flex-col sm:flex-row gap-y-2 gap-x-4">
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="england"
                      />
                      <label className="min-w-max" htmlFor="england">
                        England
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="scotland"
                      />
                      <label className="min-w-max" htmlFor="scotland">
                        Scotland
                      </label>
                    </li>
                    <li className="w-auto">
                      <input type="checkbox" className="chb chb-3" id="wales" />
                      <label className="min-w-max" htmlFor="wales">
                        Wales
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="ireland"
                      />
                      <label className="min-w-max" htmlFor="ireland">
                        Ireland
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="northernIreland"
                      />
                      <label className="min-w-max" htmlFor="northernIreland">
                        Northern Ireland
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="outsideUK"
                      />
                      <label className="min-w-max" htmlFor="outsideUK">
                        Outside the UK
                      </label>
                    </li>
                  </div>
                </div>
                <li className="relative styledList w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Email</p>
                  <input
                    name="email"
                    type="text"
                    value={user?.email}
                    className="border shadow-md w-full opacity-30 cursor-not-allowed"
                    disabled
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                </li>
                <>
                  <li className="relative styledList w-full md:w-[420px]">
                    <input
                      name="phone"
                      type="number"
                      defaultValue={user?.phone}
                      className="border shadow-md w-full"
                      required
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="phone">Phone</label>
                  </li>
                  <span
                    title=""
                    className="tooltip text-wearecrewDarkGrey w-full -mt-8 left-0 md:left-[44px]"
                  >
                    Area Code?
                  </span>
                </>
                <DynamicList />
                <li className="relative styledList w-full md:w-[420px]">
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
    </>
  );
};

export default IAmCrew;
