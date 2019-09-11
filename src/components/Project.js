import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import firebaseConfig from "../firebase";
import { useProjectsValue, useSelectedProjectValue } from "../context";

export default ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = docId => {
    firebaseConfig
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProject("INBOX");
      });
  };

  const { name, docId } = project;
  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal__inner">
            <p>Are you sure you want to delete this project?</p>
            <button type="button" onClick={() => deleteProject(docId)}>
              Delete
              <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
            </button>
          </div>
        )}
      </span>
    </>
  );
};
