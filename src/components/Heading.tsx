// @flow
import * as React from "react";
// type ChildrenProps = { children: string };
import { ChildrenProps } from "../All.types";
export const Heading = (props: ChildrenProps) => {
  return <div style={{ border: "2px solid pink" }}>{props.children}</div>;
};
