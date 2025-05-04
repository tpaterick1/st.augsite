import React from "react";

export const Card = ({ children, className = "" }) => {
  return <div className={`rounded-xl border p-4 shadow ${className}`}>{children}</div>;
};
