import React from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";
import {
  ProjectsProvider,
  SelectedProjectProvider,
  SidebarProvider
} from "../context";
import "./App.scss";

export default () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <SidebarProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </SidebarProvider>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
