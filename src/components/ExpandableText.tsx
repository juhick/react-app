import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  // other props
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>
        {isExpanded ? children : children.slice(0, maxChars)}
        {children.length > maxChars && (
          <button onClick={handleExpand}>
            {" "}
            {isExpanded ? "Show Less" : "...more"}
          </button>
        )}
      </p>
    </>
  );
};

export default ExpandableText;
