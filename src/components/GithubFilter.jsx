import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

const GithubFilter = ({ name, header, placeholder, items, renderItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-end",
    middleware: [offset({ mainAxis: 5, crossAxis: 10 }), flip(), shift()],
  });
  return (
    <div>
      <button
        className="flex items-center gap-1"
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
          className="bg-white border border-gray-200 shadow-md text-xs w-64 flex flex-col rounded-lg"
        >
          <div className="m-2 pl-1 font-semibold">{header}</div>
          <hr />
          <input
            type="text"
            placeholder={placeholder}
            className="m-2 p-2 border border-gray-300 rounded-lg"
          />
          <hr />
          <div className="overflow-auto h-64 flex flex-col">
            {items.map((item) => (
              <a
                key={item.id}
                href="#"
                className="border-b border-gray-200 font-semibold p-2 pl-6 hover:bg-gray-100 "
              >
                {renderItem(item)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GithubFilter;
