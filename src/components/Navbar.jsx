export default function Navbar() {
  return (
    <nav className="bg-base-100 z-50 shadow-2xl fixed top-0 w-full">
      <div className="navbar max-w-7xl w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Sortify</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Login</a>
        </div>
      </div>
    </nav>
  );
}
