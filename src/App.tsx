import React from "react";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/blog" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
