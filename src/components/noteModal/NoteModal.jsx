import { RichTextEditor } from "../richTextEditor/RichTextEditor";
import "./note-modal.css";
import { useAuth, useNote } from "../../context";
import { createNoteHandler, updateNoteHandler } from "../../services";
import { useState } from "react";
import { toast } from "react-toastify";

const NoteModal = ({ setCreateNoteModal, updateNote, setUpdateNote }) => {
  const [newNote, setNewNote] = useState(
    updateNote ?? { title: "", content: "", color: "Default", isPinned: false, }
  );
  const { noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();

  const inputHandler = (event) => {
    const { id, value } = event.target;
    setNewNote((prev) => ({ ...prev, [id]: value }));
  };

  const validateInput = () => {
    if (newNote.title === "") {
      toast.warning("Add Note Title");
    } else if (newNote.content === "") {
      toast.warning("Add Note Content");
    } else {
      return true;
    }
  };

  const callCreateNoteHandler = () => {
    const note = { ...newNote };
    if (validateInput()) {
      updateNote
        ? updateNoteHandler(note, token, noteDispatch)
        : createNoteHandler(note, token, noteDispatch);
      setUpdateNote(null);
      setCreateNoteModal(false);
    }
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Create Note</h1>
          <button
            className="close-note-btn"
            onClick={() => setCreateNoteModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="title"
            value={newNote.title}
            onChange={inputHandler}
          />
          <RichTextEditor
            newNote={newNote}
            setNewNote={setNewNote}
            className={newNote.color}
          />
        </div>
        <div className="note-modal-action-container">
          <div className="options">
            <label htmlFor="tag">Tags: </label>
            <select name="tag" id="tag">
              <option>None</option>
              <option>Home</option>
              <option>Work</option>
            </select>
          </div>
          <div className="options">
            <label htmlFor="tag">Prioriy: </label>
            <select name="tag" id="tag">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="options">
            <label htmlFor="color">Color: </label>
            <select
              name="color"
              id="color"
              value={newNote.color}
              onChange={inputHandler}
            >
              <option>Default</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
              <option value="grey">Grey</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn">Add label</button>
          <button className="btn btn-icon" onClick={callCreateNoteHandler}>
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
