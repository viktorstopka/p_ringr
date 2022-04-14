import React, { ComponentType } from "react";

type SplitTextProps = {
  copy: string;
  role: "heading" | "tooltip" | "suggestion" | "sectionhead";
  LetterWrapper?: ComponentType<{ index: number }>;
  WordWrapper?: ComponentType<{ index: number }>;
};

const SplitText: React.FC<SplitTextProps> = ({
  copy,
  role,
  LetterWrapper = () => <></>,
  WordWrapper = () => <></>,
}) => {
  return (
    <span aria-label={copy} role={role}>
      {copy.split(" ").map(function (char, index) {
        return (
          <>
            {/* @ts-ignore */}
            <WordWrapper index={index}>
              <span aria-hidden="true" key={index}>
                {char}
              </span>
            </WordWrapper>{" "}
          </>
        );
      })}
    </span>
  );
};

export default SplitText;
