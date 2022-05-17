const trashReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_TRASH":
      return { ...state, trashedNote: action.payload };
    case "DELETE_FROM_TRASH":
      return { ...state, trashedNote: action.payload };
  }
};

export { trashReducer };
