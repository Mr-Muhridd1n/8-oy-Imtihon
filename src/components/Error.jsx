import React from "react";

export const Error = (message) => {
  return (
    <div className="error">
      <h1 className="error-text">{message}</h1>
    </div>
  );
};
