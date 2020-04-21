import React, { createContext } from "react";
// import { useHistory } from "react-router-dom";

export const CredentialsContext = createContext();

const CredentialsContextProvider = (props) => {
  const APP_KEY = "d2cf812100729746a80f302c5ecd16f2";
  const APP_ID = "560a76dc";

  // const history = useHistory();

  return (
    <CredentialsContext.Provider value={{ APP_ID, APP_KEY }}>
      {props.children}
    </CredentialsContext.Provider>
  );
};

export default CredentialsContextProvider;
