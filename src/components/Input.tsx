import React from "react";
// type typeInput = {
//   value: string;
//   handlechange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };
import { typeInput } from "../All.types";
function Input(props: typeInput) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
}

export default Input;
