import React, { useState } from "react";
import withCounter from "./withCounter";
interface hocProps {
  handleCounterIncre: () => void;
  handleCounterDecre: () => void;
  counttt: number;
}
const Clickcount = (Hocprops: hocProps) => {
  // const [counttt, setCounttt] = useState<number>(0);
  // const Incre = () => {
  //   setCounttt(counttt + 1);
  // };

  // const Decre = () => {
  //   setCounttt(counttt - 1);
  // };

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Higher Order Count {Hocprops.counttt}</h2>
      <button onClick={Hocprops.handleCounterIncre}>Incre</button>
      <button onClick={Hocprops.handleCounterDecre}>Decre</button>
    </div>
  );
};

export default withCounter(Clickcount, 2);
