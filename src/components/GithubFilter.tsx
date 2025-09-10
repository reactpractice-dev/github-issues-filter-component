import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useFloating } from "@floating-ui/react";

type Props = {
  title: string;
};

const GithubFilter: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating();
  return (
    <>
      <button
        className={`flex items-center gap-2 p-3 cursor-pointer ${
          isOpen ? "bg-gray-100" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        ref={refs.setReference}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles}>
          Tooltip
        </div>
      )}
    </>
  );
};

export default GithubFilter;
