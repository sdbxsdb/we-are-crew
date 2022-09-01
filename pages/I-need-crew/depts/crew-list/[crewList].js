import { React, useState } from "react";
import CrewDetailBox from "../../../../components/CrewDetailBox";
import Link from "next/link";
import DeptTitle from "../../../../components/DeptTitle";
import { supabase } from "../../../../utils/supabaseClient";


// const listOfCrew = [
//   {
//     id: 1,
//     name: "John Doe",
//     dept: "Acting",
//     role: "Director of Photography",
//     status: "Avail",
//     canStepUp: true,
//     image:
//       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     bio: "John Doe is a director of photography. He is a very good director.",
//     email: "johndoe@test.com",
//     phone: "34563456456",
//     status: "Available",
//     willWorkIn: [
//       "London",
//       "Liverpool",
//       "Newcastle upon Tyne",
//       "Birmingham",
//       "Exeter",
//       "Norwich",
//       "Glasgow",
//       "Edinbrugh",
//       "Aberdeen",
//       "Belfast",
//       "Derry / L'Derry",
//       "Enniskillen",
//       "Dublin",
//       "Galway",
//       "Cork",
//       "Donegal",
//       "Outside the UK & Ireland",
//     ],
//     qualis: "",
//     credits: [
//       {
//         jobTitle: "America Physco",
//         role: "Director of Photography",
//       },
//       {
//         jobTitle: "Jumanji",
//         role: "Director of Photography",
//       },
//     ],
//     bio: "Jill Doe is a focus puller. She is a very good focus puller.",
//     cv: "/images/logoNew2.png",
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     role: "Camera Operator",
//     status: "NotAvail",
//     canStepUp: true,
//     image: "",
//     bio: "Jane Doe is a camera operator. She is a very good camera operator.",
//     email: "janedoe@test.com",
//     phone: "754674567456",
//     status: "Not Available",
//     willWorkIn: ["England", "Northern Ireland", "Ireland"],
//     qualis: "",
//     credits: [
//       {
//         jobTitle: "A Movie Title",
//         role: "A Camera Operator",
//       },
//       {
//         jobTitle: "Harry Potter 5",
//         role: "B Camera Operator",
//       },
//     ],
//     bio: "Jill Doe is a focus puller. She is a very good focus puller.",
//     cv: "/images/logoNew2.png",
//   },
//   {
//     id: 3,
//     name: "Jack Doe",
//     dept: "ADs",
//     role: "Camera Operator Steadicam",
//     status: "SemiAvail",
//     canStepUp: false,
//     image:
//       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     bio: "Jack Doe is a camera operator. He is a very good camera operator.",
//     email: "jackdoe@test.com",
//     phone: "12341234645",
//     status: "On Dalies",
//     willWorkIn: ["England"],
//     qualis: "Steadicam Course",
//     credits: [
//       {
//         jobTitle: "Mission Impossible",
//         role: "B Camera Operator",
//       },
//       {
//         jobTitle: "Harry Potter 7",
//         role: "B Camera Operator",
//       },
//     ],
//     bio: "Jack Doe is a camera operator. He is a very good camera operator.",
//     cv: "",
//   },
//   {
//     id: 4,
//     name: "Jill Doe",
//     dept: "Art",
//     role: "Focus Puller",
//     status: "Avail",
//     canStepUp: true,
//     image:
//       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     bio: "Jill Doe is a focus puller. She is a very good focus puller.",
//     email: "jilldoe@test.com",
//     phone: "234234647432345",
//     status: "On Dalies",
//     willWorkIn: ["England", "Northern Ireland", "Scotland", "Wales", "Ireland"],
//     qualis: "Focus Puller Course - Focus Puller Course Grade 2",
//     credits: [
//       {
//         jobTitle: "Fight Club",
//         role: "B Camera Focus Puller",
//       },
//       {
//         jobTitle: "Harry Potter 7",
//         role: "B Camera Focus Puller",
//       },
//       {
//         jobTitle: "Harry Potter 7",
//         role: "B Camera Focus Puller",
//       },
//       {
//         jobTitle: "Harry Potter 7",
//         role: "B Camera Focus Puller",
//       },
//       {
//         jobTitle: "Harry Potter 7",
//         role: "B Camera Focus Puller",
//       },
//     ],
//     bio: "Jill Doe fhfjdjkjs f dsaksdhklfha sdfk akjsfd kljasdfkjas dfkj  askfjsakjdfhklasdhf kjasfkljashdfkjahdf a kajsfkaskdjfha sdflkasjfkjasdfh asfkla skljfalksdfhkjashfd klasfdh alskf lkashfkjashfk jashfklashdfkljashdfkjashdf kjsdfhalksdfhsadkfsk",
//     cv: "/images/logoNew2.png",
//   },
//   {
//     id: 5,
//     name: "Mynameis Verylongsoitis",
//     dept: "Camera",
//     role: "Loader",
//     status: "NotAvail",
//     canStepUp: true,
//     image:
//       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     bio: "Joe Doe is a loader. He is a very good loader.",
//     email: "joedoe@test.com",
//     phone: "64634634563465",
//     status: "Available",
//     willWorkIn: ["England", "Scotland", "Wales"],
//     qualis: "",
//     credits: [
//       {
//         jobTitle: "Some movie",
//         role: "B Camera Loader",
//       },
//       {
//         jobTitle: "Great Movie",
//         role: "A Camera Loader",
//       },
//     ],
//     bio: "Joe Doe is a loader. He is a very good loader.",
//   },
//   {
//     id: 6,
//     name: "Juandoe - Doublebarrelled",
//     dept: "Grips",
//     role: "Trainee",
//     status: "SemiAvail",
//     image:
//       "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     bio: "Juan Doe is a trainee. He is a very good trainee.",
//     email: "juandoe@test.com",
//     phone: "12345235345",
//     status: "Not Available",
//     willWorkIn: ["England", "Northern Ireland", "Scotland", "Wales", "Ireland"],
//     qualis: "",
//     credits: [
//       {
//         jobTitle: "Harry Potter",
//         role: "B Camera Trainee",
//       },
//       {
//         jobTitle: "Harry Potter 2",
//         role: "A Camera Trainee",
//       },
//     ],
//     bio: "Juan Doe is a trainee. He is a very good trainee.",
//     cv: "/images/logoNew2.png",
//   },
// ];

const crewList = ({users, image}) => {

  return (
    <div className="px-4 md:px-12 p-12 w-full h-fit">
      <Link href="/I-need-crew/depts">
        <a className="font-semibold">&#x2190; Back to Departments</a>
      </Link>

      <div className="w-full flex justify-start mt-4">
        <h1 className="text-4xl">
          <DeptTitle />
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex w-full lg:max-w-[1200px] flex-col-reverse lg:flex-row gap-x-4 gap-y-4 mt-4">
          <div className="flex flex-1 rounded-md flex-col gap-y-4 mb-12">
            {users.map((crew) => (
              <CrewDetailBox
                key={crew.id}
                id={crew.id}
                name={crew.username}
                dept={crew.dept}
                title={crew.title}
                canStepUp={crew.canStepUp}
                imgURL={crew.imgURL}
                phone={crew.phone}
                email={crew.email}
                website={crew.website}
                status={crew.status}
                willWorkIn={crew.canWorkIn}
                qualis={crew.qualis}
                credits={crew.credits}
                bio={crew.bio}
                cv={crew.cv}
              />
            ))}
          </div>

          <div className=" w-full lg:w-3/12 shadow-md bg-white rounded-md p-4 lg:h-fit mb-4 md:mb-0">
            <p className="text-center mb-4 font-semibold text-lg">
              Filter by Role
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-between lg:flex-col gap-y-4 gap-x-4 filterByList">
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">All</button>
              </li>
              <li className="lg:w-full max-w-3/12">
                <button className="w-full">LIST OF ALL ROLES GOES HERE</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crewList;

export async function getStaticPaths() {
  const { data: profiles } = await supabase.from("profiles").select("dept");

  const depts = [];

  profiles.forEach((profile) => {
    depts.push(profile.dept);
  });
  const uniqueDepts = Array.from(new Set(depts));

  const paths = uniqueDepts.map((dept) => {
    return {
      params: {
        crewList: dept
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async (context) => {
  const dept = context.params.crewList
  
  const data = await supabase.from("profiles").select("*").eq("dept", dept);
  
// console.log("CREW DATA-", context.params.crewList);
// console.log("PROFILES_", data.data.map((item) => item.imgURL));


  return {
    props: {
      users: data.data,
    }
  }
};



