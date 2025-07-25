import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar position-fixed top-0 w-100 z-3 navbar-expand-lg py-4">
      <div className="container">
        <Link className="navbar-brand text-white fs-1 fw-bold" to={"/"}>
          Start Framework
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3 myActive '
                    : "nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3"
                }
                aria-current="page"
                to={"/about"}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3 myActive'
                    : "nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3"
                }
                to={"/portfolio"}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3 myActive'
                    : "nav-link text-white fs-4 fw-bold me-4 px-2 rounded-3"
                }
                to={"/contact"}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
