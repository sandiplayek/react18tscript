import React, { createContext, useState } from "react";
import { Abc } from "./numContext";
import InnerContext from "./InnerContext";
//type contxt = { val: false; funcc: () => {} };
function Context(props: any) {
  //const Abc = createContext<contxt | null>(null);
  const [numcount, setNumcount] = useState<number>(0);

  const setNumber = () => {
    setNumcount(numcount + 1);
  };
  const value = { numcount, setNumber };
  return (
    <div style={{ border: "2px solid yellow" }}>
      <Abc.Provider value={value}>
        <InnerContext />
      </Abc.Provider>
    </div>
  );
}

export default Context;
