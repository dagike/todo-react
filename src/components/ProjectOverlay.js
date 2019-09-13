import React from "react";
import { useProjectsValue } from "../context";

export default ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(p => (
            <li
              key={p.projectId}
              data-testid="project-overlay-action"
              onClick={() => {
                setProject(p.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
