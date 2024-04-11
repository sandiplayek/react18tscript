import React from "react";
import { useState } from "react";
type authUser = {
  name: string;
  email: string;
};
const States = () => {
  const [user, setUser] = useState<authUser | null>(null);
  //const [user, setUser] = useState<authUser>({} as authUser);

  const handleLogin = () => {
    setUser({ name: "Sandip", email: "sandip@example.com" });
  };
  const handleLogout = () => {
    setUser(null);
    //setUser({} as authUser);
  };

  return (
    <div style={{ backgroundColor: "#D9FBD3", color: "black" }}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <p>User name is : {user?.name}</p>
      <p>User email is : {user?.email}</p>

      {/* <p>User name is : {user.name}</p>
      <p>User email is : {user.email}</p> */}
    </div>
  );
};

export default States;
