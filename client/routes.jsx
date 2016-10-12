import React from "react";
import {Route} from "react-router";
import {Home} from "./components/home";
import Hello from "./components/hello";
import World from "./components/world";

export const routes = [
  <Route path="/" component={Home}/>,
  <Route path="hello" component={Hello}/>,
  <Route path="world" component={World}/>
];
