import { useState, useEffect, createContext, useContext } from "react";

import Cusines from "./bodyComponets/Cusines";
import Restaurants from "./bodyComponets/Restaurants";
import userContext from "../utils/userContext";

export default function Body() {
  const userData = useContext(userContext);

  return (
    <>
      <input
        className="border"
        type="text"
        onChange={(e) => {
          userData.setUserName(e.target.value);
        }}
      />
      <Restaurants />
      {/* <Cusines /> */}
      {/* <div>partition</div> */}
    </>
  );
}
