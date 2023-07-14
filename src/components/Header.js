import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Header = () => {
  let [btnName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? '🟢' : '🔴'}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery </Link>
          </li>

          <li className="px-4">Cart</li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
