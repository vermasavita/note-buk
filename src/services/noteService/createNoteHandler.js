import axios from "axios";

const createNoteHandler = async (note, token, noteDispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note: note },
      { headers: { authorization: token } }
    );

    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("note", response.data.notes);
      noteDispatch({ type: "ADD_NOTES", payload: response.data.notes });
    } else throw new Error();
  } catch (error) {
    console.log(error);
  }
};

export { createNoteHandler };
