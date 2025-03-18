// import { useState, useEffect } from "react"

import Cusines from "./bodyComponets/Cusines";
import Restaurants from "./bodyComponets/Restaurants";

export default function Body() {
  return (
    <>
      <p>this is the main BODY component</p>
      <Restaurants />
      <Cusines />
      <div>partition</div>
    </>
  );
}
