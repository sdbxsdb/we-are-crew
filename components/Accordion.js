import {useState} from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper w-full md:w-1/2">
      
      <div
        className={`accordion-title ${isOpen ? "open " : "border-b rounded-b-md"} bg-white border-t  border-r border-l border-wearecrewBlue rounded-t-md shadow-md`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content bg-white rounded-b-md shadow-md border-b border-l border-r border-wearecrewBlue">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;