import React, { useState } from "react";

function DynamicList() {
  const [inputList, setInputList] = useState([{ jobTitle: "", yourRole: "" }]);
  const [input, setInput] = useState("");

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    setInput(e.target.value);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { jobTitle: "", yourRole: "" }]);
  };


  return (
    <li className="relative styledList w-full md:w-[420px]">
  
      <h3>Credits</h3>
      {inputList.map((x, i) => {
        return (

            <div
              className="flex w-full flex-col relative mt-8 gap-y-2 styledList"
              key={i}
            >
              {inputList.length > 1 && (
                <button
                  className="absolute top-0 -right-8"
                  onClick={() => handleRemoveClick(i)}
                >
                  &#x2716;
                </button>
              )}
              <input
                className="border shadow-md w-full"
                name="jobTitle"
                placeholder="Job Title"
                value={x.jobTitle}
                onChange={(e) => handleInputChange(e, i)}
              />
              <input
                className="border shadow-md w-full"
                name="yourRole"
                placeholder="Your role"
                value={x.yourRole}
                onChange={(e) => handleInputChange(e, i)}
              />
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-2xl font-bold">
                {inputList.length - 1 === i && (
                  <button onClick={handleAddClick}>&#43;</button>
                )}
              </div>
              <div className="flex justify-center">
                <span className="h-[1px] w-1/4 border-b-2 rounded-lg border-wearecrewBlue"></span>
                </div>
            </div>

        );
      })}
    </li>
  );
}

export default DynamicList;
