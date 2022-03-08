import React from "react";

export const ErrorMessage = ({ error }) => {
  return <>{error && <h1>{error}</h1>}</>;
};
