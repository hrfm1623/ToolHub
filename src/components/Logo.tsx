import React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        className="fill-indigo-600 dark:fill-indigo-400"
      />
      <path
        d="M2 17L12 22L22 17"
        className="stroke-indigo-600 dark:stroke-indigo-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        className="stroke-indigo-600 dark:stroke-indigo-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
