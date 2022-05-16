import "./note-card.css";
import ReactHtmlParser from "react-html-parser";
const NoteCard = ({
  note,
  setUpdateNote,
  setCreateNoteModal,
}) => {

  const updateNoteHandlerR = (e) => {
    e.preventDefault();
    setUpdateNote(note);
    setCreateNoteModal(true);
  };

  
  return (
    <>
      <div className="note-card-container" key={note._id}>
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>{note.title}</h1>
              <div className="note-title-action">
                <span>meduim</span>
                <span>
                  <i className="bx bxs-pin"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="form-control">
            <p>{ReactHtmlParser(note.content)}</p>
          </div>
          <div className="note-date">
            <p>Created on 26/10/2020</p>
            <div className="note-action-container">
              <button onClick={updateNoteHandlerR}>
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
