import { React, useState, useEffect } from "react";
import CrewDetailModal from "./CrewDetailModal";
import { useRouter } from "next/router";
import copy from "copy-to-clipboard";
import { supabase } from "../utils/supabaseClient";

const CrewDetailBox = (crew) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  console.log("CREW DETAIL PG- ", crew);

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
    data: { publicUrl: publicCVUrl }
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

  const sortedLocations = [...crew?.willWorkIn]
  .sort((a, b) => (a > b ? 1 : -1))


  return (

    <div>

      <div
        className={`fixed top-0 z-4000 left-1/2 transform -translate-x-1/2 bg-wearecrewGreen p-4 rounded-md shadow-md transition flex justify-center min-w-[100px]
        ${isCopied ? "translate-y-0" : "-translate-y-24"}`}
      >
        <strong className="text-lg text-white min-w-max">{copiedText}</strong>
      </div>
      <div className="border-b border-wearecrewBlue rounded shadow-md bg-white h-full">
        {/*Larger screen layout*/}
        <div className="hidden md:flex p-4 items-center gap-x-4 justify-between">
          {/*IMAGE*/}
          <div
          onClick={() => setShowModal(true)} 
            style={stylingLarge}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md cursor-pointer"
          ></div>
          {/* //END OF IMAGE*/}

          <div className="w-[210px] flex flex-col">
            {/*NAME*/}
            <h2 onClick={() => setShowModal(true)} className="cursor-pointer">
              <strong>{crew?.name}</strong>
            </h2>
            {/* //END OF NAME */}

            {/*TITLE*/}
            <h2>{crew?.title}</h2>
            {/* // END OF TITLE*/}

            {/*QUALIS*/}
            {crew?.qualis && (
              <div className="flex items-center">
                <small>{crew?.qualis}</small>
                <small>{crew?.imdb}</small>
              </div>
            )}
            {/* // END OF QUALIS*/}

            {/*STATUS*/}
            <div
              className="mt-4 flex flex-col"
            >
              <strong className={`${
                crew?.status === "Available"
                  ? "text-wearecrewGreen"
                  : crew.status === "Not Available"
                  ? "text-wearecrewRed"
                  : "text-wearecrewOrange"
              }`}>{crew?.status}</strong>
              {crew?.status !== "Available" && crew?.willBeAvailOn !== "" && crew?.willBeAvailOn !== null && (
                  <small className="text-wearecrewRed">Available from: {crew?.willBeAvailOn}</small>
                )}
            </div>
            {/* //END OF STATUS */}
          </div>

          {/*CAN WORK IN*/}
          <div className="flex flex-col mr-4 justify-start items-start w-[332px] min-h-[161px]">
            {crew?.willWorkIn?.length > 0 && (
              <small>
                <strong>Can work in</strong>
              </small>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 mt-2">
              {sortedLocations.map((willWorkIn, id) => (
                <div key={willWorkIn + id} className="mt-1 min-w-min">
                  {willWorkIn}
                </div>
              ))}
            </div>
          </div>
          {/* //END OF CAN WORK IN*/}

          <div className="flex flex-col gap-y-2">
            {/*PHONE*/}
            {crew?.phone && (
              <a
                href={`tel:${crew?.phone}`}
                className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
              >
                <h1 className="text-3xl">Call</h1>
              </a>
            )}
            {/* //END OF PHONE*/}

            {/*EMAIL*/}
            <a
              href={`mailto:${crew?.email}?subject=I found your profile on Get Crew!`}
              className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
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
                className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
              >
                <h1 className="text-3xl">Website</h1>
              </a>
            )}
            {/* //END OF WEBSITE*/}

            {/*PROFILE*/}
            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
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
                className="rounded-full overflow-hidden w-[80px] h-[80px] shadow-md"
              ></div>
              {/* //END OF MOBILE IMAGE*/}

              <div className="w-[210px] text-right">
                <div className="flex flex-col">
                  {/* MOBILE STATUS*/}
                  <div
              className="flex flex-col"
            >
              <strong className={`${
                crew?.status === "Available"
                  ? "text-wearecrewGreen"
                  : crew.status === "Not Available"
                  ? "text-wearecrewRed"
                  : "text-wearecrewOrange"
              }`}>{crew?.status}</strong>
              {crew?.status !== "Available" && crew?.willBeAvailOn !== "" && crew?.willBeAvailOn !== null && (
                  <small className="text-wearecrewRed">Available from: {crew?.willBeAvailOn}</small>
                )}
            </div>
                  {/* // END OF MOBILE STATUS */}

                  {/* MOBILE NAME*/}
                  <strong>{crew?.name}</strong>
                  {/* //END OF MOBILE NAME*/}
                </div>

                {/* MOBILE TITLE*/}
                <h2>{crew?.title}</h2>
                {/* //END OF MOBILE TITLE*/}

                {/* MOBILE QUALIS*/}
                <div className="mt-2">
                  <small>{crew?.qualis}</small>
                </div>
                {/* //END OF MOBILE QUALIS*/}
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
                  className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1"
                >
                  <h1 className="text-3xl">Call</h1>
                </a>
              )}
              {/* //END OF MOBILE PHONE*/}

              {/* MOBILE EMAIL*/}
              <a
                href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1"
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
                  className="rounded-md bg-wearecrewTeal p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white flex-1"
                >
                  <h1 className="text-3xl">Website</h1>
                </a>
              )}
              {/* //END OF MOBILE WEBSITE*/}
            </div>

            {/* MOBILE PROFILE*/}
            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-full text-white"
            >
              <h1 className="text-3xl text-center">Profile</h1>
            </div>
            {/* //END OF MOBILE PROFILE*/}
          </div>
        </div>
      </div>

      <CrewDetailModal
        show={showModal}
        id={crew?.id}
        name={crew?.name}
        onClose={() => setShowModal(false)}
      >
        <div className="flex gap-x-4">
          <div className="w-full flex flex-1 flex-col gap-x-4 gap-y-4 items-start mb-4">
            <div className="w-full flex justify-between">
              <div>
                <div
                  style={stylingLarge}
                  className="rounded-full overflow-hidden w-[100px] h-[100px] flex flex-col items-center justify-center shadow-md mb-2"
                ></div>
                <div className="mb-4">
                  <h1 className="text-3xl">{crew?.name}</h1>
                  {crew?.title && (
                    <h1 className="text-lg min-w-max">{crew?.title}</h1>
                  )}
                </div>
              </div>
              <div className="w-[240px] flex flex-col items-end pt-10 mb-4">
                <strong
                  className={`mt-4 text-3xl  min-w-max ${
                    crew?.status === "Available"
                      ? "text-wearecrewGreen"
                      : crew.status === "Not Available"
                      ? "text-wearecrewRed"
                      : "text-wearecrewOrange"
                  }`}
                >
                  {crew?.status}
                </strong>
                {crew?.status !== "Available" && crew?.willBeAvailOn !== "" && crew?.willBeAvailOn !== null && (
                  <small className="text-right text-wearecrewRed"><strong>Available from:</strong> {crew?.willBeAvailOn}</small>
                )}
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-x-4 gap-y-4">
              <div className="flex flex-1 flex-col gap-y-6 py-4 md:py-0">
                {/* {crew?.canStepUp && (
                  <div className="flex items-center gap-x-4">
                    <span className="material-icons">move_up</span>
                    <p>Able to step up a grade</p>
                  </div>
                )} */}
                {crew?.phone && (
                  <div className="flex flex-wrap items-center gap-x-4">
                    <span className="material-icons">phone_iphone</span>
                    <a href={`tel:${crew?.phone}`} className="underline">
                      {crew?.phone}
                    </a>
                    <button
                      onClick={() => copyPhone()}
                      className="text-wearecrewDarkGrey md:w-max text-left ml-10 md:ml-0"
                    >
                      <cite>Copy Phone</cite>
                    </button>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-x-4">
                  <span className="material-icons">mail</span>
                  <a
                    href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                    className="underline"
                  >
                    {crew?.email}
                  </a>
                  <button
                    onClick={() => copyEmail()}
                    className="text-wearecrewDarkGrey md:w-max text-left ml-10 md:ml-0"
                  >
                    <cite>Copy Email</cite>
                  </button>
                </div>

                {website && (
                  <div className="flex flex-wrap items-center gap-x-4">
                    <span className="material-icons">public</span>
                    <a
                      href={`http://${website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      {website}
                    </a>
                    <button
                      onClick={() => copyWebsite()}
                      className="text-wearecrewDarkGrey md:w-max text-left ml-10 md:ml-0"
                    >
                      <cite>Copy Website</cite>
                    </button>
                  </div>
                )}
                {crew?.imdb && (
                  <div className="flex flex-wrap items-center gap-x-4">
                    <span className="material-icons">public</span>
                    <a
                      href={`http://${crew?.imdb}`}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      {crew?.imdb}
                    </a>
                    <button
                      onClick={() => copyIMDB()}
                      className="text-wearecrewDarkGrey md:w-max text-left ml-10 md:ml-0"
                    >
                      <cite>Copy IMDB</cite>
                    </button>
                  </div>
                )}

                {crew?.willWorkIn?.length > 0 && (
                  <div className="flex items-start gap-x-4">
                    <span className="material-icons">where_to_vote</span>
                    <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                      {sortedLocations.map((willWorkIn, id) => (
                        <div key={willWorkIn + id}>
                          <p className="min-w-max">{willWorkIn}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {creditsExist && (
                  <div className="flex items-start gap-x-4">
                    <span className="material-icons">military_tech</span>
                    <div>
                      {crew?.credits?.map((credits, id) => (
                        <div
                          key={credits + id}
                          className="flex items-center mb-4"
                        >
                          <div className="flex justify-center">
                            <p className="text-base">
                              <cite>{credits?.jobTitle}</cite>
                            </p>
                            <span className="text-wearecrewBlue">  |  </span>
                            <p className="text-base">{credits?.yourRole}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {crew?.qualis ? (
                  <div className="flex items-center gap-x-4 -mt-4">
                    <span className="material-icons">school</span>

                    <div>
                      <p className="">{crew?.qualis}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`flex items-center gap-x-4 ${
                    crew?.qualis ? "" : "-mt-4"
                  }`}
                >
                  {crew?.bio && (
                    <>
                      <span className="material-icons">emoji_people</span>
                      <p>{crew?.bio}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center md:w-3/12 ">
                <div className="w-full md:w-full flex flex-col gap-y-4">
                  { crew?.phone && (
                  <a
                    href={`tel:${crew?.phone}`}
                    className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Call</h1>
                  </a>
                  )}
                  <a
                    href={`mailto:${crew?.email}?subject=I found your profile on Get Crew.`}
                    className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Email</h1>
                  </a>
                  
                  {crew?.cvURL && (
                    <a
                      download
                      href={publicCVUrl}
                      className="border-2 text-center border-wearecrewBlue p-2 rounded shadow-md cursor-pointer"
                    >
                      <h1 className="text-lg">Download Personal CV</h1>
                    </a>
                  )}

                  <button
                    onClick={() => shareProfileHandler()}
                    className="border-2 flex gap-x-2 justify-center border-wearecrewBlue p-2 rounded shadow-md"
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
    )


};

export default CrewDetailBox;
