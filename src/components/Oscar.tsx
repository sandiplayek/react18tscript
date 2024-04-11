import React from "react";
// interface ComponentAsProps {
//   children: React.ReactNode;
// }
import { ComponentAsProps } from "../All.types";
function Oscar(props: ComponentAsProps) {
  return <div>{props.children}</div>;
}

export default Oscar;
