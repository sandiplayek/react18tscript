import React from "react";
// type statusProps = {
//   status: "loading" | "success" | "error";
// };
import { statusProps } from "../All.types";
function Status(props: statusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading..";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else if (props.status === "error") {
    message = "Error data fetching!";
  }
  return (
    <div style={{ border: "1px solid yellow", padding: "2px" }}>
      <h2>{message}</h2>
    </div>
  );
}

export default Status;
