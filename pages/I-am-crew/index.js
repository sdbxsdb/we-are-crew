import { React, useState, useEffect } from "react";
import Head from "next/head";
import DynamicList from "../../components/DynamicList";
import FileUpload from "../../components/FileUpload";


const IAmCrew = () => {


  const [avail, setAvail] = useState(true);
  const [semiAvail, setSemiAvail] = useState(false);
  const [notAvail, setNotAvail] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);

  const availHandler = () => {
    setAvail(true);
    setSemiAvail(false);
    setNotAvail(false);
  };
  const semiAvailHandler = () => {
    setSemiAvail(true);
    setAvail(false);
    setNotAvail(false);
  };
  const notAvailHandler = () => {
    setNotAvail(true);
    setSemiAvail(false);
    setAvail(false);
  };

  const onChangeHandler = () => {
    setProfileChanged(true);
    console.log("Changed");
  };

  return (
    <>
      <Head>
        <title>I Am Crew | We Are Crew</title>
        <meta name="keywords" content="I Am Crew" />
        <meta
          name="description"
          content="Hello this is a test description for the My Crew page"
        />
      </Head>


        <form
          onChange={onChangeHandler}
          className=" w-full flex justify-center py-12 relative"
        >
          <div className="bg-white shadow-md rounded-md w-11/12 md:min-w-[400px] md:w-[600px] px-12 py-12">
            <div className="flex justify-center">
              <h1 className="text-3xl">My Crew</h1>
            </div>
            <div className="w-full text-center mt-16">
              <p className="text-wearecrewBlue text-sm">Status</p>
              <div className="flex justify-center mt-2">
                <div className="radio_container h-full gap-x-8 md:rounded-full px-4 py-2 text-sm sm:text-lg">
                  <div className="flex justify-center w-[300px] md:w-auto gap-x-2 md:gap-x-8">
                    <input type="radio" name="radio" id="avail" />
                    <label
                      onClick={notAvailHandler}
                      htmlFor="avail"
                      id="notAvail"
                      className={`min-w-max ${
                        notAvail === true ? "bg-wearecrewRed" : ""
                      }`}
                    >
                      Not Available
                    </label>
                    <input type="radio" name="radio" id="semiAvail" />
                    <label
                      onClick={semiAvailHandler}
                      className={`min-w-max ${
                        semiAvail === true ? "bg-wearecrewOrange" : ""
                      }`}
                      htmlFor="semiAvail"
                      id="semiAvail"
                    >
                      On Dailies
                    </label>
                    <input type="radio" name="radio" id="notAvail" />
                    <label
                      onClick={availHandler}
                      className={`min-w-max ${
                        avail === true ? "bg-wearecrewGreen" : ""
                      }`}
                      htmlFor="notAvail"
                      id="avail"
                    >
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
                    defaultValue="name"
                    className="border shadow-md w-full"
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
                <li className="flex flex-col styledList w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Grade / Title</p>
                  <select name="dept">
                    <option disabled>Choose Grade / Title</option>
                    <option value="Assistant Directors">
                      Director of Photography
                    </option>
                    <option value="Assistant Directors">Camera Operator</option>
                    <option value="Assistant Directors">Focus Puller</option>
                    <option value="Assistant Directors">Loader</option>
                    <option value="Assistant Directors">Trainee</option>
                  </select>
                </li>

                <li className="flex flex-col w-full md:w-[420px] -mt-6 justify-center">
                  <small className="flex items-center">
                    <input type="checkbox" className="chb chb-3" id="stepUp" />
                    <label className="min-w-max" htmlFor="stepUp">
                      Willing / able to step up a grade if required
                    </label>
                  </small>
                </li>

                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="safetyQualifications"
                    type="text"
                    defaultValue="safetyQualifications"
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
                  <p className="text-sm text-wearecrewBlue">Can work in</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-2 gap-x-4">
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="london"
                      />
                      <label className="min-w-max" htmlFor="london">
                        London
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="liverpool"
                      />
                      <label className="min-w-max" htmlFor="liverpool">
                        Liverpool
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="newcastle"
                      />
                      <label className="min-w-max" htmlFor="newcastle">
                        Newcastle upon Tyne
                      </label>
                    </li>
                    <li className="w-auto">
                      <input type="checkbox" className="chb chb-3" id="leeds" />
                      <label className="min-w-max" htmlFor="leeds">
                        Birmingham
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="exeter"
                      />
                      <label className="min-w-max" htmlFor="exeter">
                        Exeter
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="norwich"
                      />
                      <label className="min-w-max" htmlFor="norwich">
                        Norwich
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="glasgow"
                      />
                      <label className="min-w-max" htmlFor="glasgow">
                        Glasgow
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="edinbrugh"
                      />
                      <label className="min-w-max" htmlFor="edinbrugh">
                        Edinbrugh
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="aberdeen"
                      />
                      <label className="min-w-max" htmlFor="aberdeen">
                        Aberdeen
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="belfast"
                      />
                      <label className="min-w-max" htmlFor="belfast">
                        Belfast
                      </label>
                    </li>
                    <li className="w-auto">
                      <input type="checkbox" className="chb chb-3" id="derry" />
                      <label className="min-w-max" htmlFor="derry">
                        Derry / L’Derry
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="enniskillen"
                      />
                      <label className="min-w-max" htmlFor="enniskillen">
                        Enniskillen
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="dublin"
                      />
                      <label className="min-w-max" htmlFor="dublin">
                        Dublin
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="galway"
                      />
                      <label className="min-w-max" htmlFor="galway">
                        Galway
                      </label>
                    </li>
                    <li className="w-auto">
                      <input type="checkbox" className="chb chb-3" id="cork" />
                      <label className="min-w-max" htmlFor="cork">
                        Cork
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="donegal"
                      />
                      <label className="min-w-max" htmlFor="donegal">
                        Donegal
                      </label>
                    </li>
                    <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="outsideUKandIre"
                      />
                      <label className="min-w-max" htmlFor="outsideUKandIre">
                        Outside the UK &amp; Ireland
                      </label>
                    </li>
                  </div>
                </div>
                <li className="relative styledList w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Email</p>
                  <input
                    name="email"
                    type="text"
                    value="email"
                    className="border shadow-md w-full opacity-30 cursor-not-allowed"
                    disabled
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                </li>
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="name"
                    type="text"
                    defaultValue="website"
                    className="border shadow-md w-full"
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="name">Website</label>
                </li>
                <>
                  <li className="relative styledList w-full md:w-[420px]">
                    <input
                      name="phone"
                      type="number"
                      defaultValue="phone"
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
            <div className="top-12 w-full left-0 justify-center mt-12">
              {profileChanged === false ? (
                ''
              ) : (
                <button className="text-3xl w-full rounded-md p-4 text-white  bg-wearecrewGreen">Save</button>
              )}
            </div>
          </div>
        </form>

    </>
  );
};

export default IAmCrew;
