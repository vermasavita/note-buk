import { useState, useEffect } from "react";
import { Navbar, NoteCard, SideBar, NoteModal } from "../../components";
import "./notes.css";
import { useAuth, useNote } from "../../context";
import { getAllNotesHandler } from "../../services";

const Notes = () => {
  const [createNoteModal, setCreateNoteModal] = useState(false);
  const [updateNote, setUpdateNote] = useState(null);

  const {
    noteState: { notes },
    noteDispatch,
  } = useNote();

  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    getAllNotesHandler(token, noteDispatch);
  }, []);
  return (
    <>
      <Navbar />
      <div className="contaiiner">
        <div>
          <SideBar />
        </div>
        <div className="sub-container">
          <div className="create-note-head">
            <h1>Notes</h1>
            <div className="note-head-action">
              <button className="btn btn-icon">
                <i className="bx bx-filter"></i>
                Filter
              </button>
              <button
                className="btn btn-icon note-btn"
                onClick={() => setCreateNoteModal(true)}
              >
                <i className="bx bx-plus"></i>Create Note
              </button>
            </div>
          </div>
          <div className="notes-category-container">
            {/* <div className="notes-category">
              <h2>Pinned Notes</h2>
              <div className="saved-notes">
                <NoteCard />
              </div>
            </div> */}

            <div className="notes-category">
              <h2>All Notes</h2>
              <div className="saved-notes">
                {notes.map((note) => (
                  <NoteCard
                    key={note._id}
                    {...note}
                    note={note}
                    setCreateNoteModal={setCreateNoteModal}
                    setUpdateNote={setUpdateNote}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {createNoteModal ? (
          <NoteModal
            setCreateNoteModal={setCreateNoteModal}
            updateNote={updateNote}
            setUpdateNote={setUpdateNote}
          />
        ) : null}
        {/* {createNoteModal ? (
          <NoteModal
            setCreateNoteModal={setCreateNoteModal}
            updateNote={updateNote}
            setUpdateNote={setUpdateNote}
          />
        ) : null} */}
      </div>
    </>
  );
};

export { Notes };
