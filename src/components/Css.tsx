import React from "react";
import { CssProps } from "../All.types";
// export type CssProps = {
//     styles: React.CSSProperties;
//   };
function Css(props: CssProps) {
  return <div style={props.styles}>CSS components</div>;
}

export default Css;
