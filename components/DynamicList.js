import React, { useState } from "react";

function DynamicList({ credits, setCredits }) {
  const [inputList, setInputList] = useState(credits);
  const [input, setInput] = useState("");
  

  console.log("Input List", inputList);


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...credits];
    list[index][name] = value;
    setInput(e.target.value);
    setInputList(list);
    setCredits(list);
  };


  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setInputList([...inputList, { jobTitle: "", yourRole: "" }]);
    setCredits([...credits, { jobTitle: "", yourRole: "" }]);
  };


  // handle click event of the Remove button
  const handleRemoveClick = (e, i) => {
    e.preventDefault();
  };


  let shownList = inputList;

  if ( credits?.length > 0) {
    shownList = [...credits];
    console.log("CREDITS EXIST", shownList);

  } else {
    console.log("CREDITS DONT EXIST");
  }

  return (
    <li className="relative styledList w-full md:w-[420px]">
      <h3>Credits</h3>
      {shownList.map((x, i) => {
        return (
          <div
            className="flex w-full flex-col relative mt-8 gap-y-2 styledList"
            key={i}
          >
            {shownList.length > 1 && (
              <button
                className="absolute top-0 -right-8"
                onClick={(e) => handleRemoveClick(e, i, x)}
              >
                &#x2716;
              </button>
            )}
            <input
              className="border shadow-md w-full"
              name="jobTitle"
              placeholder="Job Title"
              defaultValue={x.jobTitle}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="border shadow-md w-full"
              name="yourRole"
              placeholder="Your role"
              defaultValue={x.yourRole}
              onChange={(e) => handleInputChange(e, i)}
            />

            <div className="flex justify-center">
              <span className="h-[1px] w-1/4 border-b-2 rounded-lg border-wearecrewBlue"></span>
            </div>
            <div className="text-lg text-right font-bold mt-2">
              {shownList.length - 1 === i && (
                <button onClick={handleAddClick}>Add New Credit</button>
              )}
            </div>
          </div>
        );
      })}
    </li>
  );
}

export default DynamicList;
