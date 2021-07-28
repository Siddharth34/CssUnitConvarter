import React, { useState } from "react";

const PxToEm = () => {
  const [pxValue, setPxValue] = useState("");

  const [emValue, setEmValue] = useState("");

  const convartPxtoEm = (e) => {
    setPxValue(e.target.value);

    setEmValue(e.target.value / 16);
  };

  const convartEmtoPx = (e) => {
    setEmValue(e.target.value);

    setPxValue(e.target.value * 16);
  };

  return (
    <>
      <div className="container">
        <h1>PX to Em</h1>

        <input
          type="number"
          placeholder="PX"
          className="input"
          value={pxValue}
          onChange={convartPxtoEm}
        />

        <div className="icons_div">
          <span className="top_ic icon">
            <i class="fas fa-angle-double-up"></i>
          </span>

          <span className="bottom_ic icon">
            <i class="fas fa-angle-double-down"></i>
          </span>
        </div>

        <input
          type="number"
          placeholder="EM"
          className="input"
          value={emValue}
          onChange={convartEmtoPx}
        />
      </div>
    </>
  );
};

export default PxToEm;
