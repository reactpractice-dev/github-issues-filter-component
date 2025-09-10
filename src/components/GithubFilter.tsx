import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useFloating, useInteractions } from "@floating-ui/react";
import { useDismiss } from "@floating-ui/react";

type Props = {
  title: string;
};

const GithubFilter: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
  return (
    <>
      <button
        className={`flex items-center gap-2 p-3 cursor-pointer ${
          isOpen ? "bg-gray-100" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Tooltip
        </div>
      )}
    </>
  );
};

export default GithubFilter;
