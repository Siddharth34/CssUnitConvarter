import React, { useState } from "react";

const PxToRem = () => {
  const [pxValue, setPxValue] = useState("");

  const [remValue, setRemValue] = useState("");

  const convartPxtoRem = (e) => {
    setPxValue(e.target.value);

    setRemValue(e.target.value / 16);
  };

  const convartRemtoPx = (e) => {
    setRemValue(e.target.value);

    setPxValue(e.target.value * 16);
  };

  return (
    <>
      <div className="container">
        <h1>PX to Rem</h1>

        <input
          type="number"
          placeholder="PX"
          className="px_input input"
          value={pxValue}
          onChange={convartPxtoRem}
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
          placeholder="REM"
          className="rem_input input"
          value={remValue}
          onChange={convartRemtoPx}
        />
      </div>
    </>
  );
};

export default PxToRem;
