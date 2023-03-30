import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#181818]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-transparent border-none hover:bg-transparent text-white lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/'} className="btn bg-[#181818] text-[#fff] hover:bg-red-500 hover:text-white">Log out</Link>
            </li>
          </ul>
        </div>
        <a className="font-semibold text-white normal-case text-xl ml-10">CONTACT</a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end">
        <Link to={'/'} className="btn bg-[#FFF] text-[#181818] hover:bg-red-500 mr-10 hover:text-white">Log out</Link>
      </div>
    </div>
  );
};

export default Navbar;
