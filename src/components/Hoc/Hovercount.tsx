import React, { useState } from "react";
import withCounter from "./withCounter";
interface hocProps {
  handleCounterIncre: () => void;
  handleCounterDecre: () => void;
  counttt: number;
}
const Hovercount = (hocProps: hocProps) => {
  // const [counttt, setCounttt] = useState<number>(0);
  // const Incre = () => {
  //   setCounttt(counttt + 1);
  // };

  // const Decre = () => {
  //   setCounttt(counttt - 1);
  // };

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Higher Order Count {hocProps.counttt}</h2>
      <button onMouseOver={hocProps.handleCounterIncre}>Hover</button>
      <button onMouseOver={hocProps.handleCounterDecre}>Decre</button>
    </div>
  );
};

export default withCounter(Hovercount, 2);
