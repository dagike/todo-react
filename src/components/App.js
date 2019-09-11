import React from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "../context";
import "./App.scss";

export default () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
