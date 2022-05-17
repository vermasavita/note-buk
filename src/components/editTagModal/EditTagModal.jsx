import { useState } from "react";
import { toast } from "react-toastify";
import { useTag } from "../../context";
import "./edit-tag-modal.css";
import { capitalizeStr } from "../../utils/capitalizeStr";

const EditTagModal = ({ tagModal, setTagModal }) => {
  const [newTag, setNewTag] = useState("");
  const {
    tagState: { tags },
    tagDispatch,
  } = useTag();

  const addNewTag = () => {
    const trimTag = newTag.trim().toLowerCase();
    if (trimTag !== "") {
      if (!tags.find((tag) => tag === trimTag)) {
        tagDispatch({
          type: "ADD_TAG",
          payload: newTag.trim().toLowerCase(),
        });
        setNewTag("");
        setTagModal(false);
      } else {
        toast.info("Tag Already Exist");
      }
    } else {
      toast.info("Enter a Tag Name");
    }
  };


  return (
    <>
      <div className="modal tagModal">
        <div className="edit-tag-container">
          <div className="modal-header">
            <h1>Edit Tag</h1>
            <button
              className="close-note-btn tag-cloase-btn"
              onClick={() => setTagModal(false)}
            >
              Close
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-header">
              <input
                className="tag-name"
                type="text"
                placeholder="Enter new label..."
                autoFocus
                value={newTag}
                onChange={(event) => setNewTag(event.target.value)}
              />
              <button onClick={addNewTag}>
                <i className="bx bx-check"></i>
              </button>
            </div>
            <div>
              <ul className="tag-list">
                {tags.map((tag) => (
                  <li className="exist-list-item" key={tag}>
                    <span>{capitalizeStr(tag)}</span>
                    <button>
                      <i className="bx bx-x"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {tagModal ? <div onClick={() => setTagModal(false)}> </div> : null}
    </>
  );
};

export { EditTagModal };
