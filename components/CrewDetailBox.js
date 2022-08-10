import { React, useState } from "react";
import CrewDetailModal from "./CrewDetailModal";

const CrewDetailBox = (crew) => {
  const [showModal, setShowModal] = useState(false);

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

  const copyPhone = () => {
    navigator.clipboard.writeText(`${crew.phone}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(`${crew.email}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div
        className={`fixed top-0 z-50 left-1/2 transform -translate-x-1/2 bg-wearecrewGreen p-4 rounded-md shadow-md transition
        ${isCopied ? "translate-y-0" : "-translate-y-20"}`}
      >
        <strong className="text-lg text-white">Copied to Clipboard!</strong>
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
            {crew.qualis.map((quali, id) => (
              <ul key={quali + id}>
                <li>
                  <span>- </span>
                  <small>{quali}</small>
                </li>
              </ul>
            ))}

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

          <div className="">
            <small>Will work in</small>
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
                  {crew.qualis.map((quali, id) => (
                    <ul key={quali + id}>
                      <li>
                        <small>{quali}</small>
                        <span> -</span>
                      </li>
                    </ul>
                  ))}
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

      <CrewDetailModal show={showModal} onClose={() => setShowModal(false)}>
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
                  <p>{crew.phone}</p>
                  <button
                    onClick={() => copyPhone()}
                    className="text-wearecrewDarkGrey"
                  >
                    <cite>Copy Phone</cite>
                  </button>
                </div>
                <div className="flex items-center gap-x-4">
                  <span className="material-icons">mail</span>
                  <p>{crew.email}</p>
                  <button
                    onClick={() => copyEmail()}
                    className="text-wearecrewDarkGrey"
                  >
                    <cite>Copy Email</cite>
                  </button>
                </div>
                <div className="flex items-center gap-x-4">
                  <span className="material-icons">where_to_vote</span>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
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
                {crew.qualis.length > 0 ? (
                  <div className="flex items-center gap-x-4 -mt-4">
                    <span className="material-icons">school</span>
                    {crew?.qualis.map((quali, id) => (
                      <div key={quali + id}>
                        <p className="min-w-max">
                          {quali}
                          {/* <span className="text-wearecrewBlue">     |  </span> */}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={`flex items-center gap-x-4 ${
                    crew.qualis.length > 0 ? "" : "-mt-4"
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
