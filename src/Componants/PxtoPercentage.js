import React, { useState } from "react";

const PxToPercentage = () => {
  const [pxValue, setPxValue] = useState("");

  const [percentageValue, setPercentage] = useState("");

  const convartPxtoPercentage = (e) => {
    setPxValue(e.target.value);

    setPercentage(e.target.value * 6.25);
  };

  const convartPercentagetoPx = (e) => {
    setPercentage(e.target.value);

    setPxValue(e.target.value / 6.25);
  };

  return (
    <>
      <div className="container">
        <h1>PX to Percentage</h1>

        <input
          type="number"
          placeholder="PX"
          className="input"
          value={pxValue}
          onChange={convartPxtoPercentage}
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
          placeholder="%"
          className="input"
          value={percentageValue}
          onChange={convartPercentagetoPx}
        />
      </div>
    </>
  );
};

export default PxToPercentage;
