import { useState } from "react";
import { Navbar, NoteCard, SideBar, NoteModal } from "../../components";
import "./notes.css";

const Notes = () => {
  const [createNoteModal, setCreateNoteModal] = useState(false);
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
            <div className="notes-category">
              <h2>Pinned Notes</h2>
              <div className="saved-notes">
                <NoteCard />
                <NoteCard />
              </div>
            </div>

            <div className="notes-category">
              <h2>All Notes</h2>
              <div className="saved-notes">
                <NoteCard />
                <NoteCard />
              </div>
            </div>
          </div>
        </div>
        {createNoteModal ? (
          <NoteModal setCreateNoteModal={setCreateNoteModal} />
        ) : null}
      </div>
    </>
  );
};

export { Notes };
