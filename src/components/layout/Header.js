import React from "react";
import { FaDiceD20 } from "react-icons/fa";

export default () => (
  <header className="header" data-testid="header">
    <nav>
      <div className="logo">
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
