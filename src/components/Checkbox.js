import React from "react";
import { firebaseConfig } from "firebase";

export default ({ id }) => {
  const archiveTask = () => {
    firebaseConfig
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({
        archived: true
      });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  );
};
