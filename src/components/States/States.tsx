import React from "react";
import { useState, useEffect } from "react";
type authUser = {
  name: string;
  email: string;
};

interface ResponseDatatype {
  useid: number;
  id: number;
  title: string;
  completed: boolean;
}
const States = () => {
  //const [user, setUser] = useState<authUser>({} as authUser);
  const [user, setUser] = useState<authUser | null>(null);
  //const [responseapi, setResponseapi] = useState<[] | null>([]);
  const [responseapi, setResponseapi] = useState<ResponseDatatype[] | null>([]);

  const [name, setName] = useState<string>("sandip");

  const handleLogin = () => {
    setUser({ name: "Sandip", email: "sandip@example.com" });
  };
  const handleLogout = () => {
    setUser(null);
    //setUser({} as authUser);
  };

  useEffect(() => {
    let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos");

    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setResponseapi(d);
      });

    /* ------- in typescript -------
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

  return (
    <div style={{ backgroundColor: "#D9FBD3", color: "black" }}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      {/* <p>User name is : {user.name}</p>
      <p>User email is : {user.email}</p> */}

      <p>User name is : {user?.name}</p>
      <p>User email is : {user?.email}</p>

      {/* {responseapi &&
        responseapi.map(
          (aaa: any, index) =>
            index < 5 && (
              <div key={aaa.id} style={{ textAlign: "left", padding: "2px;" }}>
                {index}--{aaa.title}
              </div>
            )
        )} */}

      {responseapi &&
        responseapi.map(
          (aaa, index) =>
            index < 5 && (
              <div key={aaa.id} style={{ textAlign: "left", padding: "2px;" }}>
                {index}--{aaa.title}
              </div>
            )
        )}
    </div>
  );
};

export default States;
