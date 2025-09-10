import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useFloating, useInteractions } from "@floating-ui/react";
import { useDismiss } from "@floating-ui/react";

type Props<T> = {
  title: string;
  items?: T[];
  renderItem: (item: T) => ReactNode;
};

const GithubFilter = <T,>({ title, items = [], renderItem }: Props<T>) => {
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
          <ul>
            {items.map((item) => (
              <li>{renderItem(item)}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GithubFilter;
