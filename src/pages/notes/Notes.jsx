import { useState, useEffect } from "react";
import { Navbar, NoteCard, SideBar, NoteModal, Filter } from "../../components";
import "./notes.css";
import { useAuth, useNote } from "../../context";
import { getAllNotesHandler } from "../../services";
import { getPinnedAndUnpinnedNotes } from "../../utils/pinNote";

const Notes = () => {
  const [createNoteModal, setCreateNoteModal] = useState(false);
  const [updateNote, setUpdateNote] = useState(null);
  const [ showFilter, setShowFilter ] = useState(false);

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

  //pinNote
  const { pinNote, unpinNote } = getPinnedAndUnpinnedNotes(notes);
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
              <button className="btn btn-icon" onClick={() => setShowFilter((prev) => !prev)}>
                <i className="bx bx-filter"></i>
                Filter
              </button>
              <button
                className="btn btn-icon note-btn"
                // onClick={() => setCreateNoteModal(true)}
              >
                <i className="bx bx-plus"></i>Create Note
              </button>
              {/* <div>
                <Filter/>
              </div> */}
            </div>
          </div>
          <div className="notes-category-container">
            {pinNote.length > 0 ? (
              <div className="notes-category">
                <h2>Pinned Notes</h2>
                <div className="saved-notes">
                  {pinNote.map((note) => (
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
            ) : null}

            <div className="notes-category">
              {unpinNote.length > 0 ? (
                <>
                  <h2>All Notes</h2>
                  <div className="saved-notes">
                    {unpinNote.map((note) => (
                      <NoteCard
                        key={note._id}
                        {...note}
                        note={note}
                        setCreateNoteModal={setCreateNoteModal}
                        setUpdateNote={setUpdateNote}
                      />
                    ))}
                  </div>
                </>
              ) : null}
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
      </div>
    </>
  );
};

export { Notes };
