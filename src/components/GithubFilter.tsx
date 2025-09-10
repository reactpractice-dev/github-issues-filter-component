import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Props = {
  title: string;
};

const GithubFilter: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={`flex items-center gap-2 p-3 cursor-pointer ${
        isOpen ? "bg-gray-100" : ""
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};

export default GithubFilter;
