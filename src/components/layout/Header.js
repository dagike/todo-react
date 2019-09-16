import React from "react";
import { FaBars } from "react-icons/fa";
import { useSidebarValue } from "../../context";

export default () => {
  const { sidebar, setSidebar } = useSidebarValue();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todo" />
        </div>
        <div className="menu" onClick={() => setSidebar(!sidebar)}>
          <FaBars />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="quick-add-task-action">
              +
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
