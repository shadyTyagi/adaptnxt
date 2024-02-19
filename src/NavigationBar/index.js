import { RiMenuFoldFill } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import "./index.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div>
        <RiMenuFoldFill className="menu-bar" />
      </div>
      <div>
        <IoMoonOutline className="moon" />
        <GoBell className="bell" />
      </div>
    </nav>
  );
};

export default NavigationBar;
