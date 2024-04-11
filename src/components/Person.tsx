import React from "react";
//study from:
//https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=2
import { personProps } from "../All.types";
//type personProps = { name: { fname: string; lname: string }; id?: number };
// type personProps2 = { fname: string; lname: string }; wrong .....

// const Person = ({ name, id = 5 }: personProps) => {
//   return (
//     <div style={{ border: "1px solid red" }}>
//       Hi {name.fname} {name.lname} {id}
//     </div>
//   );
// };
const Person = (props: personProps) => {
  const { id = 5 } = props;
  return (
    <div style={{ border: "1px solid red" }}>
      Hi {props.name.fname} {props.name.lname} {id}
    </div>
  );
};

export default Person;
