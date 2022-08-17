import { useState } from "react";
import DeptCard from "../components/DeptCard";

const deptList = [
  { dept: "Action Vehicles", imgUrl: "../../../images/icons/actionVeh.png" },
  { dept: "Animals", imgUrl: "../../../images/icons/animals.png" },
  { dept: "Armoury", imgUrl: "../../../images/icons/armoury.png" },
  { dept: "Art", imgUrl: "../../../images/icons/art.png" },
  { dept: "ADs", imgUrl: "../../../images/icons/ads.png" },
  { dept: "Camera", imgUrl: "../../../images/icons/camera.png" },
  { dept: "Casting", imgUrl: "../../../images/icons/casting.png" },
  { dept: "Catering", imgUrl: "../../../images/icons/catering.png" },
  { dept: "Coaching", imgUrl: "../../../images/icons/acting.png" },
  { dept: "Construction", imgUrl: "../../../images/icons/construction.png" },
  { dept: "Continuity", imgUrl: "../../../images/icons/continuity.png" },
  { dept: "Costume", imgUrl: "../../../images/icons/costume.png" },
  { dept: "Covid", imgUrl: "../../../images/icons/covid.png" },
  { dept: "Directors", imgUrl: "../../../images/icons/directors.png" },
  { dept: "Editoral & Post", imgUrl: "../../../images/icons/editorial.png" },
  { dept: "Electrical", imgUrl: "../../../images/icons/electrical.png" },
  { dept: "Grip", imgUrl: "../../../images/icons/grip.png" },
  { dept: "Hair & Make-up", imgUrl: "../../../images/icons/hairMakeUp.png" },
  { dept: "Health & Safety", imgUrl: "../../../images/icons/healthSafety.png" },
  { dept: "HR", imgUrl: "../../../images/icons/hr.png" },
  { dept: "Locations", imgUrl: "../../../images/icons/locations.png" },
  { dept: "Producers", imgUrl: "../../../images/icons/producer.png" },
  { dept: "Production Crew", imgUrl: "../../../images/icons/production.png" },
  { dept: "Props", imgUrl: "../../../images/icons/props.png" },
  { dept: "Set Decoration", imgUrl: "../../../images/icons/setDec.png" },
  { dept: "Sound", imgUrl: "../../../images/icons/sound.png" },
  { dept: "Special Effects", imgUrl: "../../../images/icons/sfx.png" },
  { dept: "Stand-bys", imgUrl: "../../../images/icons/sfx.png" },
  { dept: "Stunts", imgUrl: "../../../images/icons/sound.png" },
  { dept: "Tracking Vehicles", imgUrl: "../../../images/icons/sfx.png" },
  { dept: "Transport", imgUrl: "../../../images/icons/transport.png" },
  { dept: "Visual Effects", imgUrl: "../../../images/icons/vfx.png" },
];

const FilteredDept = () => {
  const [name, setName] = useState("");
  const [foundDept, setFoundDept] = useState(deptList);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = deptList.filter((dept) => {
        return dept.dept.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundDept(results);
    } else {
      setFoundDept(deptList);
      // If the text field is empty, show all users
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center mt-12 mb-4">
        <input
          type="text"
          onChange={filter}
          className="bg-white border-b w-[400px] border-wearecrewBlue rounded-md p-4 outline-0"
          placeholder="Search Departments..."
        />
      </div>
      {foundDept && foundDept.length > 0 ? (
        <div className="mt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {foundDept.map((dept, i) => (
            <DeptCard key={i} dept={dept.dept} imgUrl={dept.imgUrl} />
          ))}
        </div>
      ) : (
        <div className="mt-4 w-full text-center">
          <h1>No department found!</h1>
        </div>
      )}
    </div>
  );
};

export default FilteredDept;
