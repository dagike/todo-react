import React, { useState } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import ProjectList from "../ProjectList";
import AddProject from "../AddProject";

export default () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("INBOX");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          className={active === "inbox" ? "active" : ""}
          data-testid="inbox"
          onClick={() => {
            setActive("inbox");
            setSelectedProject("INBOX");
          }}
        >
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          className={active === "today" ? "active" : ""}
          data-testid="today"
          onClick={() => {
            setActive("today");
            setSelectedProject("TODAY");
          }}
        >
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          className={active === "next_7" ? "active" : ""}
          data-testid="next_7"
          onClick={() => {
            setActive("next_7");
            setSelectedProject("NEXT_7");
          }}
        >
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 Days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <FaChevronDown className={!showProjects ? "hidden-projects" : ""} />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <ProjectList />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
