import React from "react";

const loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="spinner-grow" role="status"></div>
        <div className="spinner-grow" role="status"></div>
        <div className="spinner-grow" role="status"></div>
      </div>
    </div>
  );
};

export default loading;
