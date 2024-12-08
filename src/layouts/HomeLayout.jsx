import { NavLink, Outlet } from "react-router";
import Header from "../components/Header.jsx";

function HomeLayout() {
  return (
    <div className="container">
      <div className="lower-part">
        <div className="sidebar">
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/vision">Vision</NavLink>
            </li>
            <li>
              <NavLink to="/endpoints">Endpoints</NavLink>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
