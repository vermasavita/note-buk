import axios from "axios";

const trashNoteHandler = async (
  _id,
  token,
  trashNoteDispatch,
  noteDispatch
) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/trash/${_id}`,
      headers: { authorization: token },
    });

    if (response.status === 201) {
      localStorage.setItem("note", response.data.notes);
      trashNoteDispatch({
        type: "MOVE_TO_TRASH",
        payload: response.data.trash,
      });
      noteDispatch({
        type: "DELETE_NOTE_FROM_HOME",
        payload: response.data.notes,
      });
    } else throw new Error();
  } catch (error) {
    console.log(error.response);
  }
};

export { trashNoteHandler };
