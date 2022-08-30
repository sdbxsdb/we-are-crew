import { useState } from "react";
import DeptCard from "../components/DeptCard";

const deptList = [
  { dept: "Action Vehicles", imgUrl: "../../../images/icons/actionVeh.png" },
  { dept: "Animals", imgUrl: "../../../images/icons/animals.png" },
  { dept: "Armoury", imgUrl: "../../../images/icons/armoury.png" },
  { dept: "Art", imgUrl: "../../../images/icons/art.png" },
  { dept: "Assistant Directors", imgUrl: "../../../images/icons/ads.png" },
  { dept: "Camera", imgUrl: "../../../images/icons/camera.png" },
  { dept: "Casting", imgUrl: "../../../images/icons/casting.png" },
  { dept: "Catering", imgUrl: "../../../images/icons/catering.png" },
  { dept: "Coaching", imgUrl: "../../../images/icons/acting.png" },
  { dept: "Construction", imgUrl: "../../../images/icons/construction.png" },
  { dept: "Continuity", imgUrl: "../../../images/icons/continuity.png" },
  { dept: "Costume", imgUrl: "../../../images/icons/costume.png" },
  { dept: "Covid", imgUrl: "../../../images/icons/covid.png" },
  { dept: "Directors", imgUrl: "../../../images/icons/directors.png" },
  { dept: "Dialogue", imgUrl: "../../../images/icons/dialogue.png" },
  { dept: "D I T", imgUrl: "../../../images/icons/dit.png" },
  { dept: "Drone", imgUrl: "../../../images/icons/drone.png" },
  { dept: "Editoral & Post", imgUrl: "../../../images/icons/editorial.png" },
  { dept: "Electrical", imgUrl: "../../../images/icons/electrical.png" },
  { dept: "Grip", imgUrl: "../../../images/icons/grip.png" },
  { dept: "Hair", imgUrl: "../../../images/icons/hair.png" },
  { dept: "Hair & Make-up", imgUrl: "../../../images/icons/hairMakeUp.png" },
  { dept: "Health & Safety", imgUrl: "../../../images/icons/healthSafety.png" },
  { dept: "HR", imgUrl: "../../../images/icons/hr.png" },
  { dept: "Locations", imgUrl: "../../../images/icons/locations.png" },
  { dept: "Make-Up", imgUrl: "../../../images/icons/makeup.png" },
  { dept: "Medical", imgUrl: "../../../images/icons/medical.png" },
  { dept: "Producers", imgUrl: "../../../images/icons/producer.png" },
  { dept: "Production Crew", imgUrl: "../../../images/icons/production.png" },
  { dept: "Props", imgUrl: "../../../images/icons/props.png" },
  { dept: "Rigging", imgUrl: "../../../images/icons/rigging.png" },
  { dept: "Set Decoration", imgUrl: "../../../images/icons/setDec.png" },
  { dept: "Sound", imgUrl: "../../../images/icons/sound.png" },
  { dept: "Special Effects", imgUrl: "../../../images/icons/sfx.png" },
  { dept: "Stand-bys", imgUrl: "../../../images/icons/standby.png" },
  { dept: "Stills", imgUrl: "../../../images/icons/stills.png" },
  { dept: "Stunts", imgUrl: "../../../images/icons/stunts.png" },
  {
    dept: "Tracking Vehicles",
    imgUrl: "../../../images/icons/trackingVeh.png",
  },
  { dept: "Transport", imgUrl: "../../../images/icons/transport.png" },
  { dept: "Video", imgUrl: "../../../images/icons/video.png" },
  { dept: "Visual Effects", imgUrl: "../../../images/icons/vfx.png" },
];

const FilteredDept = ({ dept, imgUrl }) => {
  const [foundDept, setFoundDept] = useState(dept);

  const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  // const filter = (e) => {
  //   const searchTerm = e.target.value;

  //   if (searchTerm !== "") {
  //     const results = deptList.filter((dept) => {
  //       return dept.dept.toLowerCase().startsWith(searchTerm.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundDept(results);
  //   } else {
  //     setFoundDept(deptList);
  //     // If the text field is empty, show all users
  //   }
  // };

  return (
    <div>
      <div className="w-full flex justify-center mt-12 mb-4">
        {/* <input
          type="text"
          onChange={filter}
          className="bg-white border-b w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
          placeholder="Search Departments..."
        /> */}
      </div>
      <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <DeptCard dept={dept} imgUrl={`../../../images/icons/`+slugify(imgUrl)+'.png'} />
      </div>

      {/* 
      {foundDept && foundDept.length > 0 ? (
        <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {foundDept.map((dept, i) => (
            <DeptCard key={i} dept={dept} imgUrl={dept.imgUrl} />
          ))}
        </div>
      ) : (
        <div className="mt-4 w-full text-center">
          <h1>No department found!</h1>
        </div>
      )} */}
    </div>
  );
};

export default FilteredDept;
