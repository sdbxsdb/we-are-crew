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
          <div className="flex mt-4 gap-x-4" key={i}>
            {inputList.length !== 0 && (
              <button onClick={() => handleRemoveClick(i)}>
                Remove
              </button>
            )}
            <input
              name="jobTitle"
              placeholder="Job Title"
              value={x.jobTitle}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="ml-10"
              name="yourRole"
              placeholder="Your role"
              value={x.yourRole}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="">
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DynamicList;
