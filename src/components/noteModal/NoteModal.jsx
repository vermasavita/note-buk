import { RichTextEditor } from "../richTextEditor/RichTextEditor";
import "./note-modal.css";
import { useAuth, useNote } from "../../context";
import { createNoteHandler } from "../../services";
import { useState } from "react";
import { toast } from "react-toastify";

const NoteModal = ({ setCreateNoteModal }) => {
  const { noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();
  const [newNote, setNewNote] = useState({ title: "", content: "" });

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
      createNoteHandler(note, token, noteDispatch);
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
          <RichTextEditor newNote={newNote} setNewNote={setNewNote} />
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
            <label htmlFor="tag">Color: </label>
            <select name="tag" id="tag">
              <option>Red</option>
              <option>Orange</option>
              <option>Pink</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn">Add label</button>
          <button className="btn btn-icon" onClick={callCreateNoteHandler}>
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
