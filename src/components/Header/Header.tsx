import logo from "../../img/logo.png";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Path } from "../../constants/path";

function Header() {
  return (
    <header className={style.header}>
      <NavLink to={Path.COVID_STATISTICS}>
        <img src={logo} alt="logo" />
      </NavLink>
      <p>STATISTIC</p>
    </header>
  );
}
export default Header;
