import { useSidebar } from "../../context";
import { Link } from "react-router-dom";
import "./sidebar.css";
const SideBar = () => {
  const { sidebar } = useSidebar();

  return (
    <div className={`sidebar ${sidebar ? "active" : ""}`}>
      <ul>
        <li className="sidebarListItems">
          <i className="bx bx-bulb"></i>

          <Link to="/" className="sidebarText">
            Notes
          </Link>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-purchase-tag"></i>
          <div className="sidebarText">Label</div>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-archive-in"></i>
          <div className="sidebarText">Archive</div>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-trash-alt"></i>
          <div className="sidebarText">Trash</div>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-log-in-circle"></i>

          <div className="sidebarText">Logout</div>
        </li>
      </ul>
    </div>
  );
};

export { SideBar };
