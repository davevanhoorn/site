import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { withRouter } from "react-router-dom";

const Header = (props: any) => (
  <header className="flex justify-between items-center pt-4">
    <Logo />
    <Navigation location={props.location.pathname} />
  </header>
);

export default withRouter(Header);
