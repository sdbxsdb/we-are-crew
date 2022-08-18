import { useState, useEffect, useCallback } from "react";
import { supabase } from "../utils/supabaseClient";
import { Head } from "next/head";
import LimitedTextarea from "./LimitedTextarea";
import DynamicList from "./DynamicList";
import FileUpload from "./FileUpload";

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [status, setStatus] = useState("Available");
  const [dept, setDept] = useState(null);
  const [title, setTitle] = useState(null);
  const [canStepUp, setCanStepUp] = useState(false);
  const [qualis, setQualis] = useState(null);
  const [phone, setPhone] = useState(null);
  const [bio, setBio] = useState(null);

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

      console.log(user);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `username, email, website, avatar_url, status, dept, title, canStepUp, qualis, phone, bio`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
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
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
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
  }) {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      const updates = {
        id: user.id,
        username,
        website,
        email,
        avatar_url,
        status,
        dept,
        title,
        canStepUp,
        qualis,
        phone,
        bio,

        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      setProfileChanged(false);
    }
  }

  const [avail, setAvail] = useState(true);
  const [semiAvail, setSemiAvail] = useState(false);
  const [notAvail, setNotAvail] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);

  const availHandler = () => {
    setStatus("Available");
    setAvail(true);
    setSemiAvail(false);
    setNotAvail(false);
  };
  const semiAvailHandler = () => {
    setStatus("On Dalies");
    setSemiAvail(true);
    setAvail(false);
    setNotAvail(false);
  };
  const notAvailHandler = () => {
    setStatus("Not Available");
    setNotAvail(true);
    setSemiAvail(false);
    setAvail(false);
  };

  const onChangeHandler = () => {
    setProfileChanged(true);
  };


  return (
    <div>
      <div className="form-widget">


        <div className="mb-12">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={session.user.email} disabled />
          </div>
          <div>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="website"
              value={website || ""}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="status"
              value={status || ""}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="dept">Department</label>
            <input
              id="dept"
              type="dept"
              value={dept || ""}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="title"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="canStepUp">Can Step Up?</label>
            <input
              id="canStepUp"
              type="canStepUp"
              value={canStepUp || ""}
              onChange={(e) => setCanStepUp(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="qualis">Qualifications</label>
            <input
              id="qualis"
              type="qualis"
              value={qualis || ""}
              onChange={(e) => setQualis(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="phone"
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="bio"
              value={bio || ""}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>

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
                    defaultValue={username}
                    className="border shadow-md w-full"
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={session.user.email}
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
                    defaultValue={website}
                    className="border shadow-md w-full"
                    onChange={(e) => setWebsite(e.target.value)}
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
                <DynamicList />
                <li className="relative styledList w-full md:w-[420px]">
                  <textarea
                    className="border shadow-md w-full"
                    rows="5"
                    cols=""
                    onChange={((e) => setCount(e.target.value.length), (e) => setBio(e.target.value))}
                    value={bio}
                    maxLength="240"
                    required
                  />
                  <p>
                    {bio?.length}/240
                  </p>
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="bio">Short Bio</label>
                </li>
                <FileUpload />
              </ul>
            </div>
            <div className="top-12 w-full left-0 justify-center mt-12">
              {profileChanged === false ? (
                ""
              ) : (
                <button className="text-3xl w-full rounded-md p-4 text-white  bg-wearecrewGreen" onClick={() =>
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
                  })
                }
                disabled={loading}>
                  {loading ? "Saving ..." : "Save"}
                </button>
              )}
            </div>
          </div>
        </form>

        <div>
          <button
            className="button primary block"
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
              })
            }
            disabled={loading}
          >
            {loading ? "Saving ..." : "Update"}
          </button>
        </div>

        <div>
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
