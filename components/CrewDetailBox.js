import React from "react";

const listOfCrew = [
  {
    name: "John Doe",
    role: "Director of Photography",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "John Doe is a director of photography. He is a very good director.",
    email: "",
    phone: "",
  },
  {
    name: "Jane Doe",
    role: "Camera Operator",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jane Doe is a camera operator. She is a very good camera operator.",
    email: "",
    phone: "",
  },
  {
    name: "Jack Doe",
    role: "Camera Operator Steadicam",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    bio: "Jack Doe is a camera operator. He is a very good camera operator.",
    email: "",
    phone: "",
  },
];

const CrewDetailBox = (crew) => {
  return listOfCrew.map((crew, i) => {
    const styling = {
      backgroundImage: `url(${crew.image})`,
      width:"100px",
      height:"100px",
      backgroundSize:"cover",
  }
    return (
      <div key={crew + i} className="p-4 gap-x-4 bg-white rounded shadow-md">
        <div  style={styling}
          className="rounded-full overflow-hidden w-[100px] h-[100px] flex items-center justify-center">
        </div>
      </div>
    );
  });
};

export default CrewDetailBox;
