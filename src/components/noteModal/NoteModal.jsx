import { RichTextEditor } from "../richTextEditor/RichTextEditor";
import "./note-modal.css";

const NoteModal = ({ setCreateNoteModal }) => {
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
          <input type="text" placeholder="Title" className="title" />
          <RichTextEditor/>
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
          <button className="btn btn-icon">Create Note</button>
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
