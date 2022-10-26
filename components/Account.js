import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";
import DynamicList from "./DynamicList";
import UploadCV from "./UploadCV";
import UploadImg from "./UploadImg";
import places from "../places.json";
import depts from "../depts.json";
import { useUser } from "../context/user";
import { deleteCookie } from "cookies-next";

const Account = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [cvURL, setCvURL] = useState(null);
  const [cvFileName, setCvFileName] = useState();
  const [status, setStatus] = useState("Available");
  const [willBeAvailOn, setWillBeAvailOn] = useState("");
  const [dept, setDept] = useState("");
  const [title, setTitle] = useState("");
  const [canStepUp, setCanStepUp] = useState(false);
  const [qualis, setQualis] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [canWorkIn, setCanWorkIn] = useState([]);
  const [credits, setCredits] = useState([{}]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [paid, setPaid] = useState(undefined);
  const [dateOfPayment, setdateOfPayment] = useState("");

  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const router = useRouter();
  const { user, logout } = useUser();

  const [showFinsihProfileError, setShowFinishProfileError] = useState(false);
  const [showDeleteProfileWarning, setShowDeleteProfileWarning] =
    useState(false);

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

      setID(user.id);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(
          `username, email, website, imgURL, status, willBeAvailOn, dept, title, canStepUp, qualis, phone, bio, canWorkIn, credits, cvURL, updated_at, paid, dateOfPayment, id`
        )
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        // console.log("DATA-", data);

        setID(data.id);
        setUsername(data.username);
        setEmail(data.email);
        setWebsite(data.website);
        setImgURL(data.imgURL);
        setStatus(data.status);
        setWillBeAvailOn(data.willBeAvailOn);
        setDept(data.dept);
        setTitle(data.title);
        setCanStepUp(data.canStepUp);
        setQualis(data.qualis);
        setPhone(data.phone);
        setBio(data.bio);
        setCanWorkIn(data.canWorkIn === null ? [] : data.canWorkIn);
        setCredits(data.credits === null ? [{}] : data.credits);
        setCvURL(data.cvURL);
        setUpdatedAt(data.updated_at);
        setPaid(data.paid);
        setdateOfPayment(data.dateOfPayment);
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
    imgURL,
    status,
    willBeAvailOn,
    dept,
    title,
    canStepUp,
    qualis,
    phone,
    bio,
    canWorkIn,
    credits,
    cvURL,
    paid,
  }) {
    try {
      setLoading(true);
      const user = await getCurrentUser();

      const updates = {
        id: user.id,
        username,
        email,
        website,
        imgURL,
        status,
        willBeAvailOn,
        dept,
        title,
        canStepUp,
        qualis,
        phone,
        bio,
        canWorkIn,
        credits,
        cvURL,

        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      setShowProfileSaved(true);

      if (error) {
        throw error;
      }
      setLoading(false);
      setProfileChanged(false);
    } catch (error) {
      alert(error.message);
    } finally {
      if (paid === true) {
        setTimeout(() => {
          setShowProfileSaved(false);
        }, 3000);
      } else {
        setShowProfileSaved(true);
      }
    }
  }

  const [profileChanged, setProfileChanged] = useState(false);
  const [showProfileSaved, setShowProfileSaved] = useState(false);

  const availHandler = () => {
    setStatus("Available");
    setProfileChanged(true);
    setWillBeAvailOn("");
  };
  const semiAvailHandler = () => {
    setStatus("On Dailies");
    setProfileChanged(true);
  };
  const notAvailHandler = () => {
    setStatus("Not Available");
    setProfileChanged(true);
  };

  // const canStepUpHandler = () => {
  //   setCanStepUp(!canStepUp);
  //   setProfileChanged(true);
  // };

  const onUpdateProfileHandler = () => {
    setProfileChanged(true);
  };

  //CAN WORK IN//
  const ListCheckbox = ({ place }) => {
    const [checked, setChecked] = useState(canWorkIn?.includes(place));


    useEffect(() => {
      if (checked) {
        canWorkIn?.indexOf(place) === -1
          ? setCanWorkIn([...canWorkIn, place])
          : null;
      } else {
        canWorkIn?.indexOf(place) > -1
          ? setCanWorkIn(canWorkIn.filter((item) => item !== place))
          : null;
      }
    }, [checked]);

    const handleChange = () => {
      setChecked(!checked);
    };

    return (
      <li className="w-auto">
        <input
          type="checkbox"
          className="chb chb-3"
          id={place}
          onChange={() => handleChange()}
          value={place}
          checked={checked}
        />
        <label className="min-w-max" htmlFor={place}>
          {place}
        </label>
      </li>
    );
  };

  const ListDept = (e) => {
    // console.log(dept);

    return (
      <select
        name="dept"
        onChange={(e) => {
          setDept(e.target.value);
          setTitle("");
        }}
        value={dept}
      >
        <option value="Choose Department" default>
          Choose Department
        </option>
        {depts.map((department) => (
          <option key={department.dept} value={department.dept}>
            {department.dept}
          </option>
        ))}
      </select>
    );
  };

  const ListTitle = () => {
    const selectedDept = depts.find((item) => item.dept === dept);

    return (
      <select
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      >
        <option value="Choose Title" default>
          Choose Title
        </option>
        {selectedDept?.titles?.map((title) => (
          <option key={title} value={title}>
            {title}
          </option>
        ))}
      </select>
    );
  };

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(imgURL);

  const imgStyling = {
    backgroundImage: `${
      imgURL ? `url(${publicUrl} )` : `url(/images/logoNew2.png)`
    } `,
    minWidth: "100px",
    minHeight: "100px",
    backgroundSize: `${imgURL ? "cover" : "contain"}`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const profileNotComplete = (e) => {
    e.preventDefault();
    setShowFinishProfileError(true);
    setTimeout(() => {
      setShowFinishProfileError(false);
    }, 3000);
  };

  const deleteCV = () => {
    // console.log("DELETE CV");
    setCvURL("");
    setProfileChanged(true);
  };

  const deleteProfile = async () => {
    // console.log("DELETE PROFILE");
    // console.log("USER ID-", id);
    const { data, error } = await supabase
      .from("profiles")
      .delete()
      .match({ id: id });
    supabase.auth.signOut();
    logout();
    deleteCookie("stripe_customer");
    router.push("/profileDeleted");
  };


  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  return (
    <>
      {showFinsihProfileError && (
        <div className="bg-white/70 w-screen h-screen fixed z-50 flex items-center justify-center top-0 left-0">
          <div className="p-4 rounded-md shadow-md bg-wearecrewOrange text-center w-full text-wearecrewLightGrey border-wearecrewOrange border-2 relative">
            <p>Fill in your Name, Department and Grade/Title before saving.</p>
            {/* <div onClick={() => setShowFinishProfileError(false)} className="flex items-center justify-center w-full  ">
        <h1 className="text-sm text-wearecrewDarkestGrey px-2 py-1 rounded-full cursor-pointer mt-2">Okay</h1>
      </div> */}
          </div>
        </div>
      )}
      {showDeleteProfileWarning && (
        <div className="bg-white/70 w-screen h-screen fixed z-50 flex items-center justify-center top-0 left-0">
          <div className="p-4 rounded-md shadow-md bg-wearecrewRed text-center w-full border-wearecrewRed border-2 relative flex flex-col items-center">
            <p className="text-white">
              Are you sure you want to delete your profile? This can&apos;t be
              undone...
            </p>
            <div className="flex gap-x-4 mt-2">
              <p
                onClick={() => deleteProfile()}
                className="bg-white cursor-pointer px-4 py-2 rounded-md shadow-md text-wearecrewRed min-w-[100px] "
              >
                Yes
              </p>
              <p
                onClick={() => setShowDeleteProfileWarning(false)}
                className="bg-white cursor-pointer px-4 py-2 rounded-md shadow-md min-w-[100px] text-wearecrewBlue"
              >
                No take me back
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        <form
          onChange={onUpdateProfileHandler}
          className=" w-full flex justify-center py-12 relative"
        >
          <div>
            <div className="bg-white shadow-md rounded-md w-full md:min-w-[400px] md:w-[800px] lg:w-[1000px] px-4 md:px-12 py-12 relative">
              {/* STICKY SAVE BUTTON */}
              <div className="hidden sm:block sticky w-full top-40 transform translate-x-10 h-[40px] -translate-y-6 z-50 text-right">
                {profileChanged && (
                  <button
                    className="p-4 bg-wearecrewGreen text-white shadow-md rounded-md"
                    onClick={(e) =>
                      dept !== "" &&
                      dept !== "Choose Department" &&
                      username !== "" &&
                      username !== null &&
                      title !== "" &&
                      title !== "Choose Title"
                        ? updateProfile({
                            username,
                            website,
                            imgURL,
                            status,
                            willBeAvailOn,
                            dept,
                            title,
                            canStepUp,
                            qualis,
                            phone,
                            bio,
                            canWorkIn,
                            credits,
                            cvURL,
                            paid,
                          })
                        : profileNotComplete(e)
                    }
                    disabled={loading}
                  >
                    {loading ? "Saving ..." : "Save"}
                  </button>
                )}
              </div>
              {/* //END OF STICKY SAVE BUTTON */}

              <div className="flex justify-center mt-[-40px]">
                <h1 className="text-3xl">Your <span className="text-wearecrewBlue">Get Crew</span> Profile</h1>
              </div>
              {/* STATUS */}
              <div className="w-full text-center mt-16">
                <p className="text-wearecrewBlue text-sm">Status</p>
                <div className="flex flex-col items-center justify-center mt-2">
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
                      {/* <input type="radio" name="radio" id="semiAvail" />
                      <label
                        onClick={semiAvailHandler}
                        className={`min-w-max ${
                          status === "On Dailies" ? "bg-wearecrewOrange" : ""
                        }`}
                        htmlFor="semiAvail"
                        id="semiAvail"
                      >
                        On Dailies
                      </label> */}
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
                  {status !== "Available" && (
                    <li className="relative styledList w-full md:w-2/3 list-none mt-8">
                      <input
                        name="willBeAvailOn"
                        type="text"
                        className="border shadow-md w-full"
                        placeholder="I will be available on..."
                        defaultValue={willBeAvailOn || ""}
                        onChange={(e) => setWillBeAvailOn(e.target.value)}
                      />
                      <span className="highlight"></span>
                      <span className="bar"></span>
                      <label htmlFor="name">Next Available</label>
                      {/* <span onClick={() => clearNextAvail()} className="absolute cursor-pointer right-2 top-1/4">Clear</span> */}
                    </li>
                  )}
                </div>
              </div>
              {/* //END OF STATUS */}
              <div className="">
                <ul className="flex items-center w-full pt-12 flex-col gap-y-8">
                  {/* IMAGE */}
                  <li className="relative styledList w-full md:w-2/3 flex flex-col items-center justify-center">
                    <div
                      style={imgStyling}
                      className="rounded-full overflow-hidden w-[150px] h-[150px] flex items-end justify-center shadow-md group transition"
                    ></div>
                    <UploadImg
                      url={imgURL}
                      onUpload={(url) => {
                        setImgURL(url);
                      }}
                    />
                  </li>
                  {/* //END OF IMAGE */}
                  {/* IS PROFILE LIVE */}
                  <div className="w-full md:w-2/3">
                    <p className="text-sm text-wearecrewBlue">Profile Status</p>
                    {paid !== true ? (
                      <div className=" items-center">
                        <h1 className="text-white w-full bg-wearecrewOrange p-0.5 rounded-md text-2xl text-center">
                          Pending
                        </h1>
                        <small>Your profile isn&apos;t currently live.</small>
                        <Link href="/pricing">
                          <a className="text-xs underline ml-2 text-wearecrewBlue">
                            Go live now
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <div className="">
                        <h1 className="text-white w-full bg-wearecrewGreen p-0.5 rounded-md text-2xl text-center">Live</h1>
                        <small>
                          Your profile has been live since {dateOfPayment}
                        </small>
                      </div>
                    )}
                  </div>
                  {/* //END OF IS PROFILE LIVE */}
                  {/* NAME */}
                  <li className="relative styledList w-full md:w-2/3">
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
                  <li className="flex flex-col styledList w-full md:w-2/3">
                    <p className="text-sm text-wearecrewBlue">Department</p>
                    <ListDept />
                  </li>
                  {/* //END OF DEPARTMENT */}
                  {/* GRADE/TITLE */}
                  <li className="flex flex-col styledList w-full md:w-2/3">
                    <p className="text-sm text-wearecrewBlue">Grade / Title</p>
                    <ListTitle />
                  </li>

                  {/* //END OF GRADE/TITLE */}

                  {/* QUALIS */}
                  <li className="relative styledList w-full md:w-2/3">
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
                      Use hyphen between each item.  Leave empty if N/A.
                    </small>
                    <label htmlFor="safetyQualifications">
                      Safety or other Qualifications
                    </label>
                  </li>
                  {/* //END OF QUALIS */}
                  {/* CAN WORK IN */}
                  <div className="flex flex-col relative mb-4 w-full md:w-2/3">
                    <p className="text-sm text-wearecrewBlue">Can work in</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-2 gap-x-4">
                      {places.map((place, i) => (
                        <ListCheckbox key={i} place={place} />
                      ))}
                    </div>
                  </div>
                  {/* //END OF CAN WORK IN */}
                  {/* EMAIL */}
                  <li className="relative styledList w-full md:w-2/3">
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
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="name"
                      type="text"
                      defaultValue={website}
                      placeholder="www.mywebsite.com"
                      className="border shadow-md w-full"
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="name">Website</label>
                  </li>
                  {/* //END OF WEBSITE */}
                  {/* PHONE */}
                  <li className="relative styledList w-full md:w-2/3">
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
                    <span
                    title=""
                    className="tooltip text-wearecrewDarkGrey w-full -mt-8 left-0 z-50"
                  >
                    Area Code?
                  </span>
                  </li>
                  
                  {/* //END OF PHONE */}
                  {/* CREDITS */}
                  <DynamicList
                    credits={credits}
                    setCredits={setCredits}
                    setProfileChanged={setProfileChanged}
                  />
                  {/* //END OF CREDITS */}
                  {/* BIO */}
                  <li className="relative styledList w-full md:w-2/3">
                    <textarea
                      className="border shadow-md w-full"
                      rows="5"
                      cols=""
                      onChange={
                        ((e) => setCount(e.target.value.length),
                        (e) => setBio(e.target.value))
                      }
                      defaultValue={bio}
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
                  <li className=" w-full md:w-2/3 flex flex-col items-center styledList">
                    <UploadCV
                      url={cvURL}
                      setCvFileName={setCvFileName}
                      cvFileName={cvURL}
                      updatedAt={updatedAt}
                      onUpload={(url) => {
                        setCvURL(url);
                      }}
                    />
                    {cvURL && (
                      <>
                      <small
                        onClick={() => deleteCV()}
                        className="cursor-pointer mt-2"
                      >
                        Remove CV
                      </small>
                      <p>{cvURL.split("?").pop(0)}</p>
                      </>
                    )}

                  </li>
                  {/* //END OF UPLOAD CV */}
                </ul>
              </div>
              <div className="top-12 w-full left-0 justify-center mt-12">
                {profileChanged === false ? (
                  ""
                ) : (
                  <button
                    className="text-3xl w-full rounded-md shadow-md p-4 text-white  bg-wearecrewGreen"
                    onClick={(e) =>
                      dept !== "" &&
                      dept !== "Choose Department" &&
                      username !== "" &&
                      username !== null &&
                      title !== "" &&
                      title !== "Choose Title"
                        ? updateProfile({
                            username,
                            website,
                            imgURL,
                            status,
                            willBeAvailOn,
                            dept,
                            title,
                            canStepUp,
                            qualis,
                            phone,
                            bio,
                            canWorkIn,
                            credits,
                            cvURL,
                            paid,
                          })
                        : profileNotComplete(e)
                    }
                    disabled={loading}
                  >
                    {loading ? "Saving ..." : "Save"}
                  </button>
                )}
              </div>
            </div>
            <div className=" w-full mt-8 flex flex-col items-center ">
              <h1 className="text-center text-2xl mb-2">Danger Zone</h1>
              <div className="bg-white/70 w-full border border-wearecrewRed px-12 py-6 flex justify-center flex-col items-center h-full shadow-md rounded-md ">
                <span
                  onClick={() => setShowDeleteProfileWarning(true)}
                  className="cursor-pointer p-4 rounded-md shadow-md bg-wearecrewRed text-white"
                >
                  Delete Profile
                </span>
                <small className="text-wearecrewRed mt-1">
                  *This will delete your profile permanently.
                </small>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full flex gap-x-4 justify-center mb-8">
          <Link href="/terms-and-conditions">
            <small className="cursor-pointer">Terms & Conditions</small>
          </Link>
          <Link href="/privacy-policy">
            <small className="cursor-pointer">Privacy Policy</small>
          </Link>
        </div>
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
          {!paid && (
            <div className="w-full flex flex-col items-center bg-wearecrewOrange py-12 shadow-md text-center text-white rounded-md">
              <p className="text-3xl mb-4">Your profile isn&apos;t live yet</p>
              <div className="flex gap-x-4 items-center justify-center">
                <Link href="/pricing" className="text-white underline mt-4">
                  <p className="p-4 min-h-[40px] bg-white w-fit text-wearecrewBlue rounded-md shadow-md cursor-pointer">
                    Go live now
                  </p>
                </Link>
                <button onClick={() => setShowProfileSaved(false)} className="">
                  <p className="p-4 min-h-[40px] bg-white w-fit  rounded-md shadow-md cursor-pointer text-wearecrewDarkestGrey">
                    I&apos;ll go live later
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Account;
