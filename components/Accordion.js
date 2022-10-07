import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={` ${
        isOpen ? "mb-12" : "mb-0"
      } accordion-wrapper w-full md:w-1/2`}
    >
      <h1
        className={`accordion-title ${
          isOpen ? "open " : "border-b-2 rounded-b-md shadow-md"
        } bg-white border-t-2  border-r-2 border-l-2 border-wearecrewBlue rounded-t-md  text-2xl px-4 py-2`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </h1>
      <div
        className={`accordion-item ${
          !isOpen ? "collapsed" : ""
        } h-full bg-white`}
      >
        <div className="accordion-content p-4 rounded-b-md z-50 shadow-md border-b-2 border-l-2 border-r-2 border-wearecrewBlue h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
