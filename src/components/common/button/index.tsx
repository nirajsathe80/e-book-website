"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = function ({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200"
    >
      {text}
    </button>
  );
};

export default Button;
