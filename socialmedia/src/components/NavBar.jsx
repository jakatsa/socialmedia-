import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const NavBar = () => {
  const [user] = useAuthState(auth);
  const signOutUser = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width="100" height="100" />
        <button onClick={signOutUser}>sign out</button>
      </div>
    </div>
  );
};
