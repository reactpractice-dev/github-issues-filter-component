import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const GithubFilter = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        <span>
          <FaAngleDown />
        </span>
      </button>
      {isOpen ? <div>Open</div> : <div>Closed</div>}
    </div>
  );
};

export default GithubFilter;
