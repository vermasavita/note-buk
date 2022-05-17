import { Navbar, SideBar } from "../../components";
import { TrashCard } from "./component/TrashCard";
import { getAllTrashNotesHandler } from "../../services";
import { useAuth, useTrash } from "../../context";
import { useEffect } from "react";
const Trash = () => {
  const { trashNoteDispatch } = useTrash();
  const { authState: { token }} = useAuth();

  useEffect(() => {
    getAllTrashNotesHandler(token, trashNoteDispatch);
  }, []);
  return (
    <>
      <Navbar />
      <div className="contaiiner">
        <div>
          <SideBar />
        </div>
        <div className="sub-container">
          <div className="notes-category">
            <h1>Trash Notes</h1>
            <div className="saved-notes">
              <TrashCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Trash };
