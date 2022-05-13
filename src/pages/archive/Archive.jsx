import { Navbar, SideBar } from "../../components";
import { ArchiveCard } from "./component/ArchiveCard";
const Archive = () => {
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
              <ArchiveCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Archive };
