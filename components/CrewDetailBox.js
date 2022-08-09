import React from "react";
import Link from "next/link";

const listOfCrew = [
  {
    id: 1,
    name: "John Doe",
    role: "Director of Photography",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "John Doe is a director of photography. He is a very good director.",
    email: "johndoe@test.com",
    phone: "34563456456",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Camera Operator",
    image: "",
    bio: "Jane Doe is a camera operator. She is a very good camera operator.",
    email: "janedoe@test.com",
    phone: "754674567456",
  },
  {
    id: 3,
    name: "Jack Doe",
    role: "Camera Operator Steadicam",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jack Doe is a camera operator. He is a very good camera operator.",
    email: "jackdoe@test.com",
    phone: "12341234645",
  },
  {
    id: 4,
    name: "Jill Doe",
    role: "Focus Puller",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jill Doe is a focus puller. She is a very good focus puller.",
    email: "jilldoe@test.com",
    phone: "234234647432345",
  },
  {
    id: 5,
    name: "Joe Doe",
    role: "Loader",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Joe Doe is a loader. He is a very good loader.",
    email: "joedoe@test.com",
    phone: "64634634563465",
  },
  {
    id: 6,
    name: "Juan Doe",
    role: "Trainee",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Juan Doe is a trainee. He is a very good trainee.",
    email: "juandoe@test.com",
    phone: "12345235345",
  },
];

const CrewDetailBox = (crew) => {
  return listOfCrew.map((crew, i) => {
    const slugify = (str) =>
      str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");

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
      <div key={crew + i}>
        <div className="border-b border-wearecrewBlue rounded shadow-md bg-white h-full">
          {/*Larger screen layout*/}
          <div className="hidden md:flex p-4 items-center gap-x-4 justify-between">
            <div
              style={stylingLarge}
              className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center shadow-md"
            ></div>
            <div className="w-[210px]">
              <h2>{crew.name}</h2>
              <h2>{crew.role}</h2>
            </div>
            <div className=""></div>
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
            <Link
              href={`/I-need-crew/crew-list/<<department>>/${slugify(
                crew.name
              )}${crew.id}`}
            >
              <a className="rounded p-2 border-b border-wearecrewBlue shadow-md flex items-center justify-center">
                <p className="text-lg text-center">Full Profile</p>
              </a>
            </Link>
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
              <Link
                href={`/I-need-crew/crew-list/<<department>>/${slugify(
                  crew.name
                )}${crew.id}`}
              >
                <a className="rounded p-2 border-b border-wearecrewBlue shadow-md flex items-center justify-center">
                  <p className="text-lg text-center">Full Profile</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default CrewDetailBox;
