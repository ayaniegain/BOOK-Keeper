import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md" aria-label="Main navigation">
      <NavLink to={"/"} className="text-xl font-bold text-green-600" aria-label="Go to Home">
        📕KEEP
      </NavLink>
      <div>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          <NavLink
            to={"/"}
            tabIndex={0}
            aria-label="Home page"
            className={({ isActive }) =>
              (isActive
                ? "text-blue-500 font-bold underline"
                : "text-black") +
              " px-2 py-1 transition-colors duration-200"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/favourite"}
            tabIndex={0}
            aria-label="Favourite books page"
            className={({ isActive }) =>
              (isActive
                ? "text-blue-500 font-bold underline"
                : "text-black") +
              " px-2 py-1 transition-colors duration-200"
            }
          >
            <li>Favourite</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
