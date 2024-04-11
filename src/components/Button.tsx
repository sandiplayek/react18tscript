import React from "react";
// interface buttonProps {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
// }
import { buttonProps } from "../All.types";
const Button = (props: buttonProps) => {
  return (
    <div>
      <button onClick={(e) => props.handleClick(e, 2)}>Click Me</button>
    </div>
  );
};

export default Button;
