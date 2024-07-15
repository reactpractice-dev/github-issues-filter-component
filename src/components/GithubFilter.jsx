import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useFloating } from "@floating-ui/react";

const GithubFilter = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating();
  return (
    <div>
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        ref={refs.setReference}
      >
        {name}
        <span>
          <FaAngleDown />
        </span>
      </button>
      {isOpen ? (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="bg-white p-4 border border-gray-200 shadow-md"
        >
          Open
        </div>
      ) : null}
    </div>
  );
};

export default GithubFilter;
