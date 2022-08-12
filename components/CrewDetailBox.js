import { React, useState, useEffect } from "react";
import CrewDetailModal from "./CrewDetailModal";
import { useRouter } from "next/router";

const CrewDetailBox = (crew) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();


  useEffect(() => {
  
  if (router.asPath.includes("user=" && "&showModal=true")) {
    console.log("TEST" , router);
    if ( router.query.user === crew.name + "_" + crew.id) {
      setShowModal(true);
    }
  }}, [router.asPath, crew.id, crew.name]);


  const stylingLarge = {
    backgroundImage: `${
      crew?.image ? `url(${crew?.image} )` : `url(/images/logoNew2.png)`
    } `,
    minWidth: "100px",
    minHeight: "100px",
    backgroundSize: `${crew?.image ? "cover" : "contain"}`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const stylingSmall = {
    backgroundImage: `${
      crew?.image ? `url(${crew?.image} )` : `url(/images/logoNew2.png)`
    } `,
    minWidth: "60px",
    minHeight: "60px",
    backgroundSize: `${crew?.image ? "cover" : "contain"}`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [isCopied, setIsCopied] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const copyPhone = () => {
    navigator.clipboard.writeText(`${crew.phone}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText('Copied Phone!');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(`${crew.email}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText('Copied Email!');
  };


  const shareProfileHandler = () => {
    navigator.clipboard.writeText(`localhost:3000${router.asPath}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    setCopiedText('Copied Profile!');
  };

  return (
    <div>
      <div
        className={`fixed top-0 z-3000 left-1/2 transform -translate-x-1/2 bg-wearecrewGreen p-4 rounded-md shadow-md transition flex justify-center min-w-[100px]
        ${isCopied ? "translate-y-0" : "-translate-y-24"}`}
      >
        <strong className="text-lg text-white min-w-max">
          {copiedText}
        </strong>
      </div>
      <div className="border-b border-wearecrewBlue rounded shadow-md bg-white h-full">
        {/*Larger screen layout*/}
        <div className="hidden md:flex p-4 items-center gap-x-4 justify-between">
          <div
            style={stylingLarge}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md"
          ></div>
          <div className="w-[210px] flex flex-col">
            <h2>
              <strong> {crew.name}</strong>
            </h2>
            <h2>{crew.role}</h2>

            {crew?.qualis && (
              <div className="flex items-center">
                <small>{crew?.qualis}</small>
              </div>
            )}

            <strong
              className={`mt-4 ${
                crew.status === "Available"
                  ? "text-wearecrewGreen"
                  : crew.status === "Not Available"
                  ? "text-wearecrewRed"
                  : "text-wearecrewOrange"
              }`}
            >
              {crew.status}
            </strong>
          </div>

          <div className="flex flex-col justify-start min-w-[120px] min-h-[161px]">
            <small>
              <strong>Will work in</strong>
            </small>
            {crew.willWorkIn.map((willWorkIn, id) => (
              <div key={willWorkIn + id} className="mt-1">
                {willWorkIn}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            <a
              href={`tel:${crew.phone}`}
              className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
            >
              <h1 className="text-3xl">Call</h1>
            </a>
            <a
              href={`mailto:${crew.email}?subject=I found your profile on We Are Crew and want to check your availability!`}
              className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
            >
              <h1 className="text-3xl">Email</h1>
            </a>
            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-[144px] text-white"
            >
              <h1 className="text-3xl text-center">Profile</h1>
            </div>
          </div>
        </div>

        {/*Smaller screen layout*/}
        <div className="flex flex-col md:hidden p-2 gap-x-2 gap-y-8">
          <div className="w-full flex flex-col justify-between gap-x-2 gap-y-4">
            <div className="flex justify-between items-center">
              <div
                style={stylingSmall}
                className="rounded-full overflow-hidden w-[60px] h-[60px] flex items-center justify-end shadow-md"
              ></div>
              <div className="w-[210px] text-right">
                <div className="flex flex-col">
                  <strong
                    className={`mt-4 ${
                      crew.status === "Available"
                        ? "text-wearecrewGreen"
                        : crew.status === "Not Available"
                        ? "text-wearecrewRed"
                        : "text-wearecrewOrange"
                    }`}
                  >
                    {crew.status}
                  </strong>
                  <strong>{crew.name}</strong>
                </div>
                <h2>{crew.role}</h2>
                <div className="mt-2">
                  <small>{crew?.qualis}</small>
                </div>
              </div>
            </div>

            <div className="w-full text-center mt-4">
              <strong className="text-sm">Will work in:</strong>
              {crew.willWorkIn.map((willWorkIn) => (
                <div key={willWorkIn} className="mt-1">
                  <p className="text-base">{willWorkIn}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between gap-x-2">
              <a
                href={`tel:${crew.phone}`}
                className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white"
              >
                <h1 className="text-3xl">Call</h1>
              </a>
              <a
                href={`mailto:${crew.email}?subject=I found your profile on We Are Crew and want to check your availability!`}
                className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center h-full w-1/2 text-white"
              >
                <h1 className="text-3xl">Email</h1>
              </a>
            </div>

            <div
              onClick={() => setShowModal(true)}
              className="cursor-pointer rounded-md bg-wearecrewBlue p-2 shadow-md flex items-center justify-center h-full w-full text-white"
            >
              <h1 className="text-3xl text-center">Profile</h1>
            </div>
          </div>
        </div>
      </div>

      <CrewDetailModal
        show={showModal}
        id={crew.id}
        name={crew.name}
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
                  <h1 className="text-lg">{crew?.role}</h1>
                </div>
              </div>
              <div className=" w-[240px] flex flex-col items-end pt-10">
                <strong
                  className={`mt-4 text-3xl mb-4 min-w-max ${
                    crew.status === "Available"
                      ? "text-wearecrewGreen"
                      : crew.status === "Not Available"
                      ? "text-wearecrewRed"
                      : "text-wearecrewOrange"
                  }`}
                >
                  {crew.status}
                </strong>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row w-full gap-x-4 gap-y-4">
              <div className="flex flex-1 flex-col gap-y-6 py-4">
                <div className="flex items-center gap-x-4">
                  <span className="material-icons">phone_iphone</span>
                  <a href={`tel:${crew.phone}`} className="underline">
                    {crew.phone}
                  </a>
                  <button
                    onClick={() => copyPhone()}
                    className="text-wearecrewDarkGrey hidden md:block"
                  >
                    <cite>Copy Phone</cite>
                  </button>
                </div>
                <div className="flex items-center gap-x-4">
                  <span className="material-icons">mail</span>
                  <a
                    href={`mailto:${crew.email}?subject=I found your profile on We Are Crew and want to check your availability!`}
                    className="underline"
                  >
                    {crew.email}
                  </a>
                  <button
                    onClick={() => copyEmail()}
                    className="text-wearecrewDarkGrey hidden md:block"
                  >
                    <cite>Copy Email</cite>
                  </button>
                </div>
                <div className="flex items-start gap-x-4">
                  <span className="material-icons">where_to_vote</span>
                  <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                    {crew.willWorkIn.map((willWorkIn, id) => (
                      <div key={willWorkIn + id}>
                        <p className="min-w-max">
                          {willWorkIn}
                          {/* <span className="text-wearecrewBlue">     |  </span> */}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-x-4">
                  <span className="material-icons">military_tech</span>
                  <div>
                    {crew.credits.map((credits, id) => (
                      <div
                        key={credits + id}
                        className="flex items-center mb-4"
                      >
                        {/* <span>- </span> */}
                        <div className="flex justify-center">
                          <p className="text-base">
                            <cite>{credits.jobTitle}</cite>
                          </p>
                          <span className="text-wearecrewBlue">  |  </span>
                          <p className="text-base">{credits.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {crew.qualis ? (
                  <div className="flex items-center gap-x-4 -mt-4">
                    <span className="material-icons">school</span>

                    <div>
                      <p className="">
                        {crew.qualis}
                        {/* <span className="text-wearecrewBlue">     |  </span> */}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`flex items-center gap-x-4 ${
                    crew.qualis ? "" : "-mt-4"
                  }`}
                >
                  <span className="material-icons">emoji_people</span>
                  <p>{crew.bio}</p>
                </div>
              </div>
              <div className="w-full flex justify-center md:w-3/12 ">
                <div className="w-1/2 md:w-full flex flex-col gap-y-4">
                  <a
                    href={`tel:${crew.phone}`}
                    className="rounded-md bg-wearecrewGreen p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Call</h1>
                  </a>
                  <a
                    href={`mailto:${crew.email}?subject=I found your profile on We Are Crew and want to check your availability!`}
                    className="rounded-md bg-wearecrewDarkBlue p-2 shadow-md flex items-center justify-center w-full  text-white"
                  >
                    <h1 className="text-3xl">Email</h1>
                  </a>
                  {crew?.cv && (
                    <a
                      download
                      href={crew.cv}
                      className="border-2 text-center border-wearecrewBlue p-2 rounded shadow-md"
                    >
                      <h1 className="text-lg">Download Personal CV</h1>
                    </a>
                  )}

                  <button onClick={() => shareProfileHandler()}
                    className="border-2 text-center border-wearecrewBlue p-2 rounded shadow-md"
                  >
                    <h1 className="text-lg">Share This Profile</h1>
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
