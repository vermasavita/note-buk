const archiveNoteReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_ARCHIVE":
      return { ...state, archive: action.payload };
    case "DELETE_FROM_ARCHIVE":
      return { ...state, archive: action.payload };
  }
};

export { archiveNoteReducer };
