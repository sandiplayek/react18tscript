import React from "react";
import { propTypes } from "../All.types";

// type propTypes = {
//   handleClick2: (e: React.MouseEvent<HTMLButtonElement>, name: string) => void;
// };

function ChildComponent(props: propTypes) {
  return (
    <div>
      <button onClick={(e) => props.handleClick2(e, "Sumana")}>
        Clicked from child
      </button>
    </div>
  );
}

export default ChildComponent;
