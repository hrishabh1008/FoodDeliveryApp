// import { useState } from 'react'
// import React from 'react'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css"; //css file
import Memo from "./components/Memo";
import Ref from "./components/Ref";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState, useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./components/redux/appStore";

function App() {
  const [userName, setUserName] = useState("admin");

  let rootElement = document.getElementById("root");
  console.log(rootElement);

  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />

          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
}

export default App;

{
  /* <Memo />
<Ref /> */
}
