import "./note-card.css";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import {
  archiveNoteHandler,
  notePinHandler,
  trashNoteHandler,
} from "../../services";
import { useArchive, useAuth, useNote, useTrash } from "../../context";
import { capitalizeStr } from "../../utils/capitalizeStr";
const NoteCard = ({ note, setUpdateNote, setCreateNoteModal }) => {
  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();
  const { trashNoteDispatch } = useTrash();
  const { archiveNoteDispatch } = useArchive();

  //trash
  const callTrashNoteHandler = (e) => {
    e.preventDefault();
    trashNoteHandler(note, token, trashNoteDispatch, noteDispatch);
  };

  //archive
  const callArchiveNoteHandler = (e) => {
    e.preventDefault();
    archiveNoteHandler(note, token, archiveNoteDispatch, noteDispatch);
  };

  const updateNoteHandler = (e) => {
    e.preventDefault();
    setUpdateNote(note);
    setCreateNoteModal(true);
  };

  const callNotePinHandler = (e) => {
    e.preventDefault();
    notePinHandler(note, token, noteDispatch);
  };

  const getDate = (date) => {
    const currTime = date.slice(11, 16);
    const currDate = date.slice(0, 10).split("-").reverse().join("-");
    return ` ${currDate} ${currTime}`;
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
            <div>{HtmlParser(note.content)}</div>
          </div>
          {note.tag !== "" ? (
            <div className="tagName">{capitalizeStr(note.tag)}</div>
          ) : null}
          <div className="note-date">
            <p>{getDate(note.date)}</p>
            <div className="note-action-container">
              <button onClick={updateNoteHandler}>
                <i className="bx bx-pencil"></i>
              </button>
              <button onClick={callArchiveNoteHandler}>
                <i className="bx bx-archive-in"></i>
              </button>
              <button onClick={callTrashNoteHandler}>
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
