import { useState, useEffect } from "react";

import { supabase } from "../utils/supabaseClient";
import DynamicList from "./DynamicList";
import FileUpload from "./FileUpload";
import places from "../places.json";

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
  const [status, setStatus] = useState("");
  const [dept, setDept] = useState("");
  const [title, setTitle] = useState("");
  const [canStepUp, setCanStepUp] = useState(false);
  const [qualis, setQualis] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [canWorkIn, setCanWorkIn] = useState([]);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getCurrentUser() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    if (!session?.user) {
      throw new Error("User not logged in");
    }

    return session.user;
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `username, email, website, avatar_url, status, dept, title, canStepUp, qualis, phone, bio, canWorkIn`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log("DATA-", data);

        setUsername(data.username);
        setEmail(data.email);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setStatus(data.status);
        setDept(data.dept);
        setTitle(data.title);
        setCanStepUp(data.canStepUp);
        setQualis(data.qualis);
        setPhone(data.phone);
        setBio(data.bio);
        setCanWorkIn(data.canWorkIn);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    email = session?.user.email,
    website,
    avatar_url,
    status,
    dept,
    title,
    canStepUp,
    qualis,
    phone,
    bio,
    canWorkIn,
  }) {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      const updates = {
        id: user.id,
        username,
        email,
        website,
        avatar_url,
        status,
        dept,
        title,
        canStepUp,
        qualis,
        phone,
        bio,
        canWorkIn,

        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      setShowProfileSaved(true);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setProfileChanged(false);
      setTimeout(() => {
        setShowProfileSaved(false);
      }, 3000);
    }
  }

  const [profileChanged, setProfileChanged] = useState(false);
  const [showProfileSaved, setShowProfileSaved] = useState(false);

  const availHandler = () => {
    setStatus("Available");
    setProfileChanged(true);
  };
  const semiAvailHandler = () => {
    setStatus("On Dalies");
    setProfileChanged(true);
  };
  const notAvailHandler = () => {
    setStatus("Not Available");
    setProfileChanged(true);
  };

  const canStepUpHandler = () => {
    setCanStepUp(!canStepUp);
    setProfileChanged(true);
  };

  const onUpdateProfileHandler = () => {
    setProfileChanged(true);
  };

  const ListCheckbox = (place, i) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
      setChecked(!checked);
      
      var newItem = place.place;

canWorkIn.indexOf(newItem) === -1 ? canWorkIn.push(newItem) : console.log("This item already exists");

console.log(canWorkIn)

      
    };
    

    return (
      <li className="w-auto">
        <input
          type="checkbox"
          className="chb chb-3"
          id={place.place}
          onChange={handleChange}
          value={place.place}
          checked={place.checked}
        />
        <label className="min-w-max" htmlFor={place.place}>
          {place.place}
        </label>
      </li>
    );
  };

  return (
    <>
      <div className="w-full">
        <form
          onChange={onUpdateProfileHandler}
          className=" w-full flex justify-center py-12 relative"
        >
          <div className="bg-white shadow-md rounded-md w-11/12 md:min-w-[400px] md:w-[600px] px-12 py-12">
            <div className="flex justify-center">
              <h1 className="text-3xl">My Crew</h1>
            </div>

            {/* STATUS */}
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
                        status === "Not Available" ? "bg-wearecrewRed" : ""
                      }`}
                    >
                      Not Available
                    </label>
                    <input type="radio" name="radio" id="semiAvail" />
                    <label
                      onClick={semiAvailHandler}
                      className={`min-w-max ${
                        status === "On Dalies" ? "bg-wearecrewOrange" : ""
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
                        status === "Available" ? "bg-wearecrewGreen" : ""
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
            {/* //END OF STATUS */}

            <div className="">
              <ul className="flex items-center w-full pt-12 flex-col gap-y-8">
                {/* NAME */}
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="name"
                    type="text"
                    defaultValue={username}
                    className="border shadow-md w-full"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="name">Name</label>
                </li>
                {/* //END OF NAME */}

                {/* DEPARTMENT */}
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
                {/* //END OF DEPARTMENT */}

                {/* GRADE/TITLE */}
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
                {/* //END OF GRADE/TITLE */}

                {/* STEP UP */}
                <li className="flex flex-col w-full md:w-[420px] -mt-6 justify-center">
                  <small className="flex items-center">
                    <input
                      type="checkbox"
                      className="chb chb-3"
                      id="stepUp"
                      onChange={canStepUpHandler}
                      checked={canStepUp}
                    />
                    <label className="min-w-max" htmlFor="stepUp">
                      Willing / able to step up a grade if required
                    </label>
                  </small>
                </li>
                {/* //END OF STEP UP */}

                {/* QUALIS */}
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="safetyQualifications"
                    type="text"
                    defaultValue={qualis}
                    className="border shadow-md w-full"
                    required
                    onChange={(e) => setQualis(e.target.value)}
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
                {/* //END OF QUALIS */}

                {/* CAN WORK IN */}
                <div className="flex flex-col relative mb-4 w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Can work in</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-2 gap-x-4">
                    
                    {places.map((place, i) => (
                      <ListCheckbox key={i} place={place} />
                    ))}

                    {/* <li className="w-auto">
                      <input
                        type="checkbox"
                        className="chb chb-3"
                        id="liverpool"
                        onChange={(e) => canWorkInHandler(e, e.target.checked)}
                        value="Liverpool"
                        checked={checked}
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
                    </li> */}
                  </div>
                </div>
                {/* //END OF CAN WORK IN */}

                {/* EMAIL */}
                <li className="relative styledList w-full md:w-[420px]">
                  <p className="text-sm text-wearecrewBlue">Email</p>
                  <input
                    name="email"
                    type="text"
                    value={email}
                    placeholder={session?.user?.email}
                    className="border shadow-md w-full opacity-30 cursor-not-allowed"
                    disabled
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                </li>
                {/* //END OF EMAIL */}

                {/* WEBSITE */}
                <li className="relative styledList w-full md:w-[420px]">
                  <input
                    name="name"
                    type="text"
                    defaultValue={website}
                    className="border shadow-md w-full"
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="name">Website</label>
                </li>
                {/* //END OF WEBSITE */}

                {/* PHONE */}
                <>
                  <li className="relative styledList w-full md:w-[420px]">
                    <input
                      name="phone"
                      type="number"
                      defaultValue={phone}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setPhone(e.target.value)}
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
                {/* //END OF PHONE */}

                {/* CREDITS */}
                <DynamicList />
                {/* //END OF CREDITS */}

                {/* BIO */}
                <li className="relative styledList w-full md:w-[420px]">
                  <textarea
                    className="border shadow-md w-full"
                    rows="5"
                    cols=""
                    onChange={
                      ((e) => setCount(e.target.value.length),
                      (e) => setBio(e.target.value))
                    }
                    value={bio}
                    maxLength="240"
                    required
                  />
                  <p>{bio?.length}/240</p>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="bio">Short Bio</label>
                </li>
                {/* //END OF BIO */}

                {/* UPLOAD CV */}
                <FileUpload />
                {/* //END OF UPLOAD CV */}
              </ul>
            </div>
            <div className="top-12 w-full left-0 justify-center mt-12">
              {profileChanged === false ? (
                ""
              ) : (
                <button
                  className="text-3xl w-full rounded-md p-4 text-white  bg-wearecrewGreen"
                  onClick={() =>
                    updateProfile({
                      username,
                      website,
                      avatar_url,
                      status,
                      dept,
                      title,
                      canStepUp,
                      qualis,
                      phone,
                      bio,
                      canWorkIn
                    })
                  }
                  disabled={loading}
                >
                  {loading ? "Saving ..." : "Save"}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {showProfileSaved && (
        <div className="w-screen h-screen fixed bg-white bg-opacity-80 flex flex-col justify-center items-center bottom-0 left-0 z-3000 gap-y-6">
          <h1 className="text-3xl">Profile Saved!</h1>
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Account;