import React from "react";
type SimplestProps = {
  name: string;
  lname: string;
  names: { fname: string; lname: string };
};
function Simplest(props: any) {
  return (
    <div style={{ border: "1px solid red" }}>
      Hello Simplest! {props.name} {props.lname}
      <div>
        Hi {props.names.fname} {props.names.lname}
      </div>
      {props.res &&
        props.res.map((aaa: any) => <div key={aaa.id}>{aaa.title}</div>)}
    </div>
  );
}

export default Simplest;
