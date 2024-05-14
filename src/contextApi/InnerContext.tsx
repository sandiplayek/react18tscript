import React from "react";
import { useContext } from "react";
import { Abc } from "./numContext";

function InnerContext(props: any) {
  let { numcount, setNumber } = useContext(Abc);
  return (
    <div>
      <p>InnerContext {numcount}</p>
      <button onClick={setNumber}>Hello</button>
    </div>
  );
}

export default InnerContext;
