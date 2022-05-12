import { Navbar, NoteCard, SideBar } from "../../components";
import "./notes.css";

const Notes = () => {
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
              <button class="btn btn-icon">
                <i class="bx bx-filter"></i>
                Filter
              </button>
              <button class="btn btn-icon note-btn">
                <i class="bx bx-plus"></i>Create Note
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
      </div>
    </>
  );
};

export { Notes };
