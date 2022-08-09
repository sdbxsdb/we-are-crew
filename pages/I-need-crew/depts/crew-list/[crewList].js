import {React, useState} from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
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
    status: "Available",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Camera Operator",
    image: "",
    bio: "Jane Doe is a camera operator. She is a very good camera operator.",
    email: "janedoe@test.com",
    phone: "754674567456",
    status: "Not Available",
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
    status: "On Dalies",
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
    status: "On Dalies",
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
    status: "Available",
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
    status: "Not Available",
  },
];

const crewList = () => {

  return (
    <div className="px-12 pt-12">
      <Link href="/I-need-crew/depts">
        <a className="font-semibold">&#x2190; Back to Departments</a>
      </Link>

      <div className="w-full flex justify-start mt-4">
        <h1 className="text-4xl">Camera</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex w-full lg:max-w-[1200px] flex-col-reverse lg:flex-row gap-x-4 gap-y-4 mt-4">

          <div className="flex flex-1 rounded-md flex-col gap-y-4 lg:overflow-scroll max-h-[calc(100vh-252px)]">
            {listOfCrew.map((crew) => (
              <CrewDetailBox key={crew.id} name={crew.name} role={crew.role} image={crew.image} bio={crew.bio} phone={crew.phone} email={crew.email} status={crew.status} />
            ))}
          </div>


          <div className=" w-full lg:w-3/12 shadow-md bg-white border-b-wearecrewBlue rounded-md p-4 lg:h-fit">
            <p className="text-center mb-4 font-semibold text-lg">
              Filter by Role
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Director of Photography</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Camera Operator</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Camera Operator / Steadicam</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Focus Puller</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Loader</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">Trainee</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crewList;
