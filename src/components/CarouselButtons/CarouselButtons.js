import * as React from "react";

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {/* <h4>These buttons can be positioned anywhere you want on the screen</h4> */}
      <button onClick={previous} className="prev">Prev</button>
      <button onClick={next} className="next">Next</button>
    </div>
  );
};

export {
  CustomButtonGroupAsArrows,
};