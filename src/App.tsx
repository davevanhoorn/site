import React from "react";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div className="container max-w-3xl">
        <Header />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
