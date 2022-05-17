import axios from "axios";

const restoreFromTrashHandler = async (
  _id,
  token,
  note,
  noteDispatch,
  trashNoteDispatch
) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${_id}`,
      { note },
      {
        headers: { authorization: token },
      }
    );

    if (response.status === 200) {
      noteDispatch({
        type: "RESTORE_TRASHED_NOTE",
        payload: response.data.notes,
      });

      trashNoteDispatch({
        type: "DELETE_FROM_TRASH",
        payload: response.data.trash,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { restoreFromTrashHandler };
