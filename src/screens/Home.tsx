import React from "react";

interface HomeProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Home: React.FC<HomeProps> = ({ setLoggedIn }) => {
  return <h1>Home</h1>;
};
