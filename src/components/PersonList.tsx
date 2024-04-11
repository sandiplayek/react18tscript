import React from "react";
//type lists = { names: { fname: string; lname: string }[] };
import { names } from "../All.types";
type lists = { names: names[] };

function PersonList(props: lists) {
  return (
    <div style={{ border: "1px solid blue" }}>
      {props.names.map((propval, i) => (
        <h2 key={propval.fname}>
          {propval.fname} {propval.lname}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
