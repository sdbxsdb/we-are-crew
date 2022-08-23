import React, { useState, useEffect } from "react";

function DynamicList({ credits, setCredits }) {

  const [inputList, setInputList] = useState([]);
  const [hasCreditsLoaded, setHasCreditsLoaded] = useState(false);
  const [hasDefaultStateBeenSet, setHasDefaultStateBeenSet] = useState(false);

  const [input, setInput] = useState("");

  useEffect(() => {
    setHasCreditsLoaded(credits !== null && credits !== undefined);
  }, [credits]);


  useEffect(() => {
    if (hasCreditsLoaded && !hasDefaultStateBeenSet) {
      setInputList([...credits]);
      setHasDefaultStateBeenSet(true);
    } 
    if (hasCreditsLoaded && credits?.length === 0 && !hasDefaultStateBeenSet) {
      setInputList([{ jobTitle: "", yourRole: "" }]);
      setHasDefaultStateBeenSet(true);
    }
  }, [hasCreditsLoaded, hasDefaultStateBeenSet]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    setInput(e.target.value);
    setCredits([...inputList]);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (i, e) => {
    console.log("REMOVe");
    let list = [...inputList];
    list = list.splice(i, 1);
    setCredits(list);
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
                onClick={(e) => handleRemoveClick(e, i)}
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
            
            <div className="flex justify-center">
              <span className="h-[1px] w-1/4 border-b-2 rounded-lg border-wearecrewBlue"></span>
            </div>
            <div className="text-lg text-right font-bold mt-2">
              {inputList.length - 1 === i && (
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
