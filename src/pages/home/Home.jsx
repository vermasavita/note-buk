import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="layout-navbar">
        <h1 className="layout-logo">NoteBook</h1>
        <button type="button">
          <a href="https://github.com/vermasavita" target="_blank" className="color">GitHub</a>
        </button>
      </div>
      <div className="layout-content">
        <h2>
          Share your thought's
          <br />
          wherever you are
        </h2>
        <button type="button" className="btn" onClick={() => navigate("/login")}>
            Try NoteBook
        </button>
      </div>
    </div>
  );
};

export { Home };
