import axios from "axios";

const deleteFromTrashHandler = async (note, token, trashNoteDispatch) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${note._id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
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
