import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

export default function Header() {
  const body = document.getElementsByTagName("body");
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const userdata = useContext(userContext);
  console.log(userdata);

  return (
    <header className="flex justify-around border-b-4 border-blue-400 gap-10">
      <Link className="self-center" to="/">
        <img
          className="inline-block w-18"
          src="https://img.icons8.com/?size=100&id=zSkutYYVkCzj&format=png&color=000000"
          alt="foodDeliveryICON"
        />
        <h1 className=" font-bold text-2xl inline-block">Food Delivery App</h1>
      </Link>

      <nav className="self-center p-2 ">
        <a href="">{userdata.loggedInUser}</a>
        <button
          onClick={() => {
            setisDarkTheme(!isDarkTheme);

            if (isDarkTheme) {
              body[0].style.backgroundColor = "#bebec9";
            } else {
              body[0].style.backgroundColor = "#ffffff";
            }
          }}
        >
          <img
            className="inline-block w-10"
            src="https://img.icons8.com/?size=100&id=20013&format=png&color=000000"
            alt="toggle"
          />
        </button>
        <input
          className=" border-1 text-center w-96 m-3"
          type="text"
          placeholder="SEARCH ALL"
        />

        <Link className="m-3" to="/offers">
          <img
            className="inline-block w-10"
            src="https://img.icons8.com/?size=100&id=107730&format=png&color=000000"
            alt=""
          />
          Offers
        </Link>

        <a className="m-3" href="/help">
          <img
            className="inline-block w-10"
            src="https://img.icons8.com/?size=100&id=646&format=png&color=000000"
            alt=""
          />
          Help
        </a>

        <Link className="m-3" to="/signin">
          <img
            className="inline-block w-10"
            src="https://img.icons8.com/?size=100&id=26218&format=png&color=000000"
            alt=""
          />
          Sign In
        </Link>

        <Link className="m-3" to="/cart">
          <img
            className="inline-block w-10"
            src="https://img.icons8.com/?size=100&id=9671&format=png&color=000000"
            alt=""
          />
          Cart
        </Link>
      </nav>
    </header>
  );
}
