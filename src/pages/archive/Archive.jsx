import { Navbar, SideBar } from "../../components";
import { ArchiveCard } from "./component/ArchiveCard";
import { useEffect } from "react";
import { getAllArchiveNotesHandler } from "../../services";
import { useAuth, useArchive } from "../../context";
const Archive = () => {
  const { authState: {token}} = useAuth();
  const { archiveNoteState: {archive}, archiveNoteDispatch } = useArchive();

  useEffect(() => {
    getAllArchiveNotesHandler(token, archiveNoteDispatch);
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
            <h2>Archive Notes</h2>
            <div className="saved-notes">
              {archive.map((archiveData) => (
                <ArchiveCard
                  key={archiveData._id}
                  archiveData={archiveData}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Archive };
