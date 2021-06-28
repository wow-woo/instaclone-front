import React from "react";
import { setLogin } from "../apolloClient";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <header>
        <h1>Home</h1>
        <h3>Welcome, baby</h3>
        <button onClick={() => setLogin(false)}>log out</button>
      </header>
    </>
  );
};
