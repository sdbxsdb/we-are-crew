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
  const [roles, setRoles] = useState([]);
  const [canStepUp, setCanStepUp] = useState(false);
  const [qualis, setQualis] = useState("");
  const [imdb, setImdb] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [canWorkIn, setCanWorkIn] = useState([]);
  const [credits, setCredits] = useState([{}]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [paid, setPaid] = useState(undefined);
  const [dateOfPayment, setdateOfPayment] = useState("");
  const [ageRange, setAgeRange] = useState("")
  const [height, setHeight] = useState("")
  const [hair, setHair] = useState("")
  const [eyes, setEyes] = useState("")
  const [body, setBody] = useState("")
  const [dialects, setDialects] = useState("")

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
          `username, email, website, imgURL, status, willBeAvailOn, dept, roles, canStepUp, qualis, imdb, phone, bio, canWorkIn, credits, cvURL, updated_at, paid, dateOfPayment, id, ageRange, height, hair, eyes, body, dialects`
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
        setCanStepUp(data.canStepUp);
        setQualis(data.qualis);
        setImdb(data.imdb);
        setPhone(data.phone);
        setBio(data.bio);
        setCanWorkIn(data.canWorkIn === null ? [] : data.canWorkIn);
        setCredits(data.credits === null ? [{}] : data.credits);
        setRoles(data.roles === null ? [] : data.roles);
        setCvURL(data.cvURL);
        setUpdatedAt(data.updated_at);
        setPaid(data.paid);
        setdateOfPayment(data.dateOfPayment);
        setAgeRange(data.ageRange);
        setHair(data.height);
        setHair(data.hair);
        setEyes(data.eyes);
        setBody(data.body);
        setDialects(data.dialects)
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
    roles,
    canStepUp,
    qualis,
    imdb,
    phone,
    bio,
    canWorkIn,
    credits,
    cvURL,
    paid,
    ageRange,
    height,
    hair,
    eyes,
    body,
    dialects,
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
        roles,
        canStepUp,
        qualis,
        imdb,
        phone,
        bio,
        canWorkIn,
        credits,
        cvURL,
        ageRange,
        height,
        hair,
        eyes,
        body,
        dialects,

        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      setShowProfileSaved(true);
      setTimeout(() => {
        window.location.reload(false);
      }, 3001);
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

  const onUpdateProfileHandler = () => {
    // console.log("USERNAME-", username, "DEPT-", dept, "TITLE-", title);
    setProfileChanged(true);
  };

  const [isCheckAllLocations, setIsCheckAllLocations] = useState(false);
  const [isCheckAllRoles, setIsCheckAllRoles] = useState(false);

  //CAN WORK IN//
  const ListCheckbox = ({ place }) => {
    const [checked, setChecked] = useState(canWorkIn?.includes(place));

    useEffect(() => {
      // console.log("roles-", roles);
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
          checked={checked | isCheckAllLocations}
        />
        <label className="min-w-max" htmlFor={place}>
          {place}
        </label>
      </li>
    );
  };

  const ListRolesCheckbox = ({ role }) => {
    const [checked, setChecked] = useState(roles?.includes(role));

    useEffect(() => {
      // console.log("roles-", roles);
      if (checked) {
        roles?.indexOf(role) === -1 ? setRoles([...roles, role]) : null;
      } else {
        roles?.indexOf(role) > -1
          ? setRoles(roles.filter((item) => item !== role))
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
          id={role}
          onChange={() => handleChange()}
          value={role}
          checked={checked | isCheckAllRoles}
        />
        <label className="min-w-max" htmlFor={role}>
          {role}
        </label>
      </li>
    );
  };

  const handleSelectAllLocations = () => {
    setIsCheckAllLocations(!isCheckAllLocations);
    if (!isCheckAllLocations) {
      setCanWorkIn([
        "London",
        "Liverpool",
        "Newcastle upon Tyne",
        "Birmingham",
        "Exeter",
        "Norwich",
        "Glasgow",
        "Edinburgh",
        "Aberdeen",
        "Belfast",
        "Derry / L'Derry",
        "Enniskillen",
        "Dublin",
        "Galway",
        "Cork",
        "Donegal",
        "Cardiff",
        "LiverPool",
        "Bristol",
        "Isle of Man",
        "Outside the UK & Ireland",
      ]);
    }
    if (isCheckAllLocations) {
      setCanWorkIn([]);
    }
  };

  const ListDept = (e) => {
    console.log(dept);
    console.log(roles);
    return (
      <select
        name="dept"
        onChange={(e) => {
          setDept(e.target.value);
          setRoles([]);
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
      <>
        {selectedDept?.titles?.map((title, i) => (
          <ListRolesCheckbox key={i} role={title} />
        ))}
      </>
    );
  };

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(imgURL);

  const imgStyling = {
    backgroundImage: `${
      imgURL ? `url(${publicUrl} )` : `url(/images/noProfileImg.png)`
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
    }, 4000);
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
    setTimeout(() => {
      window.location.reload(false);
    }, 300);
    router.push("/profileDeleted");
  };

  return (
    <>
      {showFinsihProfileError && (
        <div className="bg-white/70 w-screen h-screen fixed z-2000 flex items-center justify-center top-0 left-0">
          <div className="p-4 rounded-md shadow-md bg-wearecrewOrange text-center w-full text-wearecrewLightGrey border-wearecrewOrange border-2 relative">
            <p>
              Make sure to fill in your Name, Department and Grade/Title before
              saving.
            </p>
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
                    className="p-4 bg-wearecrewGreen text-white shadow-md rounded-md hover:brightness-110 transition"
                    onClick={(e) =>
                      dept !== "" &&
                      dept !== null &&
                      dept !== "Choose Department" &&
                      username !== "" &&
                      username !== null &&
                      roles !== "" &&
                      roles !== null &&
                      roles.length > 0
                        ? updateProfile({
                            username,
                            website,
                            imgURL,
                            status,
                            willBeAvailOn,
                            dept,
                            roles,
                            canStepUp,
                            qualis,
                            imdb,
                            phone,
                            bio,
                            canWorkIn,
                            credits,
                            cvURL,
                            paid,
                            ageRange,
                            height,
                            hair,
                            eyes,
                            body,
                            dialects,

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
                <h1 className="text-3xl">
                  Your <span className="text-wearecrewBlue">Get Crew</span>{" "}
                  Profile
                </h1>
              </div>
              {/* STATUS */}
              <div className="w-full text-center mt-16">
                <p className="text-wearecrewBlue text-sm">Status</p>
                <div className="flex flex-col items-center justify-center mt-2">
                  <div className="radio_container h-full gap-x-8 md:rounded-full px-4 py-2 text-sm shadow-md sm:text-lg">
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
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="border border-wearecrewOrange p-4 flex flex-col md:flex-row gap-x-4 justify-start md:justify-between items-center rounded-md shadow-md w-full mb-2">
                          <h1 className="text-wearecrewOrange w-full text-center md:text-left text-2xl">
                            Your profile isn&apos;t currently live.
                          </h1>
                          <Link href="/pricing">
                            <button className="text-white hoverScale p-2 rounded-md cursor-pointer bg-wearecrewGreen hover:brightness-110 transition shadow-md min-w-max">
                              <a className="text-lg min-w-max">Go live now</a>
                            </button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="border border-wearecrewGreen p-4 flex flex-col md:flex-row gap-x-4 justify-center md:justify-between items-center rounded-md shadow-md w-full mb-2">
                          <h1 className="text-wearecrewGreen text-center md:text-left w-full text-2xl">
                            Your profile is live.
                            {/* since {dateOfPayment} */}
                          </h1>
                          <div className="flex flex-col items-center justify-center min-w-max">
                            <span>Live since:</span>
                            <span>{dateOfPayment}</span>
                          </div>
                        </div>
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
                  <li className="relative styledList w-full md:w-2/3">
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <span
                      title=""
                      className="tooltipDept text-wearecrewDarkGrey flex justify-end w-full -mt-8 left-0 z-50"
                    >
                      Can&apos;t find your department or title?
                    </span>
                  </li>
                  {/* //END OF DEPARTMENT */}
                  {/* GRADE/TITLE */}
                  {dept !== "Choose Department" && (
                    <div className="flex flex-col relative w-full -mt-[20px] mb-6 md:w-2/3">
                      <p className="text-sm text-wearecrewBlue">
                        Grade / Title
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-2 gap-x-4 mt-2">
                        <ListTitle />
                      </div>
                    </div>
                  )}
                  {/* //END OF GRADE/TITLE */}
                  { dept === "Acting or Presenting" && (
                  <>
                  {/* ACTORS ADDITONAL DETAILS */}
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="age"
                      type="text"
                      defaultValue={ageRange}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setAgeRange(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    <label htmlFor="age">
                      Playing Age Range
                    </label>
                  </li>
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="height"
                      type="text"
                      defaultValue={height}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setHeight(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    <label htmlFor="height">
                      Height
                    </label>
                  </li>
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="hair"
                      type="text"
                      defaultValue={hair}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setHair(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    <label htmlFor="hair">
                      Hair Colour
                    </label>
                  </li>
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="eyes"
                      type="text"
                      defaultValue={eyes}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setEyes(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    <label htmlFor="eyes">
                      Eye Colour
                    </label>
                  </li>
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="body"
                      type="text"
                      defaultValue={body}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <small className="text-wearecrewDarkGrey">
                      Small / Medium / Large / Built etc
                    </small>
                    <label htmlFor="body">
                      Body Type
                    </label>
                  </li>
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="dialects"
                      type="text"
                      defaultValue={dialects}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setDialects(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    <label htmlFor="dialects">
                      Dialect(s)
                    </label>
                  </li>
                  {/* END OF // ACTORS ADDITONAL DETAILS */}
                  </>
                  )}
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
                      Qualifications / Safety
                    </label>
                  </li>
                  {/* //END OF QUALIS */}
                  {/* IMDB */}
                  <li className="relative styledList w-full md:w-2/3">
                    <input
                      name="imdb"
                      type="text"
                      defaultValue={imdb}
                      className="border shadow-md w-full"
                      required
                      onChange={(e) => setImdb(e.target.value)}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label htmlFor="imdb">IMDB</label>
                  </li>
                  {/* //END OF IMDB */}
                  {/* CAN WORK IN */}
                  <div className="flex flex-col relative mb-4 w-full md:w-2/3">
                    <p className="text-sm text-wearecrewBlue">Can work in</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:gap-y-2 gap-x-4">
                      <li className="w-full">
                        <input
                          type="checkbox"
                          id="selectAll"
                          className="chb chb-3"
                        />
                        <label
                          htmlFor="selectAll"
                          className="min-w-max font-bold"
                          onClick={handleSelectAllLocations}
                        >
                          Select All
                        </label>
                      </li>
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
                      className="tooltipPhone text-wearecrewDarkGrey flex justify-end w-full  left-0 z-50"
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
                  <li className=" w-full md:w-2/3 flex flex-col items-center">
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
                          className="cursor-pointer mt-2 text-wearecrewRed"
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
                    className="text-3xl w-full rounded-md shadow-md p-4 text-white  bg-wearecrewGreen hover:brightness-110 transition"
                    onClick={(e) =>
                      dept !== "" &&
                      dept !== null &&
                      dept !== "Choose Department" &&
                      username !== "" &&
                      username !== null &&
                      roles !== "" &&
                      roles !== null &&
                      roles.length > 0
                        ? updateProfile({
                            username,
                            website,
                            imgURL,
                            status,
                            willBeAvailOn,
                            dept,
                            roles,
                            canStepUp,
                            qualis,
                            imdb,
                            phone,
                            bio,
                            canWorkIn,
                            credits,
                            cvURL,
                            paid,
                            ageRange,
                            height,
                            hair,
                            eyes,
                            body,
                            dialects,
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
            <div className=" w-full mt-8 flex flex-col items-center px-2">
              <h1 className="text-center text-2xl mb-2">Danger Zone</h1>
              <div className="bg-white/70 w-full border border-wearecrewRed px-12 py-6 flex justify-center flex-col items-center h-full shadow-md rounded-md ">
                <div className="bg-wearecrewRed cursor-pointer rounded-md shadow-md p-4 hover:brightness-110 transition">
                  <span
                    onClick={() => setShowDeleteProfileWarning(true)}
                    className=" text-white"
                  >
                    Delete Profile
                  </span>
                </div>
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
        </div>
      )}
    </>
  );
};

export default Account;
