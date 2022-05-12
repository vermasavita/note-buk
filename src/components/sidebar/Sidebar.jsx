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
          <Link to="/" className="sidebarText">
            Label
          </Link>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-archive-in"></i>
          <Link to="/archive" className="sidebarText">
            Archive
          </Link>
        </li>
        <li className="sidebarListItems">
          <i className="bx bx-trash-alt"></i>
          <Link to="/trash" className="sidebarText">
            Trash
          </Link>
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
