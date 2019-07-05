import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => (
  <header className="flex justify-between items-center pt-4">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
