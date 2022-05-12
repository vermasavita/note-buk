import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="hero">
      <div className="layout-navbar">
        <h1 className="layout-logo">NoteBook</h1>
        <button type="button">GitHub</button>
      </div>
      <div className="layout-content">
        <h2>
          Share your thought's
          <br />
          wherever you are
        </h2>
        <button type="button" className="btn">
          <Link to="/login" className="try-book-btn">
            Try NoteBook
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Home };
