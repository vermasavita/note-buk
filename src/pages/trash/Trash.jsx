import { Navbar, SideBar } from "../../components";
import { TrashCard } from "./component/TrashCard";
const Trash = () => {
  return (
    <>
      <Navbar />
      <div className="contaiiner">
        <div>
          <SideBar />
        </div>
        <div className="sub-container">
          <div className="notes-category">
            <h2>Trash Notes</h2>
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
