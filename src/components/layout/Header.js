import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AddTask from "../AddTask";
import { useSidebarValue } from "../../context";

export default () => {
  const { sidebar, setSidebar } = useSidebarValue();
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="todo-react" />
        </div>
        <div className="menu" onClick={() => setSidebar(!sidebar)}>
          <FaBars />
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings__add"
              data-testid="quick-add-task-action"
              onClick={() => {
                setShowQuickAddTask(!showQuickAddTask);
                setShouldShowMain(!shouldShowMain);
              }}
            >
              +
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
