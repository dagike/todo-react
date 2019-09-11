import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import Project from "./Project";

export default ({ activeValue = true }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue;
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map(p => (
      <li
        key={p.projectId}
        data-doc-id={p.docId}
        data-testid="project-aciton"
        className={`sidebar__project ${active === p.projectId ? "active" : ""}`}
        onCLick={() => {
          setActive(p.projectId);
          setSelectedProject(p.projectId);
        }}
        onKeyDown={() => {
          setActive(p.projectId);
          setSelectedProject(p.projectId);
        }}
      >
        <Project project={p} />
      </li>
    ))
  );
};
