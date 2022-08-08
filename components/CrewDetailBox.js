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
    email: "",
    phone: "",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Camera Operator",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jane Doe is a camera operator. She is a very good camera operator.",
    email: "",
    phone: "",
  },
  {
    id: 3,
    name: "Jack Doe",
    role: "Camera Operator Steadicam",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jack Doe is a camera operator. He is a very good camera operator.",
    email: "",
    phone: "",
  },
  {
    id: 4,
    name: "Jill Doe",
    role: "Focus Puller",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jill Doe is a focus puller. She is a very good focus puller.",
    email: "",
    phone: "",
  },
  {
    id: 5,
    name: "Joe Doe",
    role: "Loader",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Joe Doe is a loader. He is a very good loader.",
    email: "",
    phone: "",
  },
  {
    id: 6,
    name: "Juan Doe",
    role: "Trainee",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Juan Doe is a trainee. He is a very good trainee.",
    email: "",
    phone: "",
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

    const styling = {
      backgroundImage: `url(${crew.image})`,
      width: "100px",
      height: "100px",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <Link
        key={crew + i}
        href={`/I-need-crew/crew-list/<<department>>/${slugify(crew.name)}${crew.id}`}
      >
        <a className="p-4 flex items-center border-b border-wearecrewBlue gap-x-4 bg-white rounded shadow-md cursor-pointer">
          <div
            style={styling}
            className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center"
          ></div>
          <div className="">
            <h2>{crew.name}</h2>
          </div>
        </a>
      </Link>
    );
  });
};

export default CrewDetailBox;
