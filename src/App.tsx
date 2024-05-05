import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Inner } from "./components/Inner";
import { useState, useEffect } from "react";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Simplest from "./components/Simplest";
import Status from "./components/Status";
import { Heading } from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import ChildComponent from "./components/ChildComponent";
import Input from "./components/Input";
import Css from "./components/Css";
import States from "./components/States/States";
import useSandip from "./components/Hooks/useSandip";
import UseReducer from "./components/UseReducer";

function App() {
  const [value, setValue] = useState<number>(0);
  const [resp, setResp] = useState<[] | null>([]);
  const [name, setName] = useState<string>("sandip");

  const [count, increment, decremet] = useSandip(5);

  const personName = {
    fname: "Will",
    lname: "Smith",
  };

  const personNameList = [
    {
      fname: "Will",
      lname: "Smith",
    },
    {
      fname: "Bruce",
      lname: "Wills",
    },
    {
      fname: "Arnold",
      lname: "Swatzinacar",
    },
  ];

  useEffect(() => {
    let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos");

    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setResp(d);
      });

    /* ------- or -------
      let fetchRes: Promise<Response> = fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
  
      fetchRes
        .then((res:Response) => res.json())
        .then((d:any) => {
          console.log(d);
          setResp(d);
        });*/
  }, []);

  const setNameState = (
    ev: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    console.log("yepp", ev);
    setName(name);
  };

  //console.log(resp);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "1px solid yellow" }}>
          useSandip hook used
          <div>Count value {count}</div>
          <div>
            <button onClick={increment}>Increment</button>
          </div>
          <div>
            <button onClick={decremet}>Decrement</button>
          </div>
        </div>

        <UseReducer />

        <States />
        {/* pssing events as props to a component */}
        <Button
          handleClick={(event, id) => {
            console.log("button clicked", event, id);
          }}
        />

        {/* Modify parent component from a child component */}
        <p>returned from Child component - {name}</p>
        <ChildComponent handleClick2={setNameState} />

        <Input value="" handlechange={(event) => console.log(event)} />
        <Person name={personName} />
        <PersonList names={personNameList} />
        <Status status="success" />

        {/* pssing children props to a component */}
        <Heading>Placeholder text</Heading>

        {/* pssing component as props to a component */}
        <Oscar>
          <Heading>Oscar goes to Leonardo Decaprio!</Heading>
        </Oscar>

        <Css styles={{ border: "1px solid white", padding: "1rem" }} />
        {/* <Inner data={value} other="sandip" name={personName} res={resp} /> */}

        {/* <Simplest
          name={"Paglu"}
          lname={"Dance Dance"}
          names={personName}
          res={resp}
        /> */}
      </header>
    </div>
  );
}

export default App;
