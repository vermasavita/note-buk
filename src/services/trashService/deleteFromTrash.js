import axios from "axios";

const deleteFromTrashHandler = async (_id, token, trashNoteDispatch) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200 || response.status === 201) {
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

export { deleteFromTrashHandler };
