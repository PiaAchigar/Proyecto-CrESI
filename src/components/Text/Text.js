import React from "react";

const Text = ({ children }) => {
  return (
    <div className="text" style={{ color: "red" }}>
      {children}
    </div>
  );
};

export default Text;
