import "./note-card.css";
import ReactHtmlParser from "react-html-parser";
import { notePinHandler } from "../../services";
import { useAuth, useNote } from "../../context";
const NoteCard = ({ note, setUpdateNote, setCreateNoteModal }) => {
  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();

  const updateNoteHandlerR = (e) => {
    e.preventDefault();
    setUpdateNote(note);
    setCreateNoteModal(true);
  };

  const callNotePinHandler = (e) => {
    e.preventDefault();
    notePinHandler(note, token, noteDispatch);
  };
  return (
    <>
      <div className={`note-card-container ${note.color}`} key={note._id}>
        <form>
          <div className="form-control">
            <div className="note-title">
              <h1>{note.title}</h1>
              <div className="note-title-action">
                <span className={`${note.priority}`}>{note.priority}</span>
                <button
                  className="pin-btn"
                  title="Pin"
                  onClick={callNotePinHandler}
                >
                  <i
                    className={`${note.isPinned ? "bx bxs-pin" : "bx bx-pin"}`}
                  ></i>
                </button>
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
