import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Hjem logo</NavLink>
          </li>
          <li>
            <NavLink to="/about">Om Kvitre</NavLink>
          </li>
          <li>
            <NavLink to="/location">Nærmiljøet</NavLink>
          </li>
          <li>
            <NavLink to="/builds">Byggefeltene</NavLink>
          </li>
          <li>
            <NavLink to="/houses">Boligtyper</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
