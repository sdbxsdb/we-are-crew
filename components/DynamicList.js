import React, { useState } from "react";

function DynamicList() {
  const [inputList, setInputList] = useState([{ jobTitle: "", yourRole: "" }]);
  const [input, setInput] = useState('');


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
    <div>
      <h3>Credits</h3>
      {inputList.map((x, i) => {
        return (
          <div className="flex flex-col relative mt-4 gap-y-2 styledList" key={i}>
            {inputList.length > 1 && (
              <button className="absolute top-0 -right-8" onClick={() => handleRemoveClick(i)}>
                &#x2716;
              </button>
            )}
            <input
            className="border shadow-md"
              name="jobTitle"
              placeholder="Job Title"
              value={x.jobTitle}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="border shadow-md"
              name="yourRole"
              placeholder="Your role"
              value={x.yourRole}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="absolute -right-10 bottom-0">
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
            <span className="h-[2px] w-full border-b border-wearecrewDarkGrey"></span>
          </div>
        );
      })}
    </div>
  );
}

export default DynamicList;
