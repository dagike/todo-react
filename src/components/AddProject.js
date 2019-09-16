import React, { useState } from "react";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";
import firebaseConfig from "../firebase";

const USERID = "GOTtH8V4c5RP1TLz2ueh";

export default ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { projects, setProjects } = useProjectsValue();

  const addProject = () => {
    projectName &&
      firebaseConfig
        .firestore()
        .collection("projects")
        .add({
          projectId,
          name: projectName,
          userId: USERID
        })
        .then(() => {
          setProjects([...projects]);
          setProjectName("");
          setShow(false);
        });
  };
  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            className="add-project__name"
            data-testid="project-name"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>
          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        className="add-project__text"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  );
};
