import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar, NoteCard, SideBar } from "../../components";
import { useNote } from "../../context";
import { NoteModal } from "../../components";
import { capitalizeStr } from "../../utils/capitalizeStr";

const Tag = () => {
  const {
    noteState: { notes },
  } = useNote();

  const [updateNote, setUpdateNote] = useState(false);
  const [createNoteModal, setCreateNoteModal] = useState(false);
  const { tagName } = useParams();
  return (
    <>
      <Navbar />
      <div className="contaiiner">
        <div>
          <SideBar />
        </div>
        <div className="sub-container">
          {notes.length > 0 ? (
            <div className="notes-category">
              <h1>{capitalizeStr(tagName)} Notes</h1>
              {notes
                .filter((note) => note.tag.includes(tagName))
                .map((note) => (
                  <div className="saved-notes">
                    <NoteCard
                      key={note._id}
                      note={note}
                      setCreateNoteModal={setCreateNoteModal}
                      setUpdateNote={setUpdateNote}
                    />
                  </div>
                ))}
            </div>
          ) : (
            <div>
              <h2>This tag does not have any notes.</h2>
            </div>
          )}
        </div>
      </div>
      {createNoteModal ? (
        <NoteModal
          setCreateNoteModal={setCreateNoteModal}
          updateNote={updateNote}
          setUpdateNote={setUpdateNote}
        />
      ) : null}
    </>
  );
};

export { Tag };
