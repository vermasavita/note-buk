import axios from "axios";
import { toast } from "react-toastify";

const deleteFromArchivesHandler = async (
  note,
  token,
  archiveNoteDispatch,
  trashNoteDispatch
) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
      archiveNoteDispatch({
        type: "DELETE_FROM_ARCHIVE",
        payload: response.data.archives,
      });

      trashNoteDispatch({
        type: "MOVE_TO_TRASH",
        payload: response.data.trash,
      });
      toast.success("Note deleted from archive");
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { deleteFromArchivesHandler };
