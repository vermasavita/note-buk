import "./note-card.css";
import ReactHtmlParser from "react-html-parser";
const NoteCard = ({ _id, title, content }) => {
  return (
    <>
      <div className="note-card-container" key={_id}>
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>{title}</h1>
              <div className="note-title-action">
                <span>meduim</span>
                <span>
                  <i className="bx bxs-pin"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="form-control">
            <p>{ReactHtmlParser(content)}</p>
          </div>
          <div className="note-date">
            <p>Created on 26/10/2020</p>
            <div className="note-action-container">
              <button>
                <i className="bx bx-pencil"></i>
              </button>
              <button>
                <i className="bx bx-archive-in"></i>
              </button>
              <button>
                <i className="bx bx-trash-alt"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { NoteCard };
