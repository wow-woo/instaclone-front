import React from "react";

interface LoginProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = ({ setLoggedIn }) => {
  return <h1>LogIn</h1>;
};
