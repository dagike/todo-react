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
          <li>+</li>
          <li>
            <FaDiceD20 />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
