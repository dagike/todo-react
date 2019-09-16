import React from "react";
import { FaDiceD20 } from "react-icons/fa";
import { useSidebarValue } from "../../context";

export default () => {
  const { sidebar, setSidebar } = useSidebarValue();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo" onClick={() => setSidebar(!sidebar)}>
          <img src="/images/logo.png" alt="Todo" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="quick-add-task-action">
              +
            </li>
            <li className="setting__dark-mode" data-testid="dark-mode-action">
              <FaDiceD20 />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
