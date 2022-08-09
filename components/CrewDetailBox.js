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

  return (
    <div>
      <div className="border-b border-wearecrewBlue rounded shadow-md bg-white h-full">
        {/*Larger screen layout*/}
        <div className="hidden md:flex p-4 items-center gap-x-4 justify-between">
          <div
            style={stylingLarge}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md"
          ></div>
          <div className="w-[210px] flex flex-col">
            <h2>{crew.name}</h2>
            <h2>{crew.role}</h2>

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
            <ul>
              <li>England</li>
              <li>Northern Ireland</li>
              <li>Ireland</li>
              <li>Scotland</li>
              <li>Wales</li>
            </ul>
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
          </div>

          <div
            onClick={() => setShowModal(true)}
            className="rounded p-2 border-b border-wearecrewBlue shadow-md flex items-center justify-center"
          >
            <button className="text-lg text-center">Full Profile</button>
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
                <strong>{crew.name}</strong>
                <h2>{crew.role}</h2>
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
            </div>

            <div className="w-full text-center">
              <small className="text-center">
                <strong>Will work in</strong>
              </small>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 w-full">
                <li className="min-w-max">England</li>
                <li className="min-w-max">Northern Ireland</li>
                <li className="min-w-max">Ireland</li>
                <li className="min-w-max">Scotland</li>
                <li className="min-w-max">Wales</li>
              </ul>
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
              className="rounded p-2 border-b border-wearecrewBlue shadow-md flex items-center justify-center"
            >
              <button className="text-lg text-center">Full Profile</button>
            </div>
          </div>
        </div>
      </div>

      <CrewDetailModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={crew?.name}
      >
        <div className="w-full flex justify-start gap-x-4 items-center borderRed mb-4 text-3xl">
          <div
            style={stylingLarge}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md"
          ></div>
          <div>
            <h1>{crew?.name}</h1>
            <h1 className="text-lg">{crew?.role}</h1>
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
        </div>
      </CrewDetailModal>
    </div>
  );
};

export default CrewDetailBox;
