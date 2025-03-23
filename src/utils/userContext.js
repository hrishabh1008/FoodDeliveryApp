import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Hrishabh",
  printName: function () {
    console.log("Text Inside the Context");
  },
});

export default userContext;
