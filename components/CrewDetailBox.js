import { React, useState, useEffect, useRef } from "react";
import CrewDetailModal from "./CrewDetailModal";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { supabase } from "../utils/supabaseClient";
import Image from "next/image";
const CrewDetailBox = (crew) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // console.log("CREW DETAIL PG- ", crew);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    if (router.asPath.includes("user=" && "&showModal=true")) {
      // console.log("CREW SLUG -" + slugify(crew.name) + "_" + crew.id)
      // console.log("ROUTER USERNAME-" + router.query.user);
      // console.log("ROUTER-", router);

      if (router.query.user === slugify(crew?.name) + "_" + crew?.id) {
        setShowModal(true);
      }
    }
  }, [router]);

  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(crew?.imgURL);

  const {
    data: { publicUrl: publicCVUrl },
  } = supabase.storage.from("cvs").getPublicUrl(crew?.cvURL);

  // console.log("Data- ", data);
  // console.log("CREW DETAIL CV- ", crew.cvURL);
  // console.log("CV-", publicCVUrl);

  const stylingLarge = {
    backgroundImage: `${
      publicUrl.includes("public/images/0.")
        ? `url(${publicUrl} )`
        : `url(/images/noProfileImg.png)`
    } `,
    minWidth: "100px",
    minHeight: "100px",
    backgroundSize: `${
      publicUrl.includes("public/images/0.") ? "cover" : "contain"
    }`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const stylingSmall = {
    backgroundImage: `${
      publicUrl.includes("public/images/0.")
        ? `url(${publicUrl} )`
        : `url(/images/noProfileImg.png)`
    } `,
    minWidth: "60px",
    minHeight: "60px",
    backgroundSize: `${
      publicUrl.includes("public/images/0.") ? "cover" : "contain"
    }`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyPhone = () => {
    copy(crew.phone);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText("Phone Copied!");
  };

  const copyEmail = () => {
    copy(crew.email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText("Email Copied!");
  };

  const copyWebsite = () => {
    copy(crew.website);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText("Website Copied!");
  };

  const copyIMDB = () => {
    copy(crew.imdb);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText("IMDB Copied!");
  };

  const shareProfileHandler = () => {
    copy(`${window.location.origin}` + router.asPath);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText("Profile Copied!");
  };

  const website = crew?.website?.split("://").pop(0);

  const creditsExist = crew?.credits?.some((credit) => credit?.jobTitle);

  const sortedLocations = [...crew?.willWorkIn].sort((a, b) =>
    a > b ? 1 : -1
  );

  const imgRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    // console.log("Loaded...");
    setLoading(false);
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      onLoad();
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    // console.log("CLOSE MODAL-", router);
  };

  return (
    <div>
      <div
        className={`fixed top-0 z-4000 left-1/2 transform -translate-x-1/2 bg-wearecrewGreen p-4 rounded-md shadow-md transition flex justify-center min-w-[100px]
        ${isCopied ? "translate-y-0" : "-translate-y-24"}`}
      >
        <strong className="text-lg text-white min-w-max">{copiedText}</strong>
      </div>
      <div className="border-b-2 border-wearecrewBlue rounded bg-white shadow-md h-full">
        {/*Larger screen layout*/}
        <div className="hidden md:flex p-4 items-center gap-x-4 justify-between">
          {/*IMAGE*/}
          <div
            onClick={() => setShowModal(true)}
            style={stylingLarge}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md cursor-pointer hoverScale"
          >
            <div
              style={{ display: loading ? "block" : "none" }}
              className="bg-white"
            >
              <img
                className="object-cover w-full h-full bg-white  animate-pulse w-[102px] h-[102px] flex items-center justify-center -mt-1"
                src="/images/noProfileImg.png"
              />
            </div>

            {/* When image loads it allows the bg img above to be shown but it itself is hidden */}
            <img
              ref={imgRef}
              className="hidden"
              src={`${
                publicUrl.includes("public/images/0.")
                  ? `${publicUrl}`
                  : `url(/images/noProfileImg.png)`
              }`}
              onLoad={onLoad}
            />
          </div>
          {/* //END OF IMAGE*/}

          <div className="w-[210px] flex flex-col">
            {/*NAME*/}
            <h2
              onClick={() => setShowModal(true)}
              className="cursor-pointer hover:text-wearecrewBlue transition text-[20px]"
            >
              <strong className="break-all">{crew?.name}</strong>
              <hr className="w-11/12" />
            </h2>
            {/* //END OF NAME */}

            {/*TITLE*/}
            {/* <h2>{crew?.title}</h2> */}
            {/* // END OF TITLE*/}

            {/*ROLES*/}
            {crew?.roles.map((role, id) => (
              <p className="my-1 " key={role + id}>
                {role}
              </p>
            ))}

            {crew.ageRange !== null &&
            crew.height !== null &&
            crew.hair !== null &&
            crew.eyes !== null &&
            crew.body !== null &&
            crew.dialects !== null &&
            crew.ageRange !== "" &&
            crew.height !== "" &&
            crew.hair !== "" &&
            crew.eyes !== "" &&
            crew.body !== "" &&
            crew.dialects !== "" ? (
              <hr className="w-11/12 mb-1" />
            ) : null}

            {/* // END OF ROLES*/}

            {/*ACTOR CREDS*/}
            <div className="flex flex-col">
              {crew.ageRange && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Age Range:
                  </span>{" "}
                  {crew?.ageRange}
                </small>
              )}
              {crew.height && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Height:
                  </span>{" "}
                  {crew?.height}
                </small>
              )}
              {crew.hair && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Hair Colour:
                  </span>{" "}
                  {crew?.hair}
                </small>
              )}
              {crew.eyes && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Eye Colour:
                  </span>{" "}
                  {crew?.eyes}
                </small>
              )}
              {crew.body && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Body Type:
                  </span>{" "}
                  {crew?.body}
                </small>
              )}
              {crew.dialects && (
                <small>
                  <span className="text-wearecrewBlue font-bold mr-1">
                    Dialects:
                  </span>{" "}
                  {crew?.dialects}
                </small>
              )}
            </div>
            {/* // END OF ACTOR CREDS*/}

            {/*QUALIS*/}
            {/* {crew?.qualis && (
              <div className="flex items-center">
                <small>{crew?.qualis}</small>
              </div>
            )} */}
            {/* // END OF QUALIS*/}

            {/*STATUS*/}
            <div className="mt-4 flex flex-col">
              <strong
                className={`${
                  crew?.status === "Available"
                    ? "text-wearecrewGreen"
                    : crew.status === "Not Available"
                    ? "text-wearecrewRed"
                    : "text-wearecrewOrange"
                }`}
              >
                {crew?.status}
              </strong>
              {crew?.status !== "Available" &&
                crew?.willBeAvailOn !== "" &&
                crew?.willBeAvailOn !== null && (
                  <small className="text-wearecrewRed">
                    Available from:{" "}
                    {crew?.willBeAvailOn.charAt(0).toUpperCase() +
                      crew?.willBeAvailOn.slice(1)}
                  </small>
                )}
            </div>
            {/* //END OF STATUS */}
          </div>

          {/*CAN WORK IN*/}
          <div className="flex flex-col mr-4 justify-start items-start flex-1 min-h-[161px]">
            {crew?.willWorkIn?.length > 0 && (
              <p>
                <strong>Can work in</strong>
              </p>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 mt-2">
              {sortedLocations.length === 21 ? (
                <div className="mt-1 min-w-max">Anywhere</div>
              ) : (
                sortedLocations.map((willWorkIn, id) => (
                  <div key={willWorkIn + id} className="mt-1 min-w-min">
                    {willWorkIn}
                  </div>
                ))
              )}
            </div>
          </div>
          {/* //END OF CAN WORK IN*/}

          <div className="flex flex-col gap-y-2">
            {/*PHONE*/}
            {crew?.phone && (
              <a
                href={`tel:${crew?.phone}`}
                className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white hover:brightness-110 transition"
              >
                <h1 className="text-3xl">Call</h1>
              </a>
            )}
            {/* //END OF PHONE*/}

            {/*EMAIL*/}
            <a
              href={`mailto:${crew?.email}?subject=I found your profile on Get Crew!`}
              className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white hover:brightness-110 transition"
            >
              <h1 className="text-3xl">Email</h1>
            </a>
            {/* //END OF EMAIL*/}

            {/*WEBSITE*/}
            {website && (
              <a
                href={`http://${website}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white hover:brightness-110 transition"
              >
                <h1 className="text-3xl">Website</h1>
              </a>
            )}
            {/* //END OF WEBSITE*/}

            {/*PROFILE*/}
            <div
              onClick={() => {
                setShowModal(true);
                // console.log("OPEN MODAL-", router);
              }}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white hover:brightness-110 transition "
            >
              <h1 className="text-3xl text-center">Profile</h1>
            </div>
            {/* // END OF PROFILE*/}
          </div>
        </div>

        {/*Smaller screen layout*/}
        <div className="flex flex-col md:hidden p-2 gap-x-2 gap-y-8">
          <div className="w-full flex flex-col justify-between gap-x-2 gap-y-4">
            <div className="flex justify-between items-start">
              {/*MOBILE IMAGE*/}
              <div
                style={stylingSmall}
                className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md cursor-pointer hoverScale"
              >
                <div
                  style={{ display: loading ? "block" : "none" }}
                  className="bg-white"
                >
                  <img
                    className="object-cover w-full h-full bg-white  animate-pulse w-[102px] h-[102px] flex items-center justify-center -mt-1"
                    src="/images/noProfileImg.png"
                  />
                </div>

                {/* When image loads it allows the bg img above to be shown but it itself is hidden */}
                <img
                  ref={imgRef}
                  className="hidden"
                  src={`${
                    publicUrl.includes("public/images/0.")
                      ? `${publicUrl}`
                      : `url(/images/noProfileImg.png)`
                  }`}
                  onLoad={onLoad}
                />
              </div>
              {/* //END OF MOBILE IMAGE*/}

              <div className="w-[210px] text-right">
                <div className="flex flex-col">
                  {/* MOBILE NAME*/}
                  <strong className=" text-[20px] break-all">
                    {crew?.name}
                  </strong>
                  <hr />
                  {/* //END OF MOBILE NAME*/}

                  {/* MOBILE TITLE*/}
                  {crew?.roles.map((role, id) => (
                    <p className="mt-1" key={role + id}>
                      {role}
                    </p>
                  ))}
                  {/* //END OF MOBILE TITLE*/}

                  {/* MOBILE STATUS*/}
                  <div className="flex flex-col mt-4">
                    <strong
                      className={`${
                        crew?.status === "Available"
                          ? "text-wearecrewGreen"
                          : crew.status === "Not Available"
                          ? "text-wearecrewRed"
                          : "text-wearecrewOrange"
                      }`}
                    >
                      {crew?.status}
                    </strong>
                    {crew?.status !== "Available" &&
                      crew?.willBeAvailOn !== "" &&
                      crew?.willBeAvailOn !== null && (
                        <small className="text-wearecrewRed">
                          Available from:{" "}
                          {crew?.willBeAvailOn.charAt(0).toUpperCase() +
                            crew?.willBeAvailOn.slice(1)}
                        </small>
                      )}
                  </div>
                  {/* // END OF MOBILE STATUS */}
                </div>
              </div>
            </div>

            {/* MOBILE CAN WORK IN*/}
            <div className="w-full flex gap-x-4 justify-center mt-4">
              <div className="flex flex-col items-center">
                {crew?.willWorkIn?.length > 0 && (
                  <strong className="text-sm">Can work in</strong>
                )}
                <div className="flex flex-wrap gap-x-4 justify-center">
                  {sortedLocations.map((willWorkIn) => (
                    <div key={willWorkIn} className="mt-1">
                      <p className="text-base">{willWorkIn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* //END OF MOBILE CAN WORK IN*/}
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between gap-x-2">
              {/* MOBILE PHONE*/}
              {crew?.phone && (
                <a
                  href={`tel:${crew.phone}`}
                  className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1 hover:brightness-110 transition"
                >
                  <h1 className="text-3xl">Call</h1>
                </a>
              )}
              {/* //END OF MOBILE PHONE*/}

              {/* MOBILE EMAIL*/}
              <a
                href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1 hover:brightness-110 transition"
              >
                <h1 className="text-3xl">Email</h1>
              </a>
              {/* //END OF MOBILE EMAIL*/}

              {/* MOBILE WEBSITE*/}
              {website && (
                <a
                  href={`http://${website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1 hover:brightness-110 transition"
                >
                  <h1 className="text-3xl">Website</h1>
                </a>
              )}
              {/* //END OF MOBILE WEBSITE*/}
            </div>

            {/* MOBILE PROFILE*/}
            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-full text-white hover:brightness-110 transition"
            >
              <h1 className="text-3xl text-center">Profile</h1>
            </div>
            {/* //END OF MOBILE PROFILE*/}
          </div>
        </div>

        {crew?.credits[0]?.jobTitle && (
          <div className="w-full mt-2 md:mt-0 flex flex-col items-center justify-center bg-wearecrewDarkBlue/20 p-2">
            <strong>Credits Include</strong>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-4 items-center justify-center">
              {crew?.credits.slice(0, 3).map(
                (credit, i) =>
                  credit.jobTitle !== "" && (
                    <p key={i} className="listDividerLines">
                      {credit.jobTitle}
                    </p>
                  )
              )}
              {crew?.credits.length > 3 && (
                <p
                  onClick={() => setShowModal(true)}
                  className="underline text-wearecrewBlue cursor-pointer transition hover:opacity-70"
                >
                  View All
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <CrewDetailModal
        show={showModal}
        id={crew?.id}
        name={crew?.name}
        onClose={closeModal}
      >
        <div className="flex gap-x-4">
          <div className="w-full flex flex-1 flex-col gap-x-4 gap-y-4 items-start">
            <div className="w-full flex flex-col md:flex-row justify-between">
              <div className="flex gap-x-4 items-center mb-4">
                <div
                  style={stylingLarge}
                  className="rounded-full overflow-hidden w-[100px] h-[100px] flex flex-col items-center justify-center shadow-md mb-2"
                ></div>
                <div className="">
                  <div className="">
                    <h1 className="text-3xl border-b-2 pb-2 mb-2 max-w-max mr-10 border-wearecrewBlue break-all">
                      {crew?.name}
                    </h1>
                  </div>

                  <div className="flex flex-col md:flex-row gap-x-4 flex-wrap">
                    {crew?.roles.map((role, id) => (
                      <p
                        className="text-md md:text-lg listDividerLines break-all"
                        key={role + id}
                      >
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-[240px] md:ml-2 flex flex-col items-center md:items-end md:pt-10 md:mb-4">
                <strong
                  className={`md:mt-4 text-3xl  min-w-max ${
                    crew?.status === "Available"
                      ? "text-wearecrewGreen"
                      : crew.status === "Not Available"
                      ? "text-wearecrewRed"
                      : "text-wearecrewOrange"
                  }`}
                >
                  {crew?.status}
                </strong>
                {crew?.status !== "Available" &&
                  crew?.willBeAvailOn !== "" &&
                  crew?.willBeAvailOn !== null && (
                    <small className="text-right text-wearecrewRed">
                      <strong>Available from:</strong> {crew?.willBeAvailOn}
                    </small>
                  )}
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-x-4 gap-y-4">
              <div className="flex flex-1 flex-col gap-y-8 pt-4 md:py-0">
                {crew?.phone && (
                  <div className="flex md:max-w-max flex-wrap justify-between items-center gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <span className="material-icons text-wearecrewBlue">
                        phone_iphone
                      </span>
                      <a
                        href={`tel:${crew?.phone}`}
                        className="underline break-all"
                      >
                        {crew?.phone}
                      </a>
                    </div>
                    <div className="flex flex-1">
                      <button
                        onClick={() => copyPhone()}
                        className="text-wearecrewDarkGrey hover:text-wearecrewBlue transition md:w-max text-right flex flex-1 justify-end ml-10 md:ml-0"
                      >
                        <cite className="min-w-max">Copy Phone</cite>
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex md:max-w-max flex-wrap justify-between items-center gap-x-4">
                  <div className="flex items-center gap-x-4">
                    <span className="material-icons text-wearecrewBlue">
                      mail
                    </span>
                    <a
                      href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                      className="underline break-all"
                    >
                      {crew?.email}
                    </a>
                  </div>
                  <div className="flex flex-1">
                    <button
                      onClick={() => copyEmail()}
                      className="text-wearecrewDarkGrey hover:text-wearecrewBlue transition md:w-max text-right flex flex-1 justify-end ml-10 md:ml-0"
                    >
                      <cite className="min-w-max">Copy Email</cite>
                    </button>
                  </div>
                </div>

                {website && (
                  <div className="flex md:max-w-max flex-wrap justify-between items-center gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <span className="material-icons text-wearecrewBlue">
                        public
                      </span>
                      <a
                        href={`http://${website}`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline break-all"
                      >
                        {website}
                      </a>
                    </div>
                    <div className="flex flex-1">
                      <button
                        onClick={() => copyWebsite()}
                        className="text-wearecrewDarkGrey hover:text-wearecrewBlue transition md:w-max text-right flex flex-1 justify-end ml-10 md:ml-0"
                      >
                        <cite className="min-w-max">Copy Website</cite>
                      </button>
                    </div>
                  </div>
                )}
                {crew?.imdb && (
                  <div className="flex md:max-w-max flex-wrap justify-between items-center gap-x-4">
                    <div className="flex items-center gap-x-4">
                      <span className="material-icons text-wearecrewBlue">
                        public
                      </span>
                      <a
                        href={`http://${crew?.imdb}`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline break-all"
                      >
                        {crew?.imdb}
                      </a>
                    </div>
                    <div className="flex flex-1">
                      <button
                        onClick={() => copyIMDB()}
                        className="text-wearecrewDarkGrey hover:text-wearecrewBlue transition md:w-max text-right flex flex-1 justify-end ml-10 md:ml-0"
                      >
                        <cite className="min-w-max">Copy IMDB</cite>
                      </button>
                    </div>
                  </div>
                )}

                {crew?.willWorkIn?.length > 0 && (
                  <div className="flex items-start gap-x-4">
                    <span className="material-icons text-wearecrewBlue">
                      where_to_vote
                    </span>
                    <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                      {sortedLocations.map((willWorkIn, id) => (
                        <p
                          key={willWorkIn + id}
                          className="min-w-max listDividerLines"
                        >
                          {willWorkIn}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {creditsExist && (
                  <div className="flex items-start gap-x-4">
                    <span className="material-icons text-wearecrewBlue">
                      military_tech
                    </span>
                    <div>
                      {crew?.credits?.map(
                        (credits, id) =>
                          credits.jobTitle !== "" && (
                            <div
                              key={credits + id}
                              className="flex items-center mb-4"
                            >
                              <div className="flex justify-center">
                                <p className="text-base">
                                  <cite>{credits?.jobTitle}</cite>
                                </p>
                                <span className="text-wearecrewBlue">
                                    |  
                                </span>
                                <p className="text-base">{credits?.yourRole}</p>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )}

                {crew?.qualis ? (
                  <div className="flex items-center gap-x-4 -mt-4">
                    <span className="material-icons text-wearecrewBlue">
                      school
                    </span>

                    <div>
                      <p className="">{crew?.qualis}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {crew?.bio && (
                  <div
                    className={`flex items-center gap-x-4 ${
                      crew?.qualis ? "" : "-mt-4"
                    }`}
                  >
                    <>
                      <span className="material-icons text-wearecrewBlue">
                        emoji_people
                      </span>
                      <p>{crew?.bio}</p>
                    </>
                  </div>
                )}
              </div>
              <div className="w-full flex justify-center md:w-3/12 ">
                <div className="w-full md:w-full flex flex-col gap-y-4">
                  {crew?.phone && (
                    <a
                      href={`tel:${crew?.phone}`}
                      className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center w-full  text-white hover:brightness-110 transition"
                    >
                      <h1 className="text-3xl">Call</h1>
                    </a>
                  )}
                  <a
                    href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                    className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center w-full  text-white hover:brightness-110 transition"
                  >
                    <h1 className="text-3xl">Email</h1>
                  </a>

                  {crew?.cvURL && (
                    <a
                      download
                      href={publicCVUrl}
                      className="border-2 bg-white text-center border-wearecrewBlue p-2 rounded shadow-md cursor-pointer hover:brightness-90 transition"
                    >
                      <h1 className="text-lg">Download Personal CV</h1>
                    </a>
                  )}

                  <button
                    onClick={() => shareProfileHandler()}
                    className="border-2 bg-white flex gap-x-2 justify-center border-wearecrewBlue p-2 rounded shadow-md hover:brightness-90 transition"
                  >
                    <span className="material-icons">ios_share</span>
                    <h1 className="text-lg">Share Profile</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CrewDetailModal>
    </div>
  );
};

export default CrewDetailBox;
