import React from "react";

const Navigation = () => (
  <div>
    <button className="sm:hidden bg-transparent hover:bg-gray-800 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      Menu
    </button>
    <div className="hidden sm:block">
      <nav>
        <a className="navigation__link" href="" title="">
          Home
        </a>
        <a className="navigation__link" href="" title="">
          Posts
        </a>
        <a className="navigation__link" href="" title="">
          About
        </a>
        <a className="navigation__link" href="" title="">
          Contact
        </a>
      </nav>
    </div>
  </div>
);

export default Navigation;
